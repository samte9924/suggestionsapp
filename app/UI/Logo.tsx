import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex gap-1 items-center select-none">
        <Image src="/static/favicon.svg" alt="logo" width={80} height={80} />
        <h1 className="text-4xl">eLgis</h1>
      </div>
    </Link>
  );
}
