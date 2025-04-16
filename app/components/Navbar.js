import Image from "next/image";
import NavMenu from "./NavMenu";
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
          <div className="flex items-center animate-pulse">
            <Image
              src="/images/logo.png"
              alt="Mein Logo"
              width={60}
              height={60}
              className="mr-3 hover:animate-spin"
            />
            <h2 className="text-5xl flex gap-1 font-bold">
              Lissy<span className="text-xl">OS</span>
            </h2>
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
      <div className="navbar-center hidden lg:flex border-1 border-neutral-700 rounded-4xl">
        <ul className="menu menu-horizontal px-10 ">
          <li>
            <a className="no-standard-hover text-neutral-400 hover:text-primary-content text-md">
              Item 1
            </a>
          </li>
          <li>
            <details>
              <summary className="no-standard-hover text-neutral-400 hover:text-primary-content text-md">
                Parent
              </summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a className="no-standard-hover text-neutral-400 hover:text-primary-content text-md">
              Item 3
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavMenu />
      </div>
    </div>
  );
}
