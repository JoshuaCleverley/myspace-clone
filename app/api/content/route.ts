import { NextResponse } from "next/server";

// Dummy data
const posts = [
  {
    title: "Hello World",
    slug: "hello-world",
    content: "Dummy post",
  },
  {
    title: "Hello World 2",
    slug: "hello-world-2",
    content: "Dummy post 2",
  },
  {
    title: "Hello World 3",
    slug: "hello-world-3",
    content: "Dummy post 3",
  },
  {
    title: "Hello World 4",
    slug: "hello-world-4",
    content: "Dummy post 4",
  },
  {
    title: "Hello World 5",
    slug: "hello-world-5",
    content: "Dummy post 5",
  },
  {
    title: "Hello World 6",
    slug: "hello-world-6",
    content: "Dummy post 6",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
