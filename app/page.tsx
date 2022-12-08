import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

async function HomePage() {
  // Fetch News Data
  const news: NewsResponse = await fetchNews(categories.join(","));

  return <div>{/* NewsList news */}</div>;
}

export default HomePage;
