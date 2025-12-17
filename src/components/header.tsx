import SignInButton from "./auth/sign-in-btn";

function Header() {
  return (
    <header className="bg-background/50 relative z-50 container mx-auto mt-8 rounded-xl border-t-2 border-b-2 border-l-2 px-[5vw] py-8 shadow-md backdrop-blur-md">
      <nav className="flex items-center justify-between gap-1">
        <div>
          <h3>Logo</h3>
        </div>
        <SignInButton />
      </nav>
    </header>
  );
}

export default Header;
