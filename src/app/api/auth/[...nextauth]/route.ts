import { authOptions } from "@/Authindex";
import NextAuth from "next-auth/next";

const handeler = NextAuth(authOptions);

export { handeler as GET, handeler as POST };
