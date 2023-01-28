import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 3000,
  dbUser: process.env.USER_NAME_DB || "",
  dbPassword: process.env.USER_PASSWORD_DB || "",
  dbServer: process.env.SERVER_DB || "",
  dbDatabase: process.env.NAME_DB || "",
};