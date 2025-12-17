import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Price Bookmarker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "container mx-auto flex min-h-dvh flex-col px-[5vw] antialiased",
        )}
      >
        <Providers>
          <Header />
          <main className="my-8 flex-1 rounded-xl border px-[4vw] shadow-sm backdrop-blur-md dark:shadow-md">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
