import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

const ServerProtectedPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin?callbackUrl=/protected/server");
  }

  return (
    <section className="py-24 text-center">
      <h1 className="text-2xl font-bold">
        This is a <span className="text-emerald-500">server-side</span>{" "}
        protected page
      </h1>
      <h2 className="mt-4 font-medium">You are logged in as:</h2>
      <p className="mt-4 font-bold">{session?.user?.name}</p>
    </section>
  );
};

export default ServerProtectedPage;
