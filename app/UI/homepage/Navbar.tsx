import Link from "next/link";

export default function Navbar() {
  return (
    <div className="relative w-full mt-4 px-4 flex justify-between items-center">
      <div className="flex">
        <Link href="/" className="navbar-item">
          Homepage
        </Link>
      </div>
      <div className="flex gap-2">
        <Link href="/newsletter" className="navbar-item">
          Newsletter
        </Link>
        <Link href="/changelog" className="navbar-item">
          Changelog
        </Link>
        <Link href="/user/account" className="navbar-item">
          Account
        </Link>
      </div>
    </div>
  );
}
