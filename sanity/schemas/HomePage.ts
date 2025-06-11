// schemas/homePage.js
const HomePage = {
  name: "homePage",
  type: "document",
  title: "Home Page",
  fields: [
    { name: "title", type: "string", title: "Title" },
    {
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faqSection" }] }],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Home Page",
        subtitle: "Live preview available",
      };
    },
  },
};

export default HomePage;
