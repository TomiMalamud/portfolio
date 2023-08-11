import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <div className="flex flex-col sm:flex-row-reverse items-start sm:mt-8">
        <div className=" w-full sm:-ml-8">
          <Image
            src="/tomasmalamud.jpg"
            className="rounded-full bg-gray-100 float-left sm:float-right block mx-auto sm:mx-0 border border-gray-300 dark:border-gray-700"
            width={100}
            height={100}
            alt="Picture of Tomás Malamud"
          />
        </div>
        <p className="mt-0 sm:mt-5">
          Hi, I'm a Systems Engineering student (graduating in 2025) and
          entrepreneur. I'm from Villa Carlos Paz, Córdoba, Argentina. Currently
          managing a co-founded business, and looking for a transition into the
          tech industry.
        </p>
      </div>

      <Link href="/resume.pdf" target="_blank">
        Check out my resume
      </Link>
      <div className="mt-8">
        <p>
          As you can probably tell, this website is still a work in progress.
        </p>
      </div>
      <hr/>
      <h2>Projects</h2>
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h3 className="-mb-2 decoration-slate-600 hover:decoration-slate-300 underline-offset-8">{post.title}</h3>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
      <p>👉 I have at least 3 more projects to showcase and I'm working on their presentations.</p>
    </div>
  );
}
