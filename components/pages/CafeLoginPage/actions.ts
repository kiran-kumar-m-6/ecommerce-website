"use server";
import { cookies } from "next/headers";

export async function setAuthCookie(gmail: string) {
  const cookieStore = await cookies();

  cookieStore.set("auth", gmail, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    //maxAge: 120,
    path: "/",
  });
}