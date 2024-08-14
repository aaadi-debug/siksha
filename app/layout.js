import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Siksha Helpline",
  description: "Solve all your education-related queries with Siksha and get admission to the top colleges, institutes, and universities in India. Discover everything you need to know about the best courses and scholarship programs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
