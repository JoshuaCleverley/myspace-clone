import Link from "next/link";
import { NavLink } from "./NavLink";

export function NavMenu() {
  return (
    <nav className="flex bg-blue-600 text-white h-20 justify-between items-center">
      <Link className="ml-4 text-3xl font-semibold" href="/">
        Logo
      </Link>
      <ul className="list-none flex mr-4">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/users">Users</NavLink>
      </ul>
    </nav>
  );
}
