import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Embroidery Workshop - Custom Designs & Services",
  description: "Professional embroidery services with custom designs for businesses and individuals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Exo+2:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-elegant">
        {children}
      </body>
    </html>
  );
}