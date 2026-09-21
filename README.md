# marekbrezik.cz

Minimalistický one-page web pro prezentaci řešení chytré energie a automatizace domu.

Postaveno na Astro jako statický build, připravené pro Cloudflare Pages.

## Struktura

```text
/
├── public/              # Statické assety (favicon, OG obrázek)
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

## Formulář

Kontaktní formulář v současnosti otevírá e-mailového klienta předvyplněnou zprávou. Pro skutečné odesílání bez JS změňte `action` formuláře v `src/components/Contact.astro` např. na Formspree, Web3Forms nebo Cloudflare Pages Functions endpoint.
