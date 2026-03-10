import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: ">job by europa",
  description:
    "A Chrome extension that extracts job listings and sends them to your n8n workflow for automated analysis. Built for students hunting their dream job.",
  keywords: [
    "job search",
    "chrome extension",
    "n8n",
    "automation",
    "poland",
    "student jobs",
    ">job",
    "europa",
  ],
  authors: [{ name: "europa" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: ">job by europa",
    description:
      "Extract job listings and automate your job search with n8n integration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
