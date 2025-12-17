import SignInButton from "./auth/sign-in-btn";
import { ModeToggle } from "./mode-toggle";

function Footer() {
  return (
    <footer className="mb-8 w-full rounded-xl border px-[4vw] py-5 shadow-sm backdrop-blur-md dark:shadow-md">
      <nav className="flex items-center justify-between gap-1">
        <div>
          <h3>Footer</h3>
        </div>
        <div className="flex items-center gap-3">
          <ModeToggle />
          <SignInButton />
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
