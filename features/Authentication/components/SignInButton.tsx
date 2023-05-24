"use client";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") return <></>;
  if (status === "authenticated") {
    return (
      <Link href="/dashboard">
        <Image
          src={session.user?.image ?? "/favicon.ico"}
          alt="Your Name"
          width="40"
          height="40"
          className="rounded-lg"
        />
      </Link>
    );
  }

  return (
    <button
      className="bg-blue-950 p-2 px-4 rounded-md"
      onClick={() => signIn()}
    >
      Sign in
    </button>
  );
}
