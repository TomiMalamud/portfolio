import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <div className="mt-8">
        <p>
          Hi, I'm a Systems Engineering student (graduating in 2025) and
          entrepreneur. I'm from Villa Carlos Paz, Córdoba, Argentina. Currently
          managing a co-founded business, and looking for a transition into the
          tech industry.
        </p>
      </div>
      <a href="https://drive.google.com/file/d/1fZ5_eronOlo369nEZZSMVUUUetw_gReT/view?usp=sharing" target="_blank">Check out my resume</a>
      <div className="mt-8">
        <p>
          As you can probably tell, this website is still a work in progress.
        </p>
      </div>
      <hr />
      <ul>
        <li>
          GitHub <a className="" href="https://github.com/TomiMalamud" target="_blank">@TomiMalamud</a>
        </li>
        <li>
          Email{" "}
          <a href="mailto:tomasmalamud@gmail.com" target="_blank">tomasmalamud@gmail.com</a>
        </li>
        <li>
          LinkedIn{" "}
          <a href="https://www.linkedin.com/in/tomas-malamud/" target="_blank">Tomás Malamud</a>
        </li>
      </ul>
      {/* 
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
      */}
    </div>
  );
}
