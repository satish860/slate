import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Slate | Personal Knowledge Management",
  description: "A powerful Notion alternative built by Satish - organize your thoughts, documents, and tasks in one seamless workspace.",
  openGraph: {
    title: "Slate | Personal Knowledge Management",
    description: "A powerful Notion alternative built by Satish - organize your thoughts, documents, and tasks in one seamless workspace.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slate | Personal Knowledge Management",
    description: "A powerful Notion alternative built by Satish - organize your thoughts, documents, and tasks in one seamless workspace.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
