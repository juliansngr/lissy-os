import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

import { LogIn } from "lucide-react";
import { signOut } from "next-auth/react";
import LogoutMainButton from "@components/LogoutMainButton";
import AppIcon from "@components/AppIcon";
import PlyrPlayer from "@components/PlyrPlayer";
import PlyrYouTube from "@components/PlyrYoutube";

export default async function OperatingSystem() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/subcheck?userId=${session.userId}`
  );
  const { isSub, tier } = await res.json();

  if (!isSub) {
    redirect("/abonnieren");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-5xl mb-10">Willkommen {session?.user?.name}</h2>
      {tier === "1000" && (
        <p className="text-2xl mb-10">Danke für dein Tier 1 Abo 💜</p>
      )}
      {tier === "2000" && (
        <p className="text-2xl mb-10">Tier 2! Du bekommst Bonus-Inhalte ✨</p>
      )}
      {tier === "3000" && (
        <p className="text-2xl mb-10">Legendär – Tier 3 Supporter 🏆</p>
      )}
      <LogoutMainButton />

      <div className="flex gap-20 mt-10">
        <AppIcon name="LissyTube" app="lissytube" link="/os/lissytube" />
        <AppIcon name="Lissify" app="lissify" link="/os/lissify" />
      </div>
    </div>
  );
}
