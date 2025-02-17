/* eslint-disable no-console */
import mongoose from "mongoose";
import { config } from "./app/config";
import app from "./app";
import { Server } from "http";

let server: Server;
async function main() {
  await mongoose.connect(config.database_url as string);

  server = app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
}

main();

process.on("unhandledRejection", () => {
  console.log("unhandledRejection shut down server");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
});

process.on("uncaughtException", () => {
  console.log("uncaughtException shut down server");
  process.exit(1);
});
