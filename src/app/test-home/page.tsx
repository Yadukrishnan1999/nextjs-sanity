import CollapsibleList from "../../../components/CollapsibleList/CollapsibleList";
import { getTestHomePageData } from "../../../sanity/sanity-utility";
import FaqsComponent from "../home/FaqsComponent";
import Insights from "../home/Insights";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";

const componentMapper: any = {
  faqSection: ComponentOne,
  insightSection: ComponentTwo,
};

const TestHomePage = async () => {
  let homePageData;
  try {
    homePageData = await getTestHomePageData();
    console.log(homePageData, "test");
  } catch (e) {
    console.log(e);
  }
  return homePageData?.homePage?.[0]?.sections?.map(
    (section: any, index: number) => {
      console.log(section);
      const Component = componentMapper[section?._type];
      return Component ? <Component key={index} data={section} /> : null;
    }
  );
};

export default TestHomePage;
