import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Eco Pack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-300 antialiased">
        <Navbar />
        <main> {children}</main>
      </body>
    </html>
  );
}