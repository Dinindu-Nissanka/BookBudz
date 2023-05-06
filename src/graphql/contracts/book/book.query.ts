import { arg, extendType, intArg, list, stringArg } from "nexus";
import { Book, BookStatus } from "../../types";
import { BookResolver } from "../../resolvers";
import { BookStatusEnum } from "../../../constants";

export const HelloQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("getBooks", {
      type: list(Book),
      args: {
        title: stringArg(),
        status: arg({ type: BookStatus }),
        originalPrice: intArg(),
        sellingPrice: intArg(),
        category: stringArg(),
      },
      resolve: (_root, args) => {
        let argsForResolver = {};

        if (args.status) {
          argsForResolver = {
            ...args,
            status: args.status as BookStatusEnum,
          };
        } else {
          argsForResolver = args;
        }

        return BookResolver.getBooksResolver(_root, argsForResolver);
      },
    });
  },
});
