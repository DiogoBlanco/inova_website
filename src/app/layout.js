import "./globals.css";

export const metadata = {
  title: "Inova Smart Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
