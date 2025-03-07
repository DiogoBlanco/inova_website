import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Inova Smart Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
