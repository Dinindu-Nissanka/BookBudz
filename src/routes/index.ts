import { FastifyInstance, RouteOptions } from "fastify";
import { routes as BookRoutes } from "./book.route";
import { IncomingMessage, Server, ServerResponse } from "http";

export function route(app: FastifyInstance) {
  BookRoutes.forEach(
    (
      route: RouteOptions<
        Server,
        IncomingMessage,
        ServerResponse,
        { Params: { id: string } }
      >
    ) => {
      app.route(route);
    }
  );
}

export default route;
