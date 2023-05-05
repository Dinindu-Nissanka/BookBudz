import fastify, { FastifyInstance } from "fastify";
import routes from "./routes";
import mongoose from "mongoose";
import config from "config";

export function getFastifyServer(): FastifyInstance {
  const app = fastify({ logger: true });

  routes(app);

  mongoose
    .connect(config.get("mongo.url"))
    .then(() => app.log.info("MongoDB connected..."))
    .catch((err) => app.log.error(err));

  return app;
}
