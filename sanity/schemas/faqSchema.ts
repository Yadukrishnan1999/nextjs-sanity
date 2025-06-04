const faqSchema = {
  name: "faqSchema",
  title: "FAQs",
  type: "document",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
    },
    {
      name: "answer",
      title: "Answer",
      type: "string",
    },
    {
      name: "qid",
      title: "Question id",
      type: "string",
    },
  ],
};
export default faqSchema;
