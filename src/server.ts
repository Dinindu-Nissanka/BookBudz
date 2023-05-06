import fastify, { FastifyInstance } from "fastify";
import routes from "./routes";
import mongoose from "mongoose";
import config from "config";
import mercurius from "mercurius";
import { schema } from "./graphql/schema";

export async function getFastifyServer(): Promise<FastifyInstance> {
  const app = fastify({ logger: true });

  routes(app);

  await app.register(mercurius, {
    schema,
    subscription: true,
    graphiql: true,
  });

  mongoose
    .connect(config.get("mongo.url"))
    .then(() => app.log.info("MongoDB connected..."))
    .catch((err) => app.log.error(err));

  return app;
}
