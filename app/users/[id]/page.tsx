import { FollowButton } from "@/features/Following";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `${user?.name}'s profile` };
}

export default async function Page({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image } = user ?? {};

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-2xl my-8">{name}</h1>
      <div className="grid grid-cols-2 w-3/5 max-md:grid-cols-1 max-lg:w-4/5">
        <img
          src={image ?? "/favicon.ico"}
          alt={`${name}'s profile`}
          className="rounded-lg object-cover mb-4"
        />
        <div className="flex flex-col gap-8 h-full items-center justify-center">
          <h3 className="text-xl underline underline-offset-4">Bio</h3>
          <p>{bio ?? "This user has not written a bio."}</p>
        </div>
      </div>
      {/* @ts-expect-error Server Component */}
      <FollowButton targetUserId={params.id} />
    </div>
  );
}
