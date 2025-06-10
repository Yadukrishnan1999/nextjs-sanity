// /* eslint-disable @typescript-eslint/no-explicit-any */
import { Project } from "@/types/DataTypes";
import ViewAllButton from "../../../components/ViewAllButton/ViewAllButton";
import { getHomePageData } from "../../../sanity/sanity-utility";
import Insights from "./Insights";
import MainBanner from "./MainBanner";
import MustReads from "./MustReads";
import FaqsComponent from "./FaqsComponent";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let project: Project | undefined;
  try {
    project = await getHomePageData();
    console.log(project)
  } catch (e) {
    console.error("Error fetching home page data", e);
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
        <ViewAllButton btnLabel="View all articles" />
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
        <ViewAllButton btnLabel="View all articles" />
      </div>
      <div className="px-[20px] lg:px-[50px] pt-6 bg-white pb-8">
        <div className="font-bold text-[30px] md:text-[30px] text-blue-800 bg-red pb-[15px]">
          FAQs
        </div>
        <FaqsComponent data={project?.faqs} />
      </div>
    </div>
  );
}
