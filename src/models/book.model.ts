import mongoose from "mongoose";
import { Book, IBook } from "../types";
import { BookStatusEnum } from "../constants";

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    originalPrice: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
    category: { type: String, required: true },
    status: {
      type: String,
      enum: BookStatusEnum,
      required: true,
      default: BookStatusEnum.NOT_ADVERTISED,
    },
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

export default mongoose.model<IBook>("Books", BookSchema);
