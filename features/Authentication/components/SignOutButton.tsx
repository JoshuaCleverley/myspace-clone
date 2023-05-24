"use client";
import { signOut, useSession } from "next-auth/react";

export function SignOutButton() {
  const { status } = useSession();
  if (status === "authenticated") {
    return (
      <button
        className="bg-blue-950 p-2 px-4 rounded-md"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    );
  } else return <></>;
}
