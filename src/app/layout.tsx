import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3D Animation Exposition",
  description: "3D Animation Exposition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
