// lib/auth.ts
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Check hardcoded credentials or fetch from a DB
        if (credentials?.username === "admin" && credentials?.password === "password") {
          return { id: "1", name: "Admin" };
        }
        return null; // Invalid credentials
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Redirect to custom sign-in page
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      if (token?.id) {
        //@ts-ignore
        session.user = { ...session.user, id: token.id };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};
