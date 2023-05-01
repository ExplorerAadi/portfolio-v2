import "../styles/globals.css";
import { Contact } from "./Contact";
import { Header } from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="relative max-w-7xl mx-auto px-4 md:px-10">
          <Header />
          {children}
          <Contact />
        </div>
      </body>
    </html>
  );
}
