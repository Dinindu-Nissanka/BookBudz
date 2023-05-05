import { FastifyRequest } from "fastify";
import { Book, CreateBookInput, UpdateBookInput } from "../types";
import { BookService } from "../services";

// Fetch all books
export const getBooks = async (): Promise<Book[]> => {
  return await BookService.getBooks();
};

// Fetch a single book
export const getSingleBook = async (
  req: FastifyRequest<{
    Params: { id: string };
  }>
): Promise<Book> => {
  const id = req.params.id;
  return await BookService.getSingleBook(id);
};

// Create a new book
export const addBook = async (
  req: FastifyRequest<{
    Body: CreateBookInput;
  }>
): Promise<Book> => {
  const payload = req.body;
  return await BookService.addBook(payload);
};

// Update a single book
export const updateBook = async (
  req: FastifyRequest<{
    Params: { id: string };
    Body: UpdateBookInput;
  }>
): Promise<Book> => {
  const id = req.params.id;
  const payload: UpdateBookInput = req.body;
  return BookService.updateBook(id, payload);
};

// Delete a single book
export const deleteBook = async (
  req: FastifyRequest<{
    Params: { id: string };
  }>
): Promise<Book> => {
  const id = req.params.id;
  return await BookService.deleteBook(id);
};
