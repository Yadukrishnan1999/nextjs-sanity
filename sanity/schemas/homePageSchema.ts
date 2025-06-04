const HomePageBanner = {
  name: "homePageBanner",
  title: "Home Page Banner",
  type: "document",
  fields: [
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternate Text",
          type: "string"
        }
      ]
    }
    ,
    {
      name: "whatIsZipcare",
      title: "What is zipcare?",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    },

  ],
};
export default HomePageBanner