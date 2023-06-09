import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: "dsfdfsdfsdd",
  },
  callbacks: {
    async jwt({ token, profile }) {
      if (profile) {
        token.id = profile.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session) session.user.id = token.id;
      return session;
    },
  },
};

export default NextAuth(authOptions);

// GITHUB_ID=f56d4eb72ea1163110b5
// GITHUB_SECRET=555e3188436b7384371ef135fedf2bc574b9e68a
