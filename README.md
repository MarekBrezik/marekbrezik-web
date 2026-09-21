# marekbrezik.cz

Minimalistický one-page web pro prezentaci řešení chytré energie a automatizace domu.

Postaveno na Astro, připravené pro statický build na Cloudflare Pages.

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
└── package.json
```

## Lokální vývoj

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Výstupní adresář pro Cloudflare Pages: `./dist/`.

## Nasazení na Cloudflare Pages (od nuly)

1. V Cloudflare Dashboard → **Pages** → **Create a project** → **Connect to Git**
2. Vyber repozitář `MarekBrezik/marekbrezik-web` a větev `main`
3. Nastav:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Klikni **Save and Deploy**
5. Po prvním deployi přejdi do projektu → **Settings** → **Environment variables**
6. Přidej proměnné podle sekce níže a klikni **Save**
7. Vrať se do **Deployments** a klikni **Retry deployment** (nebo udělej nový push)

## Environment variables pro formulář

Formulář odesílá přes Cloudflare Pages Function do [Resend](https://resend.com).

V Cloudflare Pages dashboardu přidej tyto proměnné:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | tvůj API klíč z Resend |
| `RESEND_FROM_EMAIL` | ověřený odesílací e-mail, např. `Kontakt <kontakt@marekbrezik.cz>` |
| `RESEND_TO_EMAIL` | e-mail, kam se mají poptávky posílat |

**Důležité:** V Resend musí být odesílací doména ověřená. Bez ověření můžeš odesílat pouze na trial e-mailové adresy.

## SEO

- JSON-LD schema pro `WebSite`, `ProfessionalService`, `WebPage` a `Service`
- Open Graph a Twitter metadata
- `robots.txt` a `sitemap.xml`
- Canonical URL a `hreflang`
- Semantic HTML, správná hierarchie nadpisů a accessibility atributy
