#!/usr/bin/env python3
"""Parse the WordPress XML export into an inventory JSON.

Run: python3 scripts/wp_inventory.py
Writes _data/wp_inventory.json
"""
from __future__ import annotations
import json
import os
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
XML_SRC = ROOT / "lincolnguitartuition.WordPress.2026-04-26.xml"
OUT = ROOT / "_data" / "wp_inventory.json"

NS = {
    "wp": "http://wordpress.org/export/1.2/",
    "content": "http://purl.org/rss/1.0/modules/content/",
    "excerpt": "http://wordpress.org/export/1.2/excerpt/",
    "dc": "http://purl.org/dc/elements/1.1/",
}

def text(el, tag, ns=None):
    if el is None:
        return ""
    if ns:
        node = el.find(f"{ns}:{tag}", NS)
    else:
        node = el.find(tag)
    if node is None or node.text is None:
        return ""
    return node.text


def load_xml() -> ET.Element:
    raw = XML_SRC.read_bytes()
    # Strip stray null/control bytes that break the parser.
    cleaned = bytes(b for b in raw if b >= 0x20 or b in (0x09, 0x0A, 0x0D))
    return ET.fromstring(cleaned)


def main() -> None:
    if not XML_SRC.exists():
        print(f"missing: {XML_SRC}", file=sys.stderr)
        sys.exit(1)
    root = load_xml()
    items = root.findall(".//item")

    pages = []
    posts = []
    attachments = []
    nav_items = []
    portfolio = []

    for it in items:
        pt = text(it, "post_type", "wp")
        common = {
            "id": text(it, "post_id", "wp"),
            "title": (text(it, "title") or "").strip(),
            "slug": text(it, "post_name", "wp"),
            "link": (text(it, "link") or "").strip(),
            "status": text(it, "status", "wp"),
            "parent": text(it, "post_parent", "wp"),
            "date": text(it, "post_date", "wp"),
            "type": pt,
        }
        body_el = it.find("content:encoded", NS)
        body = body_el.text if body_el is not None else ""
        excerpt_el = it.find("excerpt:encoded", NS)
        excerpt = excerpt_el.text if excerpt_el is not None else ""

        if pt == "page":
            pages.append({**common, "content": body or "", "excerpt": (excerpt or "").strip()})
        elif pt == "post":
            posts.append({**common, "content": body or "", "excerpt": (excerpt or "").strip()})
        elif pt == "portfolio":
            portfolio.append({**common, "content": body or "", "excerpt": (excerpt or "").strip()})
        elif pt == "attachment":
            url_el = it.find("wp:attachment_url", NS)
            url = url_el.text.strip() if url_el is not None and url_el.text else ""
            metas = {}
            for m in it.findall("wp:postmeta", NS):
                k = text(m, "meta_key", "wp")
                v = text(m, "meta_value", "wp")
                metas[k] = v
            attachments.append({
                **common,
                "url": url,
                "alt": metas.get("_wp_attachment_image_alt", ""),
                "file": metas.get("_wp_attached_file", ""),
            })
        elif pt == "nav_menu_item":
            metas = {}
            for m in it.findall("wp:postmeta", NS):
                k = text(m, "meta_key", "wp")
                v = text(m, "meta_value", "wp")
                metas[k] = v
            nav_items.append({
                **common,
                "object_id": metas.get("_menu_item_object_id"),
                "object": metas.get("_menu_item_object"),
                "url": metas.get("_menu_item_url"),
                "parent_menu": metas.get("_menu_item_menu_item_parent"),
            })

    # Map id → attachment (for shortcode expansion)
    att_by_id = {a["id"]: a for a in attachments}

    inventory = {
        "pages": pages,
        "posts": posts,
        "portfolio": portfolio,
        "attachments": attachments,
        "nav_menu": nav_items,
        "att_by_id": att_by_id,
    }

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(inventory, indent=2, ensure_ascii=False))
    print(
        f"Wrote {OUT.relative_to(ROOT)}: "
        f"{len(pages)} pages, {len(posts)} posts, {len(portfolio)} portfolio, "
        f"{len(attachments)} attachments, {len(nav_items)} nav items"
    )


if __name__ == "__main__":
    main()
