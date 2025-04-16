import Image from "next/image";
import Link from "next/link";

export default function AppIcon({ link, app, name }) {
  return (
    <Link
      href={link}
      className="flex flex-col justify-center text-center hover:scale-110"
    >
      <Image
        src={`/images/${app}logo_app.webp`}
        alt={`${app} logo`}
        width={100}
        height={100}
      />
      <p>{name}</p>
    </Link>
  );
}
