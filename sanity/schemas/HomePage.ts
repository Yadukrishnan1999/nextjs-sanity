// schemas/homePage.js
const HomePage = {
  name: "homePage",
  type: "document",
  title: "Home Page",
  fields: [
    {
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faqSection" }] }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Home Page",
        subtitle: "Live preview available"
      };
    }
  }
};

export default HomePage;
