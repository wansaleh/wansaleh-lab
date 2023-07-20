import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://newstart.vercel.app',
      lastModified: new Date(),
    },
  ];
}
