import { defineConfig } from 'astro/config';

const getSiteUrl = () => {
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'https://aksara-chick.vercel.app';
};

export default defineConfig({
  site: getSiteUrl(),
});
