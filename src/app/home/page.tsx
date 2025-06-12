import { Faqs, Project } from "@/types/DataTypes";
import { CollapsibleListData } from "@/types/ComponentPropsTypes";
import { getHomePageData } from "../../../sanity/sanity-utility";
import Insights from "./Insights";
import MustReads from "./MustReads";
import Typography from "@/components/Typography/Typography";
import Accordion from "@/components/Accordion/Accordion";
import ViewAllButton from "@/components/ViewAllButton/ViewAllButton";
import Image from "@/components/Image/Image";
import ArticleCard, {
  ArticleCardProps,
} from "@/components/ArticleCard/ArticleCard";
import ArticleSmallCard, {
  ArticleSmallCardProps,
} from "@/components/ArticleSmallCard/ArticleSmallCard";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let project: Project | undefined;
  try {
    project = await getHomePageData();
  } catch (e) {
    console.error("Error fetching home page data", e);
  }

  const faqData: CollapsibleListData[] =
    project?.faqs?.map((faq: Faqs) => {
      return {
        id: faq?.qid,
        title: faq?.question,
        content: faq?.answer,
      };
    }) || [];

  const insightsData: ArticleCardProps[] =
    project?.insights.map((insight) => {
      return {
        imageSrc: insight.mainImage.asset?.url,
        label: insight.category,
        title: insight.headLine,
        description: insight.description,
        author: insight.Author,
        date: insight.date,
      };
    }) || [];
  const mustReadData: ArticleSmallCardProps[] =
    project?.mustReads?.map((mustRead) => {
      return {
        imageSrc: mustRead.mainImage.asset?.url,
        label: mustRead.category,
        title: mustRead.headLine,
        author: mustRead.Author,
        date: mustRead.date,
      };
    }) || [];
  return (
    <main>
      <section className="pb-8">
        <div>
          <Image
            width={1920}
            height={1080}
            src={project?.banners?.[0].mainImage?.asset?.url}
            alt={"image"}
          />
        </div>
        <div className="px-5 lg:px-[50px]">
          <Typography variant="h1" className="pt-3 pb-[15px]">
            What is ZipCare?
          </Typography>
          <Typography
            variant="b3_regular"
            className="columns-1 lg:columns-2 gap-3 lg:gap-6"
          >
            {project?.banners?.[0]?.whatIsZipcare}
          </Typography>
        </div>
      </section>
      <div className="px-[20px] pt-[20px] lg:px-[50px] bg-white pb-8">
        <Typography variant="h1" className="pt-3 pb-[15px]">
          Insight on tech care
        </Typography>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {insightsData.map((data, index) => (
            <ArticleCard
              key={index}
              imageSrc={data.imageSrc}
              label={data.label}
              title={data.title}
              description={data.description}
              author={data.author}
              date={data.date}
            />
          ))}
        </div>
        <ViewAllButton btnLabel="View all articles" />
      </div>
      <div className="px-[20px] lg:px-[50px] pt-6 pb-8">
        <Typography variant="h1" className="pt-3 pb-[15px]">
          Must reads!
        </Typography>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {mustReadData.map((data, index) => (
            <ArticleSmallCard
              key={index}
              imageSrc={data.imageSrc}
              label={data.label}
              title={data.title}
              author={data.author}
              date={data.date}
            />
          ))}
        </div>
        <ViewAllButton btnLabel="View all articles" />
      </div>
      <div className="px-[20px] lg:px-[50px] pt-6 bg-white pb-8">
        <Typography variant="h1" className="pt-3 pb-5">
          FAQs
        </Typography>
        <Accordion items={faqData} />
      </div>
    </main>
  );
}
