import Navbar from "../components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "iPack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 antialiased">
        <Navbar />
        <main> {children}</main>
      </body>
    </html>
  );
}
