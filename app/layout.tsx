import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Components and props",
  description: "Define country name in components as passing props",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
