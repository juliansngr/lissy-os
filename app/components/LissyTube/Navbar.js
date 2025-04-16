import Image from "next/image";
import NavMenu from "@components/NavMenu";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
            <li></li>
          </ul>
        </div>
        <Link href={"/"} className="hidden lg:block">
          <div className="flex items-center">
            <Image
              src="/images/lissytubelogo.webp"
              alt="Mein Logo"
              width={175}
              height={175}
              className="mr-3"
            />
          </div>
        </Link>
      </div>
      <div className="navbar-center block lg:hidden size-10 sm:size-14 md:size-16 relative">
        <Link href={"/"}>
          <Image
            src="/images/logo.png"
            alt="LissyMusic Logo"
            fill
            className="object-contain"
          />
        </Link>
      </div>

      <div className="navbar-end">
        <Link href={"/os"}>
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}
