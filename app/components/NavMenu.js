"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { use } from "react";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session?.user?.name}
        <button className="btn btn-primary" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <button className="btn btn-primary" onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
}

export default function NavMenu() {
  return (
    <div>
      <AuthButton />
    </div>
  );
}
