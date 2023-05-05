import { BookSchema } from "../models";
import { Book } from "../types";
import convert from "./convert";

// Fetch all books
export const getBooks = async (): Promise<Book[]> => {
  try {
    const books = await BookSchema.find();
    return books.map(convert);
  } catch (err) {
    throw err;
  }
};

// Fetch a single book
export const getSingleBook = async (id: string): Promise<Book> => {
  try {
    const book = await BookSchema.findById(id);

    if (book) return convert(book);

    throw new Error(`Book with an id ${id} was not found`);
  } catch (err) {
    throw err;
  }
};

// Create a new book
export const addBook = async (payload: Book): Promise<Book> => {
  try {
    const book = new BookSchema(payload);
    const savedBook = await book.save();
    return convert(savedBook);
  } catch (err) {
    throw err;
  }
};

// Update a single book
export const updateBook = async (id: string, payload: Book): Promise<Book> => {
  try {
    let query: {
      $set?: any;
      $push?: any;
    } = { $set: payload };

    if (payload.status) {
      const bookBeforeUpdate = await BookSchema.findById(id);

      if (!bookBeforeUpdate) {
        throw new Error(`Book with an id ${id} was not found`);
      }

      if (bookBeforeUpdate.status !== payload.status) {
        query.$push = {
          activityLog: {
            field: "status",
            newValue: payload.status,
            oldValue: bookBeforeUpdate.status,
            createdAt: new Date(),
          },
        };
      }
    }

    const updatedBook = await BookSchema.findByIdAndUpdate(id, query, {
      new: true,
    });

    if (updatedBook) return convert(updatedBook);

    throw new Error(`Book with an id ${id} was not found`);
  } catch (err) {
    throw err;
  }
};

// Delete a single book
export const deleteBook = async (id: string): Promise<Book> => {
  try {
    const book = await BookSchema.findByIdAndRemove(id);

    if (book) return convert(book);

    throw new Error(`Book with an id ${id} was not found`);
  } catch (err) {
    throw err;
  }
};
