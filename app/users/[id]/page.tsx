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
    <div className="flex flex-col items-center p-4 text-center">
      <h1 className="text-2xl mb-8">{name}</h1>
      <div className="flex flex-row gap-10 w-3/5 items-center justify-center">
        <img
          src={image ?? "/favicon.ico"}
          alt={`${name}'s profile`}
          className="rounded-lg object-cover mb-4"
        />
        <div className="flex flex-col items-center gap-8">
          <h3 className="text-xl underline underline-offset-4">Bio</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            alias. Error, explicabo? Doloremque dolor repudiandae temporibus
            modi officia. Quas pariatur eum fuga illum modi consectetur amet
            explicabo commodi aspernatur vitae.
          </p>
        </div>
      </div>
    </div>
  );
}
