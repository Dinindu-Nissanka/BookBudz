import BookSchema, { IBook } from "../models/book.model";
import { FastifyRequest } from "fastify";
import { Book } from "../types/book";

// Fetch all books
export const getBooks = async (): Promise<IBook[]> => {
  try {
    const books = await BookSchema.find();
    return books;
  } catch (err) {
    throw err;
  }
};

// Fetch a single book
export const getSingleBook = async (
  req: FastifyRequest<{
    Params: { id: string };
  }>
) => {
  try {
    const id = req.params.id;
    const book = await BookSchema.findById(id);
    return book;
  } catch (err) {
    throw err;
  }
};

// Create a new book
export const addBook = async (req: FastifyRequest) => {
  try {
    const book = new BookSchema(req.body);
    return await book.save();
  } catch (err) {
    throw err;
  }
};

// Update a single book
export const updateBook = async (
  req: FastifyRequest<{
    Params: { id: string };
  }>
) => {
  try {
    const id = req.params.id;
    const book = req.body;
    const { ...updateData }: Book = book as Book;
    const update = await BookSchema.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return update;
  } catch (err) {
    throw err;
  }
};

// Delete a single book
export const deleteBook = async (
  req: FastifyRequest<{
    Params: { id: string };
  }>
) => {
  try {
    const id = req.params.id;
    const book = await BookSchema.findByIdAndRemove(id);
    return book;
  } catch (err) {
    throw err;
  }
};
