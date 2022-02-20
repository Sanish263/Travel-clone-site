export default {
    name: "comment",
    type: "document",
    title: "Enquiries",
    fields: [
        {
            name: "name",
            type: "string",
        },
        {
            name: "email",
            type: "string",
        },
        {
            name: "contact",
            type: "number"
        },
        {
            name: "adults",
            type: "number"
        },
        {
            name: "children",
            type: "number"
        },
        {
            name: "comment",
            type: "text",
        },
        {
            name: "post",
            type: "reference",
            to: [{ type: "post" }],
        },
    ],
};