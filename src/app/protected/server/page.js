import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import ErrorPage from "@/app/ErrorPage/ErrorPage";

const ServerProtectedPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <ErrorPage />;
  }

  return (
    <section className="py-24 text-center text-white">
      <h1 className="text-2xl font-bold">
        This is a <span className="text-emerald-500">server-side</span>{" "}
        protected page
      </h1>
      <h2 className="mt-4 font-medium">You are logged in as:</h2>
      <p className="mt-4 text-2xl font-bold uppercase">{session?.user?.name}</p>
    </section>
  );
};

export default ServerProtectedPage;
