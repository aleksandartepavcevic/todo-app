import { boolean, bigint, pgTable, text } from "drizzle-orm/pg-core";

export const todosTable = pgTable("todos", {
  id: bigint("id", { mode: "bigint" }).notNull().primaryKey(),
  title: text("title").notNull(),
  completed: boolean("completed").notNull().default(false),
});
