import { CollapsibleListData } from "@/types/ComponentPropsTypes";
import CollapsibleList from "../../../components/CollapsibleList/CollapsibleList";

type Faqs = {
  question: string;
  answer: string;
  qid: string;
};

const FaqsComponent = ({ data }: any) => {
  const faqData: CollapsibleListData[] = data?.map((faq: Faqs) => {
    return { listData: faq?.question, collapsingData: faq?.answer };
  });

  console.log(data)

  return <CollapsibleList data={faqData} />;
};

export default FaqsComponent;
