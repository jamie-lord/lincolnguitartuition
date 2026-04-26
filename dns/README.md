# DNS / domain

`CNAME` is parked here so it does **not** activate while we're previewing on
`username.github.io/<repo>/`. While `CNAME` is at the repo root, GitHub Pages
issues a 302 from the preview URL to the custom domain — and until DNS is
cut over, the custom domain doesn't resolve, so previews are broken.

## Going live

1. Point DNS for `lincolnguitartuition.uk` (and `www.`) at GitHub Pages —
   see [GitHub's apex domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
2. Move the file:

   ```sh
   git mv dns/CNAME CNAME
   git commit -m "Activate CNAME for lincolnguitartuition.uk"
   git push
   ```

3. In **Settings → Pages**, tick *Enforce HTTPS* once the cert provisions
   (usually a few minutes after the first successful deploy).
