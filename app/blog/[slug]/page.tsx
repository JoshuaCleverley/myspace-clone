type Post = {
  title: string;
  slug: string;
  content: string;
};

type Props = {
  params: { slug: string };
};

export const revalidate = 5 * 60; // 5 minutes

export async function generateStaticParams() {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: Props) {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );
  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div className="p-8">
      <h1 className="text-4xl">{post.title}</h1>
      <div>{post.content}</div>
    </div>
  );
}
