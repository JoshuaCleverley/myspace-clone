"use client";
import { User } from "@prisma/client";

type Props = {
  user: User | null;
};

export function ProfileForm({ user }: Props) {
  const updateUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const body = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: formData.get("age"),
      image: formData.get("image"),
    };

    const response = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await response.json();
  };

  return (
    <div className="flex flex-col items-center ">
      <h2 className="text-lg mb-7">Edit Your Profile</h2>
      <form className="flex flex-col items-center" onSubmit={updateUser}>
        <div className="grid grid-cols-2 gap-4 text-right">
          <label htmlFor="name">Name:</label>
          <input
            className="border border-blue-400 rounded-md pl-4"
            type="text"
            name="name"
            defaultValue={user?.name ?? ""}
          />
          <label htmlFor="bio">Bio:</label>
          <textarea
            className="border border-blue-400 rounded-md pl-4"
            name="bio"
            cols={30}
            rows={10}
            defaultValue={user?.bio ?? ""}
          ></textarea>
          <label htmlFor="age">Age:</label>
          <input
            className="border border-blue-400 rounded-md pl-4"
            type="text"
            name="age"
            defaultValue={user?.age ?? ""}
          />
          <label htmlFor="image">Profile image url:</label>
          <input
            className="border border-blue-400 rounded-md w-auto pl-4"
            type="text"
            name="image"
            defaultValue={user?.image ?? ""}
          />
        </div>

        <button
          type="submit"
          className="mt-7 p-4 py-2 text-white bg-blue-700 hover:scale-105 transition-all duration-200 text-xl rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
}
