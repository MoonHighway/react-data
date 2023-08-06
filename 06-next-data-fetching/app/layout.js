import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Snowtooth Mountain",
  description: "A fake ski resort with a real website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main role="main">{children}</main>
      </body>
    </html>
  );
}
