CREATE TABLE IF NOT EXISTS "urls" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" text,
	"uuid" text,
	CONSTRAINT "urls_uuid_unique" UNIQUE("uuid")
);
