# marekbrezik.cz

Minimalistický one-page web pro prezentaci řešení chytré energie a automatizace domu.

Postaveno na Astro jako statický build, připravené pro Cloudflare Pages.

## Struktura

```text
/
├── functions/           # Cloudflare Pages Functions (např. kontaktní formulář)
├── public/              # Statické assety (favicon, OG obrázek, robots.txt, sitemap)
├── src/
│   ├── components/      # Astro komponenty sekcí
│   ├── pages/           # Hlavní stránka
│   └── styles/          # Globální CSS
├── astro.config.mjs
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
4. Přidejte environment variables pro formulář (viz níže).

## Kontaktní formulář (Resend)

Formulář odesílá přes Cloudflare Pages Function do [Resend](https://resend.com).

Vyžaduje tyto environment variables v Cloudflare Pages:

| Variable            | Popis                                                |
| ------------------- | ---------------------------------------------------- |
| `RESEND_API_KEY`    | API klíč z Resend                                    |
| `RESEND_FROM_EMAIL` | Ověřený odesílací e-mail (např. `Kontakt <kontakt@marekbrezik.cz>`) |
| `RESEND_TO_EMAIL`   | E-mail, kam se mají poptávky posílat                 |
| `SITE_URL`          | Volitelně doména (výchozí `https://marekbrezik.cz`)  |

V Resend musí být odesílací doména ověřená. Bez ověření můžete odesílat pouze na adresy z trial seznamu.

## SEO

- JSON-LD schema pro `WebSite`, `ProfessionalService`, `WebPage` a `Service`
- Open Graph a Twitter metadata
- `robots.txt` a `sitemap.xml`
- Canonical URL a `hreflang`
- Semantic HTML, správná hierarchie nadpisů a accessibility atributy
