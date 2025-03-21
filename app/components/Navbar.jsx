import Image from "next/image";
import Link from "next/link";
import Logo from "./helpdesk-logo.png";

export default function Navbar({ user }) {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Help Desk Logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      {user && <span>Hello, {user.email}</span>}
    </nav>
  );
}
