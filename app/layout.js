import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  variable: '--font-montserrat', // ✅ Fixed spelling
  weight: ['400', '500', '600', '700'], // ✅ Use correct "weight" format
  subsets: ['latin'], // ✅ Add subsets for proper font loading
});

export const metadata = {
  title: 'Sustainable Cow Breeding',
  description: 'A website dedicated to sustainable cow breeding practices.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
