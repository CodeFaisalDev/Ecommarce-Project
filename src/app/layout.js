import { Inter } from "next/font/google";
import { CartProvider } from "./context/CartContext";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
// import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your App Title",
  description: "Your App Description",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      {/* <SessionProvider> */}
        <body className={inter.className}>
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </body>
      {/* </SessionProvider> */}
    </html>
    </ClerkProvider>
  );
}
