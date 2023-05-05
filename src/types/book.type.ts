type Book = {
  title: string;
  originalPrice: number;
  sellingPrice: number;
  category: string;
  status: string;
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
  status: Book["status"];
};

type UpdateBookInput = {
  title?: Book["title"];
  originalPrice?: Book["originalPrice"];
  sellingPrice?: Book["sellingPrice"];
  category?: Book["category"];
  status?: Book["status"];
};

interface IBook extends Document {
  title: Book["title"];
  originalPrice: Book["originalPrice"];
  sellingPrice: Book["sellingPrice"];
  category: Book["category"];
  status: Book["status"];
  activityLog: Book["activityLog"];
  createdAt: Book["createdAt"];
  updatedAt: Book["updatedAt"];
}

export type { Book, IBook, CreateBookInput, UpdateBookInput };
