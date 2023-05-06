import { BookStatusEnum } from "../constants";
import { Book, IBook } from "../types";

const convert = (rawBook: IBook): Book => ({
  id: rawBook.id,
  title: rawBook.title,
  originalPrice: rawBook.originalPrice,
  sellingPrice: rawBook.sellingPrice,
  category: rawBook.category,
  status: rawBook.status as BookStatusEnum,
  activityLog: rawBook.activityLog,
  createdAt: rawBook.createdAt,
  updatedAt: rawBook.updatedAt,
});

export default convert;
