import { BookService } from "../../services";
import {
  Book,
  CreateBookInput,
  GetBookInput,
  GraphQLUpdateBookInput,
} from "../../types";

// Fetch all books
export const getBooksResolver = async (
  _root: any,
  args: GetBookInput
): Promise<Book[]> => {
  return await BookService.getBooks(args);
};

export const createBooksResolver = async (
  _root: any,
  args: CreateBookInput
): Promise<Book> => {
  return await BookService.addBook(args);
};

export const updateBooksResolver = async (
  _root: any,
  args: GraphQLUpdateBookInput
): Promise<Book> => {
  const { id, ...rest } = args;

  return await BookService.updateBook(id, rest);
};
