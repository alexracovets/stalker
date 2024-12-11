

import { Roboto_Condensed, Roboto, Rethink_Sans } from 'next/font/google';
import localFont from "next/font/local";
import type { Metadata } from "next";

import { PDAVideo } from "@/components/shared";

const roboto_condensed = Roboto_Condensed({
  weight: ["500", "600"],
  variable: '--font-roboto_condensed',
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
}); 

const roboto = Roboto({
  weight: ["400"],
  variable: '--font-roboto',
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
});

const rethink = Rethink_Sans({
  weight: ["800"],
  variable: '--font-rethink',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const calibri = localFont({
  src: [
    {
      path: "./fonts/calibri/calibri.woff2",
      weight: "400",
      style: "normal"
    }
  ],
  variable: "--font-calibri"
});

const stalker = localFont({
  src: [
    {
      path: "./fonts/amaz_stalker/amaz_stalker.ttf",
      weight: "400",
      style: "normal"
    }
  ],
  variable: "--font-stalker"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import "./globals.scss";
import Head from 'next/head';

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="uk">
      <body
        className={`${calibri.variable} ${stalker.variable} ${roboto_condensed.variable} ${roboto.variable} ${rethink.variable} antialiased bg-main-black`}
      >
        {children}
        <PDAVideo />
        <Head>
          <script src="/_next/static/chunks/main.js" defer />
          <script src="/_next/static/chunks/webpack.js" defer />
        </Head>
      </body>
    </html>
  );
}
