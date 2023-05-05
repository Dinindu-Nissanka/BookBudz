import { Book, IBook } from "../types";

const convert = (rawBook: IBook): Book => ({
  title: rawBook.title,
  originalPrice: rawBook.originalPrice,
  sellingPrice: rawBook.sellingPrice,
  category: rawBook.category,
  status: rawBook.status,
  activityLog: rawBook.activityLog,
  createdAt: rawBook.createdAt,
  updatedAt: rawBook.updatedAt,
});

export default convert;
