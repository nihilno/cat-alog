import SignInButton from "./auth/sign-in-btn";

function Footer() {
  return (
    <footer className="container mx-auto my-8 px-4">
      <nav className="bg-background/50 relative z-50 container mx-auto my-8 flex w-full items-center justify-between gap-1 rounded-xl border-t-2 border-b-2 border-l-2 px-[4vw] py-8 shadow-md backdrop-blur-md">
        <div>
          <h3>Footer</h3>
        </div>
        <SignInButton />
      </nav>
    </footer>
  );
}

export default Footer;
