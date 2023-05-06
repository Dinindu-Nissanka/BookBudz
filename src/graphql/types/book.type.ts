import { enumType, objectType } from "nexus";
import { BookStatusEnum } from "../../constants";

const Activity = objectType({
  name: "Activity",
  definition(t) {
    t.string("field");
    t.string("newValue");
    t.string("oldValue");
    t.date("createdAt");
  },
});

export const BookStatus = enumType({
  name: "Status",
  members: BookStatusEnum,
  description: "The status of the book",
});

export const Book = objectType({
  name: "Book",
  definition(t) {
    t.string("id");
    t.int("originalPrice");
    t.int("sellingPrice");
    t.string("title");
    t.field("status", { type: BookStatus });
    t.list.field("activityLog", { type: Activity });
    t.date("createdAt");
    t.date("updatedAt");
  },
});
