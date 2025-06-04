import { createClient, groq } from "next-sanity";

const query = `{
  "banners": *[_type == "homePageBanner"]{
    whatIsZipcare,
    slug,
    mainImage{
      asset->{url},
      alt
    }
  },
  "insights": *[_type == "insightSchema"]{
  mainImage{
  asset->{url},
  alt
  },
  headLine,
  description,
  category,
  Author,
  date,
  slug
  },
  "mustReads": *[_type == "mustReadSchema"]{
  mainImage{
  asset->{url},
  alt
  },
  headLine,
  category,
  Author,
  date,
  },
  "faqs": *[_type == "faqSchema"]{
  question,
  answer,
  qid
  }
}`;

export const getHomePageData = () => {
  const client = createClient({
    projectId: "waa03wpn",
    dataset: "production",
    apiVersion: "2025-06-02",
    useCdn: false, // or false
  });

  return client.fetch(query);
};
