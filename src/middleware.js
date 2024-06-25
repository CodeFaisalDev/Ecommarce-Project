// src/middleware.js
import { clerkMiddleware } from "@clerk/nextjs/server";

const handler = clerkMiddleware();

export default function middleware(req) {
  console.log("Request URL:", req.url);
  try {
    return handler(req);
  } catch (err) {
    console.error("Middleware error:", err);
    throw err;
  }
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)", "/studio"],
};
