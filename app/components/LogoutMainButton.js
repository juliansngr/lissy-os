"use client";
import { LogIn } from "lucide-react";
import MainButton from "./MainButton";
import { signOut } from "next-auth/react";

export default function LogoutMainButton() {
  return (
    <MainButton
      onClick={() => {
        signOut({ callbackUrl: "/" });
      }}
    >
      <span className="flex gap-3 justify-center">
        <LogIn />
        Ausloggen!
      </span>
    </MainButton>
  );
}
