CREATE TABLE IF NOT EXISTS "todos" (
	"id" bigint NOT NULL,
	"title" text NOT NULL,
	"completed" boolean DEFAULT false NOT NULL
);
