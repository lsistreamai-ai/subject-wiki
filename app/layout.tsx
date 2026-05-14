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
      <body className="antialiased bg-gray-50">
        <nav className="bg-blue-600 text-white p-4 shadow-lg">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <a href="/" className="font-bold text-xl">📚 Subject Wiki</a>
            <div className="flex gap-4">
              <a href="/subjects" className="hover:underline">Subjects</a>
              <a href="/login" className="hover:underline">Teacher Login</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
