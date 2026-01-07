// app/layout.tsx
import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'ParkBlockX™',
  description: 'Apple Liquid Glass',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body data-cjcrx="addYes">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
