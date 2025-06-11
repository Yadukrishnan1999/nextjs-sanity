import { getTestHomePageData } from "../../../../sanity/sanity-utility";

const Page = async ({ params }: any) => {
  const data = await getTestHomePageData(params.page);
  console.log(data, "data");
  return <div>Page - Page</div>;
};

export default Page;
