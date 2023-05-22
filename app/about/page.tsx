import Link from "next/link";

export default async function About() {
  return (
    <main className="flex flex-col h-[30rem] items-center justify-center gap-2">
      <h1 className="text-3xl mb-8">About</h1>
      <p>This is a social media website created by Joshua Cleverley</p>
      <p>
        Tutorial by{" "}
        <Link
          className="underline underline-offset-4 text-blue-900 hover:text-blue-950"
          href="https://fireship.io/"
        >
          Fireship.io
        </Link>
      </p>
    </main>
  );
}
