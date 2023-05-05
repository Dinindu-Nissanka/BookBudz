import mongoose from "mongoose";
import { Book } from "../types/book";

export interface IBook extends Document {
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
}

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    originalPrice: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
    category: { type: String, required: true },
    status: { type: String, required: true, default: "NOT_ADVERTISED" },
    activityLog: [
      {
        field: String,
        newValue: String,
        oldValue: String,
        createdAt: Date,
      },
    ],
  },
  {
    toJSON: {
      transform: (doc, ret): Book => {
        const id = ret._id;
        delete ret._id;
        delete ret.__v;

        return { id, ...ret };
      },
    },
    timestamps: { createdAt: true, updatedAt: true },
  }
);

export default mongoose.model<IBook>("Books", bookSchema);
