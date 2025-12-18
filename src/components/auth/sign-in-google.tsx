import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

function SignInGoogle() {
  const supabase = createClient();

  async function handleSignInGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  }

  return <Button onClick={handleSignInGoogle}>Sing in with google</Button>;
}

export default SignInGoogle;
