import { Faqs, Project } from "@/types/DataTypes";
import { getHomePageData } from "../../../sanity/sanity-utility";
import { CollapsibleListData } from "@/types/ComponentPropsTypes";
import CollapsibleList from "../../../components/CollapsibleList/CollapsibleList";
import Title from "../../../components/Title/Title";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import Image from "../../../components/Image/Image";

export const dynamic = "force-dynamic";
const page = async () => {
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
    <main>
      <BreadCrumb
        items={{
          Home: "/home",
          Listing: "/listingpage",
        }}
      />
      <section className="px-5 lg:px-[50px] flex justify-between gap-4 lg:gap-10 py-8">
        <div>
          <Title text="Your device protection expert!" />
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
        <Title text="Buying guide" />
      </section>
      <section className="px-[20px] lg:px-[50px] pt-6 bg-white pb-8">
        <Title text="FAQs" className="pb-[15px]" />
        <CollapsibleList data={faqData} />
      </section>
    </main>
  );
};

export default page;
