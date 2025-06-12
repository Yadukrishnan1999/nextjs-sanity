/* eslint-disable @typescript-eslint/no-explicit-any */
import { Faqs, Project } from "@/types/DataTypes";
import { CollapsibleListData } from "@/types/ComponentPropsTypes";
import ViewAllButton from "../../../components/ViewAllButton/ViewAllButton";
import { getHomePageData } from "../../../sanity/sanity-utility";
// import Faqs from "./Faqs";
import Insights from "./Insights";
import MainBanner from "./MainBanner";
import MustReads from "./MustReads";
import CollapsibleList from "../../../components/CollapsibleList/CollapsibleList";
 import Typography from "../../../components/Typography/Typography";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let project: Project | undefined;
  try {
    project = await getHomePageData();
  } catch (e) {
    console.error("Error fetching home page data", e);
  }

  const faqData: CollapsibleListData[] | undefined = project?.faqs?.map(
    (faq: Faqs) => {
      return { listData: faq?.question, collapsingData: faq?.answer };
    }
  );

  return (
    <div>
      <MainBanner data={project?.banners?.[0]} />
      <div className="px-[20px] pt-[20px] lg:px-[50px] bg-white pb-8">
         <Typography variant="h1" className="text-blue-800 pt-3 bg-red pb-[15px]">Insight on tech care</Typography> 
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {project?.insights?.map((data: any, index: number) => (
            <Insights key={index} data={data} />
          ))}
        </div>
        <ViewAllButton btnLabel="View all articles" />
      </div>
      <div className="px-[20px] lg:px-[50px] pt-6 pb-8">
        <Typography variant="h1" className="text-blue-800 pt-3 bg-red pb-[15px]">Must reads!</Typography> 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {project?.mustReads?.map((data: any, index: number) => (
            <MustReads key={index} data={data} />
          ))}
        </div>
        <ViewAllButton btnLabel="View all articles" />
      </div>
      <div className="px-[20px] lg:px-[50px] pt-6 bg-white pb-8">
          <Typography variant="h1" className="text-blue-800 pt-3 bg-red pb-[15px]">FAQs</Typography> 
        <CollapsibleList data={faqData} />
      </div>
    </div>
  );
}
