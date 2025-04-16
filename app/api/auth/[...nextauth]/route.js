import NextAuth from "next-auth";
import TwitchProvider from "next-auth/providers/twitch";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@lib/mongodb"; // gleich erstellen

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt", // oder "database"
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
        token.userId = profile.sub;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.userId = token.userId;
      return session;
    },
  },

  pages: {
    signIn: "/auth/signin",
  },
  debug: true,
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
