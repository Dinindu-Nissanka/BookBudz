import { arg, extendType, intArg, nonNull, stringArg } from "nexus";
import { BookResolver } from "../../resolvers";
import { Book, BookStatus } from "../../types";
import { BookStatusEnum } from "../../../constants";

export const PostMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createBook", {
      type: Book,
      args: {
        title: nonNull(stringArg()),
        status: arg({ type: BookStatus }),
        originalPrice: nonNull(intArg()),
        sellingPrice: nonNull(intArg()),
        category: nonNull(stringArg()),
      },
      resolve: (_root, args) => {
        let argsForResolver;

        if (args.status) {
          argsForResolver = {
            ...args,
            status: args.status as BookStatusEnum,
          };
        } else {
          argsForResolver = args;
        }

        return BookResolver.createBooksResolver(_root, argsForResolver);
      },
    });
    t.nonNull.field("updateBook", {
      type: Book,
      args: {
        id: nonNull(stringArg()),
        title: stringArg(),
        status: arg({ type: BookStatus }),
        originalPrice: intArg(),
        sellingPrice: intArg(),
        category: stringArg(),
      },
      resolve: (_root, args) => {
        let argsForResolver;

        if (args.status) {
          argsForResolver = {
            ...args,
            status: args.status as BookStatusEnum,
          };
        } else {
          argsForResolver = args;
        }

        return BookResolver.updateBooksResolver(_root, argsForResolver);
      },
    });
  },
});
