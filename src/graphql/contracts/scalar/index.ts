import { Kind } from "graphql";
import { scalarType } from "nexus";

export const DateScalar = scalarType({
  name: "Date",
  asNexusMethod: "date",
  description: "Date custom scalar type",
  serialize(value) {
    if (value instanceof Date) {
      return value;
    }
    throw Error("GraphQL Date Scalar serializer expected a `Date` object");
  },
  parseValue(value) {
    if (typeof value === "number") {
      return new Date(value); // Convert incoming integer to Date
    }
    throw new Error("GraphQL Date Scalar parser expected a `number`");
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});