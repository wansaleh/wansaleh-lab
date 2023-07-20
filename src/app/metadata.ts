import { Metadata } from 'next';

const metadata: Metadata = {
  metadataBase: new URL('https://lab.wansaleh.com'),

  title: {
    default: "Wan's Lab",
    template: "Wan's Lab — %s",
  },
  robots: {
    index: true,
    follow: true,
  },
  description: 'Lab & playground for frontend development by Wan Saleh.',
  keywords: ['NextJS', 'React', 'TypeScript', 'TailwindCSS'],
  twitter: {
    title: 'NewStart',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  themeColor: 'rgb(0 0 0)',
  authors: [
    {
      name: 'Wan Saleh',
      url: 'https://wansaleh.com',
    },
  ],
};

export default metadata;
