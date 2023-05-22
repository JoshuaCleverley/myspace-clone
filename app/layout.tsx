import "./globals.css";

export const metadata = {
  title: "Myspace Clone",
  description:
    "A myspace clone created by Joshua Cleverley, following a tutorial from Fireship.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-rubik">{children}</body>
    </html>
  );
}
