import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "WONTAE's Portfolio",
  description: "WONTAE's Portfolio as Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
