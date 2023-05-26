import { UserCard } from "@/components/UserCard";
import { prisma } from "@/lib/prisma";

export default async function Page() {
  const users = await prisma.user.findMany();

  return (
    <div className="flex flex-wrap items-center justify-start p-8">
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </div>
  );
}
