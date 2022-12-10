import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
 category ?: Category | string,
 keywords?: string,
 isDynamic?: boolean
) => {
 // GraphQL query
 const query = gql`
 query MyQuery(
   $access_key: String!
   $categories: String!
   $keywords: String
  ) {
    myQuery(
        access_key: $access_key
        categories: $categories
        countries: "in"
        sort: "published_desc"
        keywords: $keywords
     ) {
       data {
        author
        category
        country
        description
        image
        language
        published_at
        source
        title
        url
      }
      pagination {
        count
        limit
        offset
        total
      }
    }
  }
`;
 // Fetch function with Next.js 13 Catching...
 const res = await fetch("https://simmerath.stepzen.net/api/sanguine-seagull/__graphql", {
   method: "POST",
   cache: isDynamic ? "no-cache" : "default",
   next: isDynamic ? {revalidate: 0} : {revalidate: 20},
   headers:{
    "Content-Type": "application/json",
     Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
   },
   body: JSON.stringify({
    query,
    variables:{
     access_key: process.env.MEDIASTACK_API_KEY,
     categories: category,
     keywords: keywords,
    },
   }),
  },
 );

 console.log("LOADING NEW DATA FROM API for category >>>",
  category, keywords
 );

  const newResponse = await res.json();

 // Sort function by image vs not images present
  const news = sortNewsByImage(newResponse.data.myQuery);

  return news;
}

export default fetchNews;

// Example Import 
// Stepzen Import Curl: "http://api.mediastack.com/v1/news?access_key=your_mediastackkey"
