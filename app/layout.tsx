import { GeistSans } from "geist/font/sans";
import "./globals.css";
import clsx from "clsx";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Correplaces 2024",
  description: "Visca el correplaces!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={(clsx(GeistSans.className), "min-h-screen min-w-screen")}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Frijole&family=Rubik+Mono+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[url('fons.webp')] text-foreground backdrop-blur-sm">
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
