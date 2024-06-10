"use client";

import { getServerSession } from "next-auth/next";

import { useSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default function Page() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <>
        <h1>Protected Page</h1>
        <p>You can view this page because you are signed in.</p>
      </>
    );
  }
  return <p>Access Denied</p>;
}

// export async function getServerSideProps(context: any) {
//   return {
//     props: {
//       session: await getServerSession(context.req, context.res, authOptions),
//     },
//   };
// }
