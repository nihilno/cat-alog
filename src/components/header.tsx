import SignInButton from "./auth/sign-in-btn";
import { ModeToggle } from "./mode-toggle";

function Header() {
  return (
    <header className="bg-background/50 sticky top-0 z-50 mt-8 w-full rounded-xl border px-[4vw] py-5 shadow-sm backdrop-blur-2xl dark:shadow-md">
      <nav className="flex items-center justify-between gap-1">
        <div>
          <h3>Logo</h3>
        </div>
        <div className="flex items-center gap-3">
          <ModeToggle />
          <SignInButton />
        </div>
      </nav>
    </header>
  );
}

export default Header;
