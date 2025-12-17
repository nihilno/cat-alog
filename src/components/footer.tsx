import SignInButton from "./auth/sign-in-btn";

function Footer() {
  return (
    <footer className="bg-background/50 relative z-50 container mx-auto my-8 w-full rounded-xl border-t-2 border-b-2 border-l-2 px-[4vw] py-5 shadow-md backdrop-blur-md">
      <nav className="flex items-center justify-between gap-1">
        <div>
          <h3>Footer</h3>
        </div>
        <SignInButton />
      </nav>
    </footer>
  );
}

export default Footer;
