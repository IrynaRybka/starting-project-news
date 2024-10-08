import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }) {
  const newsID = params.slugNews;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsID);

  if(!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
        <img src={`/images/news/${newsItem.image}`} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time datatime={newsItem.date}>{newsItem.date}</time>
      </header>

      <p>{newsItem.content}</p>
    </article>
  );
}
