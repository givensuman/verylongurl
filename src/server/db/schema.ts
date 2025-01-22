import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const urls = pgTable("urls", {
  id: serial("id").primaryKey(),
  url: text("url"),
  uuid: text("uuid").unique(),
});
