"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from "./nav-link.module.css";

function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.Link} ${classes.active}`
          : classes.Link
      }
    >
      {children}
    </Link>
  );
}

export default NavLink;
