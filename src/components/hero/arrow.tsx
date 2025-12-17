import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";

function Arrow({ href }: { href: string }) {
  return (
    <div className="grid h-100 w-full place-items-center">
      <Link href={href} className="grid size-12 place-items-center">
        <BsArrowDown className="size-6 animate-bounce" />
      </Link>
    </div>
  );
}

export default Arrow;
