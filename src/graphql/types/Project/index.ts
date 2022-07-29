import { objectType } from "nexus";

export const Project = objectType({
  name: "Project",
  definition(t) {
    t.id("projectID", {
      description: "Unique ID for project",
    });
    t.string("title", {
      description: "Title of project",
    });
    t.list.string("images", {
      description: "Images of project",
    });
    t.string("coverImage", {
      description: "Cover image of project",
    });
    t.string("description", {
      description: "Description of project",
    });
    t.list.field("technologies", {
      type: "Technology",
	  description: "Technologies used in project",
    });
  },
});
