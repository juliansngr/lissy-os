"use client";
import { signIn } from "next-auth/react";
import { Twitch } from "lucide-react";
import Image from "next/image";
import MainButton from "@components/MainButton";

export default function SignInPage() {
  return (
    <div className="flex flex-col justify-center items-center bg-base-200 border border-base-300 p-15 rounded-box">
      <div className="flex pb-10 animate-pulse">
        <Image
          src="/images/logo.png"
          alt="Mein Logo"
          width={70}
          height={70}
          className="mr-2 hover:animate-spin"
        />
        <h2 className="text-6xl flex gap-1 font-bold">
          Lissy<span className="text-2xl">OS</span>
        </h2>
      </div>
      <MainButton onClick={() => signIn("twitch", { callbackUrl: "/os" })}>
        <span className="flex gap-3 justify-center">
          <Twitch />
          Login with Twitch
        </span>
      </MainButton>
    </div>
  );
}
