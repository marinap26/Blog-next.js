import NextAuth, { NextAuthOptions } from "next-auth";

import GitHubProvider from "next-auth/providers/github";
import { NextApiHandler } from "next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET!,
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);

export default authHandler;