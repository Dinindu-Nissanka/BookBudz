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

export type { Book };
