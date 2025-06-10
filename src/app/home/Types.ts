export type Project = {
  faqs: Faqs[];
  mustReads: MustReads[];
  insights: Insights[];
  banners: Banners[];
};

export type Faqs = {
  question: string;
  answer: string;
  qid: string;
};

export type MustReads = {
  mainImage: object;
  headLine: string;
  category: string;
  Author: string;
  date: string;
};

export type Insights = {
  mainImage: object;
  headLine: string;
  description: string;
  category: string;
  Author: string;
  date: string;
  slug: string;
};

export type Banners = {
  whatIsZipcare: string;
  slug: string;
  mainImage: object;
};
