"use client";
import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-8">
      <h2 className="text-xl">Something went wrong!</h2>
      <button
        className="text-lg p-4 bg-blue-600 rounded-lg text-white hover:scale-105 transition-all duration-200"
        onClick={() => reset()}
      >
        Try again!
      </button>
    </div>
  );
}
