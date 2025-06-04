/* eslint-disable @typescript-eslint/no-explicit-any */
import { getHomePageData } from "../../../sanity/sanity-utility";
import Faqs from "./Faqs";
import Insights from "./Insights";
import MainBanner from "./MainBanner";
import MustReads from "./MustReads";
import ViewAllArticles from "./ViewAllArticles";

export default async function HomePage() {
  let project: any;
  try {
    project = await getHomePageData();
  } catch (e) {
    console.error("Error fetching home page data", e);
    project = null;
  }

  return (
    <div>
      <MainBanner data={project?.banners?.[0]} />
      <div className="px-[20px] pt-[20px] lg:px-[50px] bg-white pb-8">
        <div className="font-bold text-[30px] md:text-[30px] text-blue-800 pt-3 bg-red pb-[15px]">
          Insight on tech care
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {project?.insights?.map((data: any, index: number) => (
            <Insights key={index} data={data} />
          ))}
        </div>
        <ViewAllArticles />
      </div>
      <div className="px-[20px] lg:px-[50px] pt-6 pb-8">
        <div className="font-bold text-[30px] md:text-[30px] text-blue-800 bg-red pb-[15px]">
          Must reads!
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {project?.mustReads?.map((data: any, index: number) => (
            <MustReads key={index} data={data} />
          ))}
        </div>
        <ViewAllArticles />
      </div>
      <div className="px-[20px] lg:px-[50px] pt-6 bg-white pb-8">
        <div className="font-bold text-[30px] md:text-[30px] text-blue-800 bg-red pb-[15px]">
          FAQs
        </div>
        <Faqs data={project?.faqs} />
      </div>
    </div>
  );
}
