import fastify, { FastifyInstance, RouteOptions } from "fastify";
import routes from "./routes";
import { IncomingMessage, Server, ServerResponse } from "http";
import mongoose from "mongoose";

export function getFastifyServer(): FastifyInstance {
  const app = fastify({ logger: true });

  routes.forEach(
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

  mongoose
    .connect(
      `mongodb://localhost:27017/bookbudz?directConnection=true&ssl=false`
    )
    .then(() => app.log.info("MongoDB connected..."))
    .catch((err) => app.log.error(err));

  return app;
}
