"use client";
import React, { useState, useEffect, Suspense, memo, lazy } from "react";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Script from "next/script";
import Preloader from "./components/Preloader";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";
import SocialMedia from "./components/SocialMedia";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";

const MemoizedNavbar = memo(Navbar2);

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Siksha Helpline",
//   description: "Solve all your education-related queries with Siksha and get admission to the top colleges, institutes, and universities in India. Discover everything you need to know about the best courses and scholarship programs.",
//   icons: {
//     icon: '/favicon.ico',
//   },
// };

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsLoading(false); // Ensure no loader on initial load

    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events?.on("routeChangeStart", handleStart);
    router.events?.on("routeChangeComplete", handleComplete);
    router.events?.on("routeChangeError", handleComplete);

    return () => {
      router.events?.off("routeChangeStart", handleStart);
      router.events?.off("routeChangeComplete", handleComplete);
      router.events?.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <html lang="en">
      <head>
        {/* <meta name="google-site-verification" content="EzxyJq1YWhTRsBWG8SGXMf0e1UVv82sj_PV1J41hM20" /> */}
        {/* <title>Siksha Helpline</title>
        <meta name="description" content="Solve all your education-related queries with Siksha and get admission to the top colleges, institutes, and universities in India. Discover everything you need to know about the best courses and scholarship programs." /> */}
        <meta
          name="google-site-verification"
          content="nIim5hw_WWaYERuTWrTmKikxHr6ks2QC5zbEqGbXxOU"
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2FQ9P5M6GH"
        ></script>
        {/* <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-2FQ9P5M6GH');
        </script> */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'G-2FQ9P5M6GH');
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <MemoizedNavbar />
        {isLoading && <Preloader />}
        {children}

        <Footer />

        <SocialMedia />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
