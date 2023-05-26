import { getServerSession } from "next-auth";
import { SignOutButton } from "@/features/Authentication";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ProfileForm } from "./ProfileForm";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  const currentUserEmail = session?.user?.email!;
  const name = session?.user?.name!;
  const user = await prisma.user.findUnique({
    where: { email: currentUserEmail },
  });

  return (
    <div className="flex flex-col gap-8 py-8 items-center">
      <h1 className="text-2xl">{`${name}'s Dashboard`}</h1>
      <ProfileForm user={user} />
    </div>
  );
}
