import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const WalterFont = localFont({
  src: '../public/fonts/WalterFont.ttf',
})

export const metadata: Metadata = {
  title: "Vibe and Flavor",
  description: "a website to get a taste of foreign culture",
};

export default function RootLayout({children}: Readonly <{children: React.ReactNode;}>) {
  return (
    <html lang="fr" className={WalterFont.className}>
      <body>
        {children}
      </body>
    </html>
  );
}