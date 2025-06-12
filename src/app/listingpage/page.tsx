import { Faqs, Project } from "@/types/DataTypes";
import { getHomePageData } from "../../../sanity/sanity-utility";
import { CollapsibleListData } from "@/types/ComponentPropsTypes";
import Accordion from "@/components/Accordion/Accordion";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import Typography from "@/components/Typography/Typography";

export const dynamic = "force-dynamic";
const page = async () => {
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

  return (
    <main>
      <BreadCrumb
        items={{
          Home: "/home",
          Listing: "/listingpage",
        }}
      />
      <section className="px-5 lg:px-[50px] flex justify-between gap-4 lg:gap-10 py-8">
        <div>
          <Typography variant="h1">Your device protection expert!</Typography>
          <p>
            Discover how to extend the lifespan of your appliances and avoid
            costly repairs. Get essential tips and tricks to keep your
            electronics in top condition. Whether you're maximizing your
            device's efficiency or exploring the latest tech trends, we've got
            you covered.
          </p>
        </div>
        <div className="hidden lg:block w-64">Select Category</div>
      </section>
      <section className="px-5 lg:px-[50px]">
        <Image
          src={project?.banners?.[0].mainImage?.asset?.url}
          height={640}
          width={1920}
          innerClass="h-96 object-top"
        />
      </section>
      <section className="px-[20px] lg:px-[50px] pt-6 bg-white pb-8">
        <Typography variant="h1">Buying guide</Typography>
      </section>
      <section className="px-[20px] lg:px-[50px] pt-6 bg-white pb-8">
        <Typography variant="h1" className="pb-[15px]">
          FAQs
        </Typography>
        <Accordion items={faqData} />
      </section>
    </main>
  );
};

export default page;
