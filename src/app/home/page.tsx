/* eslint-disable @typescript-eslint/no-explicit-any */
import { getHomePageData } from "../../../sanity/sanity-utility";
import Faqs from "./Faqs";
import Insights from "./Insights";
import MainBanner from "./MainBanner";
import MustReads from "./MustReads";
import ViewAllArticles from "./ViewAllArticles";

export async function getServerSideProps() {
  let project;
  try {
    project = await getHomePageData();
  } catch (e) {
    console.log("error", e);
  }

  return {
    props: {
      project,
    },
  };
}

const HomePage = ({ project }: any) => {
  return (
    <div>
      <MainBanner data={project?.banners[0]} />
      <div className="px-[20px] pt-[20px] lg:px-[50px] bg-white pb-8">
        <div className="font-bold text-[30px] md:text-[30px] text-blue-800 pt-3 bg-red pb-[15px]">
          Inshight on tech care
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {project?.insights?.map((data: any, index: any) => {
            return <Insights key={index} data={data} />;
          })}
        </div>
        <ViewAllArticles />
      </div>
      <div className="px-[20px] lg:px-[50px] pt-6 pb-8">
        <div className="font-bold text-[30px] md:text-[30px] text-blue-800 bg-red pb-[15px]">
          Must reads!
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {project?.mustReads?.map((data: any, index: any) => {
            return <MustReads key={index} data={data} />;
          })}
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
};

export default HomePage;
