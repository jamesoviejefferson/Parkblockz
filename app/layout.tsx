// app/layout.tsx
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'ParkBlockX™',
  description: 'Apple Liquid Glass',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
