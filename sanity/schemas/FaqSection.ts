// // schemas/componentBlocks/faqSection.js
// const FaqSection = {
//   name: 'faqSection',
//   type: 'object',
//   title: 'FAQ Section',
//   fields: [
//     {
//       name: 'title',
//       type: 'string',
//       title: 'Section Title',
//     },
//     {
//       name: 'items',
//       type: 'array',
//       title: 'FAQs',
//       of: [
//         {
//           type: 'object',
//           name: 'faqItem',
//           fields: [
//             { name: 'question', type: 'string', title: 'Question' },
//             { name: 'answer', type: 'text', title: 'Answer' },
//           ],
//         },
//       ],
//     },
//   ],
// };

import { defineField } from "sanity";

// export default FaqSection;

// schemas/componentBlocks/faqSection.js
const FaqSection = {
  name: "faqSection",
  type: "document",
  title: "FAQ Section",
  fields: [
    { name: "title", type: "string", title: "Section Title" },
    {
      name: "items",
      type: "array",
      title: "FAQs",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", type: "string", title: "Question" },
            { name: "answer", type: "text", title: "Answer" },
          ],
        },
      ],
    },
  ],
};

export default FaqSection;
