import Link from "next/link";
import SignInButton from "./SignInButton";

const Header = () => {
  return (
    <header className="flex h-24 flex-col justify-center bg-neutral-100">
      <nav>
        <ul className=" m-10 flex items-center justify-between gap-8 tracking-wider text-stone-900">
          <li className="text-md">
            <Link href="/" className="underline">
              Home
            </Link>
          </li>
          <li className="text-md">
            <Link href="/protected/server" className="underline">
              Protected (server side)
            </Link>
          </li>
          <li className="text-md">
            <Link href="/protected/client" className="underline">
              Protected (client side)
            </Link>
          </li>
          <li>
            <SignInButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
