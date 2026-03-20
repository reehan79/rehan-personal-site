# Domain Configuration — rehan-mahmood.com

Canonical domain: **https://rehan-mahmood.com**

## Canonical URLs

- All metadata, sitemap, and robots use https://rehan-mahmood.com as the canonical base.
- lib/site-config.ts defaults to this URL; override with NEXT_PUBLIC_SITE_URL for other deploys.

## www to apex redirect

Redirect www.rehan-mahmood.com to https://rehan-mahmood.com:

1. **Vercel**: Project Settings, Domains, add both rehan-mahmood.com (primary) and www.rehan-mahmood.com, then configure redirect from www to apex.
2. **DNS**: If not using Vercel: CNAME www to apex or use provider redirect rules.

## Preventing vercel.app indexing

The *.vercel.app preview URL should not be the canonical indexed version:

- **Production**: Only rehan-mahmood.com is canonical.
- **robots.txt**: Uses siteConfig.baseUrl for sitemap; in production, NEXT_PUBLIC_SITE_URL should point to https://rehan-mahmood.com.
- **Preview deploys**: Keep preview URLs unindexed; do not set NEXT_PUBLIC_SITE_URL on preview deployments to a vercel.app URL for indexing purposes.

## Vercel checklist (manual)

- [ ] Production domain set to rehan-mahmood.com
- [ ] NEXT_PUBLIC_SITE_URL=https://rehan-mahmood.com in Production environment
- [ ] www to apex redirect configured (if desired)
- [ ] No indexing of preview deployments as canonical (only production domain)
