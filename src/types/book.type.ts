import { BookStatusEnum } from "../constants";

type Book = {
  id: string;
  title: string;
  originalPrice: number;
  sellingPrice: number;
  category: string;
  status: BookStatusEnum;
  activityLog: [
    {
      field: string;
      newValue: string;
      oldValue: string;
      createdAt: Date;
    }
  ];
  createdAt: Date;
  updatedAt: Date;
};

type CreateBookInput = {
  title: Book["title"];
  originalPrice: Book["originalPrice"];
  sellingPrice: Book["sellingPrice"];
  category: Book["category"];
  status?: Book["status"] | null;
};

type UpdateBookInput = {
  title?: Book["title"] | null;
  originalPrice?: Book["originalPrice"] | null;
  sellingPrice?: Book["sellingPrice"] | null;
  category?: Book["category"] | null;
  status?: Book["status"] | null;
};

type GetBookInput = {
  title?: Book["title"] | null;
  originalPrice?: Book["originalPrice"] | null;
  sellingPrice?: Book["sellingPrice"] | null;
  category?: Book["category"] | null;
  status?: Book["status"] | null;
};

type GraphQLUpdateBookInput = {
  id: Book["id"];
  title?: Book["title"] | null;
  originalPrice?: Book["originalPrice"] | null;
  sellingPrice?: Book["sellingPrice"] | null;
  category?: Book["category"] | null;
  status?: Book["status"] | null;
};

interface IBook extends Document {
  id: Book["id"];
  title: Book["title"];
  originalPrice: Book["originalPrice"];
  sellingPrice: Book["sellingPrice"];
  category: Book["category"];
  status: Book["status"];
  activityLog: Book["activityLog"];
  createdAt: Book["createdAt"];
  updatedAt: Book["updatedAt"];
}

export type {
  Book,
  IBook,
  CreateBookInput,
  UpdateBookInput,
  GetBookInput,
  GraphQLUpdateBookInput,
};
