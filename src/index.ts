import { getFastifyServer } from "./server";

async function main() {
  const app = await getFastifyServer();
  await app.listen({ port: 4200, host: "0.0.0.0" });
  app.log.info(`Bookbudz listen on http://localhost:4200/`);
}

main().catch(console.error);
