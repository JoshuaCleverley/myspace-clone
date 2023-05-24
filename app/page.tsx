import { RequireAuth } from "@/features/Authentication";

export default function Home() {
  return (
    <main className="flex justify-center">
      <h1 className="text-5xl font-bold">Hello world</h1>
      <RequireAuth>
        <h2>Authenticated</h2>
      </RequireAuth>
    </main>
  );
}
