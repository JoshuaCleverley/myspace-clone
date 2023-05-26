import Link from "next/link";

type Props = {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
};

export const UserCard = ({ id, name, age, image }: Props) => {
  return (
    <div className=" bg-gray-300 p-4 rounded-lg flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-200">
      <img
        src={image ?? "/favicon.ico"}
        alt={`${name}'s profile`}
        className="w-48 h-48 rounded-full object-cover"
      />
      <div className="mt-4">
        <h3 className="text-xl underline underline-offset-4">
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p>Age: {age ?? "unknown"}</p>
      </div>
    </div>
  );
};
