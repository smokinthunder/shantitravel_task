import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import { fetchGlobalData } from "@/lib/strapi";
import { ErrorBoundary } from "@/components/error/error-boundary";
import { ErrorState } from "@/components/ui/states";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shanti Travel - Explore India",
  description: "Discover the soul of India with our tailor-made tours",
};

/**
 * Root layout component with global data fetching and error handling
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await fetchGlobalData();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          {globalData ? (
            <>
              {globalData.header && <Header data={globalData.header} />}
              
              <ErrorBoundary fallback={
                <ErrorState 
                  message="Failed to load page content" 
                  className="min-h-[400px]" 
                />
              }>
                <main className="min-h-screen">{children}</main>
              </ErrorBoundary>
              
              {globalData.footer && <Footer data={globalData.footer} />}
            </>
          ) : (
            <ErrorState 
              message="Failed to load site data"
              className="min-h-screen"
            />
          )}
        </ErrorBoundary>
      </body>
    </html>
  );
}
