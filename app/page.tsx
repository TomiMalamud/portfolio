import { Mdx } from "@/components/mdx-components";
import { allPages, allPosts } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const aboutPost = allPages.find((post) => post.title === "About");

  return (
    <div className="prose dark:prose-invert">
      <div className="flex flex-col sm:flex-row-reverse items-start sm:mt-8">
        <div className="w-full sm:-ml-8">
          <Image
            src="/tomasmalamud.jpg"
            className="rounded-full bg-gray-100 hover:scale-105 hover:shadow-lg hover:shadow-stone-300 dark:hover:shadow-stone-700 transition-all duration-200 float-left sm:float-right block mx-auto sm:mx-0 border border-gray-300 dark:border-gray-700"
            width={150}
            height={150}
            alt="Picture of Tomás Malamud"
          />
        </div>
        {aboutPost && (
          <section>
            <Mdx code={aboutPost.body.code} />
          </section>
        )}
      </div>

      <hr />
      <h2 id="projects">Projects</h2>
      {allPosts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => (
          <article key={post._id}>
            <Link href={post.slugAsParams === "oms" ? post.slug : post.url ?? post.slug} className="no-underline" target={post.url && post.slugAsParams !== "oms" ? "_blank" : undefined}>
              <h3 className="decoration-slate-600 mb-1 hover:decoration-slate-300 underline underline-offset-8">
                {post.title}
              </h3>
              {post.description && (
                <p className="no-underline decoration-transparent prose dark:prose-invert font-normal">
                  {post.description}
                </p>
              )}
            </Link>
          </article>
        ))}
    </div>
  );
}
