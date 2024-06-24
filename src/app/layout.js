import { Inter } from "next/font/google";
import { CartProvider } from "./context/CartContext";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your App Title",
  description: "Your App Description",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <CartProvider>
            {/* <SignedOut>
              <SignInButton/>
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn> */}
            <Navbar />
            {children}
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}