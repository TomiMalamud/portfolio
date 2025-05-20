import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import Tag from "@/components/tag";
import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/")
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      {/* "I'm considering the concept of 'file over app.' Perhaps in the future, I will replace the fancy tags with traditional ones. */}
      {post.tags.length > 0 && (
        <div className="py-4 xl:py-8">
          <h2 className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Built with
          </h2>
          <div className="flex flex-wrap">
            {post.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>
      )}

      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  );
}
