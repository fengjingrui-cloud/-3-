# Cloudflare Pages Deployment

The final deployable website is in the `dist` folder.

Important: do not run `npm run build` on Cloudflare Pages for this upload. The latest optimized page edits are preserved in `dist`. Rebuilding from `src` may generate an older version of the site.

Recommended Cloudflare Pages settings:

- Framework preset: None
- Build command: leave empty
- Build output directory: `dist`
- Root directory: leave empty, use the repository root

If Cloudflare requires a build command, use:

```bash
echo "Using prebuilt dist"
```

Recommended GitHub contents:

- Commit: `dist`, `src`, `520_frames`, `index.html`, `package.json`, `package-lock.json`, `static-preview-server.cjs`, `wrangler.toml`
- Do not commit: `node_modules`, `.agents`, `.codex`, log files

Note: the media files are large. The largest first-screen video is about 86.7MB, which is under GitHub's 100MB single-file limit, but upload may be slow.
