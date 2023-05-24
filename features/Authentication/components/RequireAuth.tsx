"use client";
import { useSession } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export function RequireAuth({ children }: Props) {
  const { data: session, status } = useSession();

  console.log(session, status);

  if (status === "authenticated") return <>{children}</>;
  return <></>;
}
