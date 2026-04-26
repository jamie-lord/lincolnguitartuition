# Prepends site.baseurl to any root-relative href="/..." or src="/..."
# in rendered HTML output. Idempotent — won't double-prefix.
#
# Why: WordPress body HTML can hard-code paths like /wp-content/uploads/...,
# and Jekyll's `relative_url` filter only fires inside Liquid templates.
# Without this, preview deploys at username.github.io/<repo>/ would 404
# every hard-coded body link.
#
# We skip:
#   - empty baseurl (production / custom domain)
#   - URLs that already start with the baseurl (idempotent — most of our
#     templates already use `relative_url`, so this catches the few that don't)
#   - protocol-relative URLs (//cdn.example.com)
#   - same-document anchors (#foo)

module Jekyll
  module BaseurlInject
    HREF_OR_SRC = /(\b(?:href|src))=(["'])(\/[^"']*)/i

    Jekyll::Hooks.register [:pages, :documents], :post_render do |item|
      base = (item.site.baseurl || "").chomp("/")
      next if base.empty?
      next unless item.output && item.path.to_s.match?(/\.(html?|md|markdown|xml|txt)\z/i)

      base_prefix = base + "/"

      item.output = item.output.gsub(HREF_OR_SRC) do |_match|
        attr = Regexp.last_match(1)
        quote = Regexp.last_match(2)
        url = Regexp.last_match(3)

        # Skip protocol-relative (//host/...) and anything that already
        # has the baseurl prefix.
        if url.start_with?("//") || url == base || url.start_with?(base_prefix)
          %(#{attr}=#{quote}#{url})
        else
          %(#{attr}=#{quote}#{base}#{url})
        end
      end
    end
  end
end
