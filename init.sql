CREATE TABLE "users" (
        "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
        "name" varchar(255) NOT NULL,
        "email" varchar(255) NOT NULL,
        "picture" varchar(255),
        CONSTRAINT "users_email_unique" UNIQUE("email")
);