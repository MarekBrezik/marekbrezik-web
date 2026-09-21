# marekbrezik.cz

Minimalistický one-page web pro prezentaci řešení chytré energie a automatizace domu.

Postaveno na Astro jako statický build, připravené pro Cloudflare Pages.

## Struktura

```text
/
├── functions/           # Cloudflare Pages Functions (kontaktní formulář)
├── public/              # Statické assety (favicon, OG obrázek, robots.txt, sitemap)
├── src/
│   ├── components/      # Astro komponenty sekcí
│   ├── pages/           # Hlavní stránka
│   └── styles/          # Globální CSS
├── astro.config.mjs
├── wrangler.toml
└── package.json
```

## Vývoj

```sh
npm install
npm run dev
```

## Build a preview

```sh
npm run build
npm run preview
```

Výchozí adresář pro statický build: `./dist/`.

## Nasazení na Cloudflare Pages

1. Připojte repozitář v Cloudflare Pages.
2. Nastavte build command: `npm run build`
3. Nastavte output directory: `dist`
4. Nastavte environment variables pro formulář (viz níže).

## Kontaktní formulář (Resend)

Formulář odesílá přes Cloudflare Pages Function do [Resend](https://resend.com).

### Lokální vývoj

Zkopírujte `.env.example` do `.env` a doplňte hodnoty:

```sh
cp .env.example .env
```

### Produkční nastavení

V Cloudflare Pages dashboardu (Settings → Environment variables) nebo přes Wrangler CLI přidejte tyto **secrets**:

| Variable | Popis |
|---|---|
| `RESEND_API_KEY` | API klíč z Resend |
| `RESEND_FROM_EMAIL` | Ověřený odesílací e-mail, např. `Kontakt <kontakt@marekbrezik.cz>` |
| `RESEND_TO_EMAIL` | E-mail, kam se mají poptávky posílat |

Pomocí Wrangler CLI:

```sh
npx wrangler pages secret put RESEND_API_KEY
npx wrangler pages secret put RESEND_FROM_EMAIL
npx wrangler pages secret put RESEND_TO_EMAIL
```

**Důležité:** V Resend musí být odesílací doména ověřená. Bez ověření můžete odesílat pouze na trial e-mailové adresy.

## SEO

- JSON-LD schema pro `WebSite`, `ProfessionalService`, `WebPage` a `Service`
- Open Graph a Twitter metadata
- `robots.txt` a `sitemap.xml`
- Canonical URL a `hreflang`
- Semantic HTML, správná hierarchie nadpisů a accessibility atributy
