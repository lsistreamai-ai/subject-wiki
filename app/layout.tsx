import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subject Wiki - Hong Kong Schools",
  description: "Collaborative knowledge base for Hong Kong education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
