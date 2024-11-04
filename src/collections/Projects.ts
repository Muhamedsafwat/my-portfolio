import { CollectionConfig } from "payload/types";

const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "slug",
          type: "text",
          required: true,
        },
      ],
    },

    {
      name: "previewLink",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "sourceCodeLink",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },

    {
      name: "category",
      type: "text",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "features",
      label: "Features",
      type: "text",
      hasMany: true,
    },
    {
      name: "technologies",
      label: "Technolgies",
      type: "text",
      hasMany: true,
    },

    {
      name: "highlight",
      label: "Highlight Project ?",
      type: "checkbox",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "cover",
      type: "upload",
      relationTo: "media",
    },

    {
      name: "gallery",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};

export default Projects;
