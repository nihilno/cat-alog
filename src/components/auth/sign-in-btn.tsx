import { Button } from "@/components/ui/button";
import { PiSignInBold } from "react-icons/pi";

function SignInButton() {
  return (
    <Button className="button-hover" size="sm" variant="outline">
      <PiSignInBold />
      <span>Sign In</span>
    </Button>
  );
}

export default SignInButton;
