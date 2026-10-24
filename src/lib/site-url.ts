/**
 * URL pública del sitio. En Vercel se toma sola del dominio de producción;
 * si usas un dominio propio, ponlo en NEXT_PUBLIC_SITE_URL.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
