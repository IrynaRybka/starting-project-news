import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function InterseptedImagePage({ params }) {
  const newsItemSlug = params.slugNews;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <h2>Intersepted</h2>
      <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </div>
    </>
  );
}
