import GoogleSignInButton from "../components/GoogleSignInButton";

const SignInPage = () => {
  return (
    <section className="min-h-ful l flex overflow-hidden pt-16 sm:py-28">
      <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
        <div className="relative mt-12 sm:mt-16">
          <h1 className="text-center text-2xl font-medium tracking-tight text-white">
            Sign in to your account
          </h1>
        </div>
        <br />
        <GoogleSignInButton />
      </div>
    </section>
  );
};

export default SignInPage;
