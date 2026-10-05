# Fortune Health Veterinary Services — Stage 10 Complete QA Build

This folder is the assembled project from Stages 5–9, with the Stage 10 packaging fixes.

## Included
- Homepage and all planned pages
- Appointment API + form
- Contact API + form
- WhatsApp helper and buttons
- SEO metadata
- LocalBusiness/VeterinaryCare structured data
- Sitemap and robots
- Accessibility skip link
- Next.js/TypeScript/Tailwind project configuration
- `.env.example` and `.gitignore`

## QA result

The project files were assembled and statically checked. A full `npm install` / `npm run build` could not be completed in this environment because dependency installation timed out. Therefore, the build is **not claimed as verified** here.

Run locally before deployment:

```bash
npm install
npm run build
npm run dev
```

## Before production

1. Replace the temporary `siteUrl` in `data/seo.ts` with the final domain.
2. Add real business photos/logo.
3. Test every page on Android and desktop.
4. Test appointment/contact submissions.
5. Test WhatsApp and phone links.
6. Run the production build successfully.
7. Then deploy to GitHub + Vercel.
