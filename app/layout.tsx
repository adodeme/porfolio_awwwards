import "./globals.css";

export const metadata = {
  title: "John Doe",
  description: "Creative Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}