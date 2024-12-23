import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";

const protectedRoute = ["/profile", "/features"];
const publicRoutes = ["/login", "/signup"];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoute.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = cookies().get("session")?.value;
  const session = cookie ? await decrypt(cookie) : null;

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/signup", req.nextUrl));
  }

  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}
