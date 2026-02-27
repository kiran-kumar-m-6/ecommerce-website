import { NextRequest, NextResponse } from "next/server";

const Protected_Routes = [
    "/cafe/dashboard",
    "/cafe/profile",
    "/cafe/settings"
];

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get("auth");
  const isAuth = Boolean(authCookie?.value);
  const { pathname } = request.nextUrl;

  if (!isAuth && Protected_Routes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/cafe/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/cafe/:path*"],
};