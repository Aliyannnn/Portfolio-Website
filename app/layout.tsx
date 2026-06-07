import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';

const SITE_URL = 'https://aliyan-portfolio-website.vercel.app';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Aliyan Arif | Full-Stack Web Developer',
    template: '%s | Aliyan Arif',
  },
  description: 'Full-stack web developer with expertise in building modern, scalable, and user-friendly web applications using React, Next.js, Node.js, and MongoDB.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'Aliyan Arif',
    'Aliyan',
    'Arif',
    'Aliyan Developer',
    'Aliyan Full Stack Developer',
    'Aliyan Arif Full Stack Developer',
    'Full Stack Developer',
    'MERN Developer',
    'React Developer',
    'Next.js',
    'Node.js',
    'MongoDB',
    'Frontend Developer',
    'Backend Developer',
    'Web Developer',
    'Full Stack Web Developer Pakistan',
    'React Developer Pakistan',
    'MERN Developer Pakistan'
  ],
  authors: [{ name: 'Aliyan Arif' }],
  creator: 'Aliyan Arif',
  publisher: 'Aliyan Arif',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Aliyan Arif | Full-Stack Web Developer',
    description: 'Full-stack web developer specializing in React, Next.js, Node.js, and MongoDB. Passionate about building modern and scalable web apps.',
    siteName: 'Aliyan Arif Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Aliyan Arif - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aliyan Arif | Full-Stack Web Developer',
    description: 'Full-stack web developer with expertise in React, Next.js, Node.js, and MongoDB.',
    creator: '@Aliyann712709',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#eeeeee' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aliyan Arif',
    url: SITE_URL,
    jobTitle: 'Full-Stack Web Developer',
    description:
      'Full-stack web developer specializing in React, Next.js, Node.js, and MongoDB.',
    image: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://github.com/Aliyannnn',
      'https://www.linkedin.com/in/aliyan-arif-9b4179377/',
      'https://x.com/Aliyann712709',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'Node.js',
      'MongoDB',
      'TypeScript',
      'Full-Stack Web Development',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans bg-background text-foreground min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={true}
          storageKey="theme"
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}