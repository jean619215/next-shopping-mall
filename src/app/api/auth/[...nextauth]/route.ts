import NextAuth from "next-auth";
// importing providers
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});

export { handler as GET, handler as POST };
const test = {
  user: {
    name: "鍾佳穎",
    email: "jean619215@gmail.com",
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocJL-Fc6PKDBDpN-kX6LTS4Pf-HRZzLaVOz9vPAkyUWAxhvwSw=s96-c",
  },
  expires: "2024-06-25T10:13:29.446Z",
};
