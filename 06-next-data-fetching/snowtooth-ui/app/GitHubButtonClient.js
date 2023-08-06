"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function GitHubButtonClient({ session }) {
  const supabase = createClientComponentClient({});
  const router = useRouter();

  async function signIn() {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback"
      }
    });
  }
  async function signOut() {
    await supabase.auth.signOut();
    router.refresh();
  }

  return (
    <>
      {session ? (
        <button onClick={signOut}>Log Out</button>
      ) : (
        <button onClick={signIn}>Log In</button>
      )}
    </>
  );
}
