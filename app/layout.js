import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Bubbly Baker",
  description: "You like bubbles? You like cakes? Come to the Bubbly Baker!",
};

export default function RootLayout({ children }) {
  const header = (
    <header>
      <Link href={"/"}>
        <h1> The Bubbly Baker</h1>
      </Link>
    </header>
  );

  const footer = <footer>Made with ❤️</footer>;
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
