
import { authOptions } from "@/app/lib/auth";
import NextAuth from "next-auth";
//@ts-ignore
export const handler = NextAuth(authOptions);
//@ts-ignore
export { handler as GET, handler as POST };
