# FAWAD SPORTS
Premium Pakistani sports e-commerce starter, built with Next.js 15, TypeScript and Prisma/PostgreSQL.

## Included
- Premium responsive storefront
- Homepage with announcement bar, header, navigation, hero, categories, best sellers, new arrivals, football promo, WhatsApp CTA and footer
- Shop search + category filters
- Product detail pages
- Functional browser cart using localStorage
- Checkout with Cash on Delivery and WhatsApp order handoff to 03405049439
- Admin UI shell
- Prisma PostgreSQL schema for Product, Order and Admin
- GitHub/Vercel-friendly configuration

## Run
1. `npm install`
2. Copy `.env.example` to `.env`
3. Set `DATABASE_URL` to a PostgreSQL connection string for persistent production data.
4. `npx prisma generate`
5. `npx prisma migrate dev --name init` (local database)
6. `npm run dev`

## Production
For Vercel, configure `DATABASE_URL` in Project Settings. Never commit `.env` or credentials. A persistent hosted PostgreSQL database is required for real orders/products; Vercel's filesystem is not a production database.

## WhatsApp
Customer checkout opens WhatsApp to `03405049439` with the customer's delivery details, cart items, subtotal, shipping and total.

## Important
The storefront is fully usable as a frontend demo. The Prisma schema is the persistence foundation, while the admin page is intentionally a safe UI shell until a real authentication provider and database API are connected. Do not treat the demo admin form as production authentication.
