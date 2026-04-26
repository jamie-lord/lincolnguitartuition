#!/usr/bin/env python3
"""Convert the WordPress inventory into Jekyll page stubs (content body only).

Outputs cleaned-body HTML fragments to /tmp/wp_clean/<slug>.html so we can
review them and hand-build polished Jekyll pages page-by-page. We don't
auto-generate every page in-place because each one has its own bespoke
treatment (FAQ accordion, track player, video grid, etc.).
"""
from __future__ import annotations
import json
import re
import os
import html
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INVENTORY = ROOT / "_data" / "wp_inventory.json"
OUT_DIR = Path("/tmp/wp_clean")
OUT_DIR.mkdir(parents=True, exist_ok=True)

# ----------------------------------------------------------------------------
# Helpers — these are the WordPress quirks that show up on every migration
# ----------------------------------------------------------------------------
WP_BLOCK_COMMENT = re.compile(r"<!--\s*/?wp:[^>]*-->", re.IGNORECASE)
SHORTCODE_AUDIO = re.compile(
    r'\[audio\s+mp3="([^"]+)"\s*\]\s*\[/audio\]', re.IGNORECASE
)
SHORTCODE_GENERIC = re.compile(r"\[(\w+)([^\]]*)\](?:(.*?)\[/\1\])?", re.DOTALL)
NBSP = re.compile(r"&nbsp;| ")
EMPTY_TAGS = re.compile(
    r"<(p|h[1-6]|div)>\s*</\1>", re.IGNORECASE
)
WP_DOMAIN = re.compile(r"https?://lincolnguitartuition\.uk", re.IGNORECASE)
WP_DEV_DOMAIN = re.compile(r"https?://lincolnguitartuition\.dev\.lord\.technology", re.IGNORECASE)
STYLE_LEFT = re.compile(r'\s*style="text-align:\s*left;?"', re.IGNORECASE)
STRAY_INLINE_STYLE = re.compile(
    r'\s*style="(?:[^"]*?)"', re.IGNORECASE
)
DOUBLE_DOTS = re.compile(r"\.{3,}")
DASH_BETWEEN_WORDS = re.compile(r"(?<=\w)\s-\s(?=\w)")


def clean_body(html_in: str) -> str:
    if not html_in:
        return ""
    s = html_in

    # Strip WP block comments.
    s = WP_BLOCK_COMMENT.sub("", s)

    # Replace [audio mp3="..."][/audio] with a semantic <div class="audio-row">.
    def _audio_sub(m: re.Match) -> str:
        src = m.group(1)
        # Normalise the URL: drop scheme+host, keep absolute path.
        path = re.sub(r"^https?://[^/]+", "", src)
        return (
            f'<div class="audio-row">\n'
            f'  <audio controls preload="none" src="{path}"></audio>\n'
            f"</div>"
        )
    s = SHORTCODE_AUDIO.sub(_audio_sub, s)

    # Drop any other shortcodes wholesale — we will rebuild things from data files.
    s = SHORTCODE_GENERIC.sub(lambda m: "", s)

    # Normalise hard-coded WP URLs to root-relative (preserves SEO under any domain).
    s = WP_DOMAIN.sub("", s)
    s = WP_DEV_DOMAIN.sub("", s)

    # Tidy whitespace artefacts.
    s = NBSP.sub(" ", s)
    s = DOUBLE_DOTS.sub("…", s)
    s = DASH_BETWEEN_WORDS.sub(" — ", s)

    # WP often spits out style="text-align:left" on every paragraph — useless.
    s = STYLE_LEFT.sub("", s)

    # Remove empty wrapper tags left behind by shortcode/block stripping.
    # Run repeatedly until stable.
    prev = None
    while prev != s:
        prev = s
        s = EMPTY_TAGS.sub("", s)

    # Strip leading/trailing whitespace per line.
    s = "\n".join(line.rstrip() for line in s.splitlines() if line.strip())

    return s.strip()


def main() -> None:
    inventory = json.loads(INVENTORY.read_text())
    for page in inventory["pages"] + inventory["portfolio"]:
        slug = page.get("slug") or f"id-{page['id']}"
        cleaned = clean_body(page.get("content", ""))
        out = OUT_DIR / f"{slug}.html"
        out.write_text(cleaned)
        print(f"  {slug:30} {len(cleaned):>6} chars")


if __name__ == "__main__":
    main()
