"use client";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export function NavLink({ href, children }: Props) {
  return (
    <li className="h-20 flex items-center p-1">
      <Link href={href}>{children}</Link>
    </li>
  );
}
