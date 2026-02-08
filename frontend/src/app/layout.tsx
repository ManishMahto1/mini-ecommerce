import type { Metadata } from 'next';
import { CartProvider } from '../context/CartContext';
import Header from '../components/Header';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Mini Shop - E-Commerce Store',
  description: 'A mini e-commerce application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
