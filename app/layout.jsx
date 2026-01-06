import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: {
    default: 'Leeds DASA - Leeds and District Amalgamated Society of Anglers',
    template: '%s | Leeds DASA',
  },
  description: 'One of the largest and oldest angling associations in England. Access to 40+ waters including rivers, canals, and lakes across Leeds and surrounding district.',
  keywords: ['fishing', 'angling', 'Leeds', 'Yorkshire', 'coarse fishing', 'fishing club', 'angling society'],
  authors: [{ name: 'Leeds DASA' }],
  openGraph: {
    title: 'Leeds DASA - Leeds and District Amalgamated Society of Anglers',
    description: 'One of the largest and oldest angling associations in England.',
    url: 'https://www.leedsdasa.co.uk',
    siteName: 'Leeds DASA',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

