CREATE TABLE "form_submission" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"reg_number" text NOT NULL,
	"year" text NOT NULL,
	"introduction" text NOT NULL,
	"why" text NOT NULL,
	"departments" json NOT NULL,
	"why_dep" text NOT NULL,
	"how_time" text NOT NULL,
	"agree" boolean NOT NULL,
	"is_approved" boolean NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "form_submission" ADD CONSTRAINT "form_submission_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;