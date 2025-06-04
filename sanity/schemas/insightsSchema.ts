const InsightSchema = {
    name: "insightSchema",
    title: "Insights on tech care",
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
            name: "headLine",
            title: "Head Line",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
        {
            name: "category",
            title: "Category",
            type: "string",
        },
        {
            name: "Author",
            title: "Author",
            type: "string",
        },
        {
            name: "date",
            title: "Date",
            type: "date",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" }
        },

    ],
};
export default InsightSchema