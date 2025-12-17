import { PiSignInBold } from "react-icons/pi";
import { Button } from "../ui/button";

function SignInButton() {
  return (
    <Button className="button-hover" size="sm">
      <PiSignInBold />
      <span>Sign In</span>
    </Button>
  );
}

export default SignInButton;
