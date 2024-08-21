import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Siksha Helpline",
  description: "Solve all your education-related queries with Siksha and get admission to the top colleges, institutes, and universities in India. Discover everything you need to know about the best courses and scholarship programs.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <meta name="google-site-verification" content="EzxyJq1YWhTRsBWG8SGXMf0e1UVv82sj_PV1J41hM20" /> */}
        <meta name="google-site-verification" content="nIim5hw_WWaYERuTWrTmKikxHr6ks2QC5zbEqGbXxOU" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2FQ9P5M6GH"></script>
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
