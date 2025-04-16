import Image from "next/image";
import { getServerSession } from "next-auth";
import NavMenu from "../components/NavMenu";
import PricingSection from "@components/PricingSection";

export default async function Home() {
  const session = await getServerSession();
  return (
    <>
      {/* <NavMenu /> */}
      getServerSession Result
      {session?.user?.name ? (
        <div>{session?.user?.name}</div>
      ) : (
        <div>Not logged in</div>
      )}
      <PricingSection />
    </>
  );
}
