import { IncomingMessage, Server, ServerResponse } from "http";
import { RouteOptions } from "fastify";
import { BooksController } from "../controllers";

const getBooksRoute: RouteOptions = {
  method: "GET",
  url: "/api/books",
  handler: BooksController.getBooks,
};
const getBookRoute: RouteOptions<
  Server,
  IncomingMessage,
  ServerResponse,
  { Params: { id: string } }
> = {
  method: "GET",
  url: "/api/books/:id",
  handler: BooksController.getSingleBook,
};
const postBookRoute: RouteOptions = {
  method: "POST",
  url: "/api/books",
  handler: BooksController.addBook,
};
const putBookRoute: RouteOptions<
  Server,
  IncomingMessage,
  ServerResponse,
  { Params: { id: string }; Body: Book }
> = {
  method: "PUT",
  url: "/api/books/:id",
  handler: BooksController.updateBook,
};
const deleteBookRoute: RouteOptions<
  Server,
  IncomingMessage,
  ServerResponse,
  { Params: { id: string } }
> = {
  method: "DELETE",
  url: "/api/books/:id",
  handler: BooksController.deleteBook,
};

const routes = [
  getBooksRoute,
  getBookRoute,
  postBookRoute,
  putBookRoute,
  deleteBookRoute,
];

export { routes };
