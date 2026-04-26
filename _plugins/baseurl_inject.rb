# Prepends site.baseurl to any root-relative href="/..." or src="/..."
# in rendered HTML output. Idempotent — won't double-prefix.
#
# Why: WordPress body HTML hard-codes paths like /wp-content/uploads/2014/...,
# and Jekyll's `relative_url` filter only fires inside Liquid. Without this,
# preview deploys at username.github.io/<repo>/ would 404 every body link.
# Skip when baseurl is empty (production, custom domain).

module Jekyll
  module BaseurlInject
    HREF_OR_SRC = /(\b(?:href|src))=(["'])\/(?!\/)([^"']*)/i

    Jekyll::Hooks.register [:pages, :documents], :post_render do |item|
      next if item.site.baseurl.nil? || item.site.baseurl.empty?
      next unless item.output && item.path.end_with?(".html", ".htm", ".md", ".markdown")

      base = item.site.baseurl.chomp("/")
      already_prefixed = /(["'])#{Regexp.escape(base)}\//
      item.output = item.output.gsub(HREF_OR_SRC) do |match|
        attr = Regexp.last_match(1)
        quote = Regexp.last_match(2)
        rest = Regexp.last_match(3)
        # Skip protocol-relative or anchor-only.
        if rest.start_with?("/") || rest.start_with?("#")
          match
        else
          %(#{attr}=#{quote}#{base}/#{rest})
        end
      end
    end
  end
end
