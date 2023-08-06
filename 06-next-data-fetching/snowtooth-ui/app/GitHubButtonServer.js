import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import GitHubButtonClient from "./GitHubButtonClient";

export default async function GitHubButtonServer() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  return <GitHubButtonClient session={data.session} />;
}
