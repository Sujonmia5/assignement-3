import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const config = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_round: process.env.bcrypt_salt_round,
  secret: process.env.secret,
  development: process.env.development,
};
