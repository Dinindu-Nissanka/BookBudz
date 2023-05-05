import { IncomingMessage, Server, ServerResponse } from "http";
import * as booksController from "../controllers/book.controller";
import { RouteOptions } from "fastify";

const getBooksRoute: RouteOptions = {
  method: "GET",
  url: "/api/books",
  handler: booksController.getBooks,
};
const getBookRoute: RouteOptions<
  Server,
  IncomingMessage,
  ServerResponse,
  { Params: { id: string } }
> = {
  method: "GET",
  url: "/api/books/:id",
  handler: booksController.getSingleBook,
};
const postBookRoute: RouteOptions = {
  method: "POST",
  url: "/api/books",
  handler: booksController.addBook,
};
const putBookRoute: RouteOptions<
  Server,
  IncomingMessage,
  ServerResponse,
  { Params: { id: string } }
> = {
  method: "PUT",
  url: "/api/books/:id",
  handler: booksController.updateBook,
};
const deleteBookRoute: RouteOptions<
  Server,
  IncomingMessage,
  ServerResponse,
  { Params: { id: string } }
> = {
  method: "DELETE",
  url: "/api/books/:id",
  handler: booksController.deleteBook,
};

const routes = [
  getBooksRoute,
  getBookRoute,
  postBookRoute,
  putBookRoute,
  deleteBookRoute,
];

export default routes;
