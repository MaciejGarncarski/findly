import {
  pgTable,
  serial,
  text,
  timestamp,
  integer,
  uuid,
  index,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    picture: varchar({ length: 255 }),
    role: varchar({ length: 255 }).notNull().default("USER"),
  },
  (table) => [
    index("idx_role").on(table.role),
    index("idx_name").on(table.name),
  ]
);

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
});

export const subcategories = pgTable("subcategories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  categoryId: integer("category_id")
    .references(() => categories.id)
    .notNull(),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  author: uuid("author_id").references(() => users.id, { onUpdate: "cascade" }),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  price: integer("price"),
  isPublished: boolean("is_published").default(true).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  categoryId: integer("category_id")
    .references(() => categories.id)
    .notNull(),
  subcategoryId: integer("subcategory_id").references(() => subcategories.id),
});

export const postImages = pgTable("post_images", {
  id: serial("id").primaryKey(),
  postId: integer("post_id")
    .references(() => posts.id)
    .notNull(),
  url: text("url").notNull(),
  isPrimary: boolean("is_primary").default(false),
});
