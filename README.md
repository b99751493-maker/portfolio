# Developer Portfolio (React + Tailwind + Framer Motion + Three.js)

JavaScript only (TypeScript yo'q). Vite bilan qurilgan.

## O'rnatish

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # build'ni sinab ko'rish
```

Node.js 18+ kerak.

## Ma'lumotlarni to'ldirish — faqat bitta fayl

Hammasi `src/data/siteData.js` ichida. Bo'sh qoldirilgan joylarda saytda
`[PLACEHOLDER]` ko'rinadi (hech narsa o'ylab topilmagan).

1. **Shaxsiy ma'lumot** — `profile` obyekti: `name`, `initials`, `profession`, `intro`, `age`, `location`, `experience`, `skillsSummary`, `bio`, `goals`, `photo`.
2. **Rasm** — rasmni `public/` ga qo'ying (masalan `public/photo.jpg`), so'ng `photo: '/photo.jpg'`.
3. **13 ta loyiha** — `projects` massividagi har bir yozuv uchun:
   ```js
   {
     ...blank(1),
     name: 'Krossovka karta',
     description: 'Savatcha, layk va dark/light rejimli mahsulot kartasi.',
     url: 'https://my-project-1.vercel.app',   // har loyiha uchun ALOHIDA
     github: 'https://github.com/you/repo-1',  // ixtiyoriy
     image: '/projects/01.jpg',                // public/projects/01.jpg
     tech: ['React', 'Tailwind'],
     category: 'Frontend',
   }
   ```
   `url` bo'sh bo'lsa karta bosilmaydi va belgilangan placeholder ko'rinadi.
   `image` bo'sh yoki yuklanmasa, noyob generativ preview chiqadi.
4. **Skills** — `skills[i].note` ga o'zingiz yozing (foizlar ataylab yo'q).
5. **Experience / Achievements / Certificates / Education** — `experienceBlocks[i].items`:
   `[{ title: '...', meta: '2025 — hozir', text: '...' }]`
6. **Kontaktlar** — `contacts` obyekti (to'liq havola bilan: `https://t.me/...`, `https://github.com/...`).

## Kontakt forma

Forma validatsiya qiladi. **Server ulanmagan bo'lsa, u xabar yuborilganini da'vo qilmaydi** —
foydalanuvchiga halol xabar ko'rsatadi. Haqiqiy yuborish uchun
[Formspree](https://formspree.io) da forma yarating va `FORM_ENDPOINT` ga manzilni yozing.

## Deploy

`npm run build` → `dist/` papkasini Vercel / Netlify / GitHub Pages ga yuklang.
Vercel: repo'ni ulang, Framework = Vite, Build = `npm run build`, Output = `dist`.

## Tuzilma

```
src/
  data/siteData.js      <- barcha kontent
  hooks/                <- reduced-motion, active section
  components/           <- Loader, Navbar, Hero(+3D), About, Projects(+Card), Skills, Experience, Contact, Footer
  index.css             <- custom CSS (grain, glass, marquee, cursor)
tailwind.config.js      <- ranglar: midnight, ivory, lime, emerald, silver, chrome, ember
```

## Sifat

- `prefers-reduced-motion` hurmat qilinadi (3D o'rniga statik orb, animatsiyalar o'chadi)
- Kursor faqat desktop (`hover: hover`)
- Rasmlar `loading="lazy"`, 3D sahna lazy-load (alohida chunk)
- Semantik HTML, ARIA, "skip link", klaviatura fokusi
# portfolio
# portfolio
