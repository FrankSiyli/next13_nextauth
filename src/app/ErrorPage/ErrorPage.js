import Link from "next/link";

const ErrorPage = () => {
  return (
    <section className="py-24 text-center text-white">
      <h1 className="text-2xl font-bold">
        Oops! You need to be logged in to access this page.
      </h1>
      <p className="mt-4">
        Please{" "}
        <Link
          className="underline"
          href="/signin?callbackUrl=/protected/server"
        >
          sign in
        </Link>{" "}
        to continue.
      </p>
    </section>
  );
};

export default ErrorPage;
