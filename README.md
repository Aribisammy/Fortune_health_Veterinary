# Fortune Health Veterinary Services — Complete Website

This is the consolidated Fortune Health Veterinary Services website project through Stage 11.

## Included
- Next.js App Router + TypeScript
- Responsive homepage and core pages
- Appointment request form + API validation
- Contact enquiry form + API validation
- WhatsApp click-to-chat and pre-filled appointment messages
- SEO metadata, canonical URL, sitemap and robots rules
- VeterinaryCare structured data
- Accessibility foundations
- Custom 404 page

## Before production
1. Replace the temporary `siteUrl` in `data/seo.ts` with the final domain.
2. Add the real business logo and approved business photos.
3. Run `npm install` and `npm run build`.
4. Test the site on Android and desktop.
5. Confirm phone/WhatsApp number: 07033330262.
6. Connect a secure notification/storage service for appointment and contact submissions.

## Important
The website does not automatically send WhatsApp messages. It opens WhatsApp with a pre-filled message and the customer must tap Send.

The appointment request is not a confirmed appointment until Fortune Health confirms the time.

## Deployment path
GitHub → Vercel → custom domain → final live-site testing.
