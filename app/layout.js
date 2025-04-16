import { Space_Grotesk } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@components/SessionProvider";
import { Theme } from "@radix-ui/themes";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sgrotesk",
});

export const metadata = {
  title: "LissyOS",
  description: "The interactive community platform by LissyMusic",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en" data-theme="LissyOS" className={spaceGrotesk.variable}>
      <body>
        <Theme accentColor="purple">
          <SessionProvider session={session}>{children}</SessionProvider>
        </Theme>
      </body>
    </html>
  );
}
