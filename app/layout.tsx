import "./globals.css";
import { NavMenu } from "@/features/Navigation";
import { AuthProvider } from "@/features/Authentication";

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
    <AuthProvider>
      <html lang="en">
        <body className="font-rubik">
          <NavMenu />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
