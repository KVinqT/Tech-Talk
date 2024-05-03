-- CreateTable
CREATE TABLE "Users" (
    "user_id" BIGSERIAL NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "gender" INTEGER NOT NULL,
    "email" VARCHAR(255),
    "phone_number" VARCHAR(255),
    "password" VARCHAR(255) NOT NULL,
    "confirm_password" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "UserPosts" (
    "user_post_id" BIGSERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL DEFAULT 'public',
    "user_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserPosts_pkey" PRIMARY KEY ("user_post_id")
);

-- CreateTable
CREATE TABLE "UserPostImages" (
    "user_post_image_id" BIGSERIAL NOT NULL,
    "user_post_image_url" VARCHAR(255) NOT NULL,
    "user_post_image_filename" VARCHAR(255) NOT NULL,
    "user_post_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserPostImages_pkey" PRIMARY KEY ("user_post_image_id")
);

-- CreateTable
CREATE TABLE "Follows" (
    "followedById" BIGINT NOT NULL,
    "followingId" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Follows_pkey" PRIMARY KEY ("followingId","followedById")
);

-- CreateTable
CREATE TABLE "CompanyUsers" (
    "company_id" BIGSERIAL NOT NULL,
    "company_name" VARCHAR(255) NOT NULL,
    "phone_number" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "city_id" INTEGER NOT NULL,
    "township_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompanyUsers_pkey" PRIMARY KEY ("company_id")
);

-- CreateTable
CREATE TABLE "CompanyPosts" (
    "company_post_id" BIGSERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "job_type_id" INTEGER NOT NULL,
    "company_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompanyPosts_pkey" PRIMARY KEY ("company_post_id")
);

-- CreateTable
CREATE TABLE "CompanyPostImages" (
    "company_post_image_id" BIGSERIAL NOT NULL,
    "company_post_image_url" VARCHAR(255) NOT NULL,
    "company_post_image_filename" VARCHAR(255) NOT NULL,
    "company_post_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompanyPostImages_pkey" PRIMARY KEY ("company_post_image_id")
);

-- CreateTable
CREATE TABLE "Cities" (
    "city_id" SERIAL NOT NULL,
    "city_name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cities_pkey" PRIMARY KEY ("city_id")
);

-- CreateTable
CREATE TABLE "Townships" (
    "township_id" SERIAL NOT NULL,
    "township_name" VARCHAR(255) NOT NULL,
    "city_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Townships_pkey" PRIMARY KEY ("township_id")
);

-- CreateTable
CREATE TABLE "JobTypes" (
    "job_type_id" SERIAL NOT NULL,
    "job_type_name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobTypes_pkey" PRIMARY KEY ("job_type_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_phone_number_key" ON "Users"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Users_password_key" ON "Users"("password");

-- AddForeignKey
ALTER TABLE "UserPosts" ADD CONSTRAINT "UserPosts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostImages" ADD CONSTRAINT "UserPostImages_user_post_id_fkey" FOREIGN KEY ("user_post_id") REFERENCES "UserPosts"("user_post_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follows" ADD CONSTRAINT "Follows_followedById_fkey" FOREIGN KEY ("followedById") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follows" ADD CONSTRAINT "Follows_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyUsers" ADD CONSTRAINT "CompanyUsers_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "Cities"("city_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyUsers" ADD CONSTRAINT "CompanyUsers_township_id_fkey" FOREIGN KEY ("township_id") REFERENCES "Townships"("township_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPosts" ADD CONSTRAINT "CompanyPosts_job_type_id_fkey" FOREIGN KEY ("job_type_id") REFERENCES "JobTypes"("job_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPosts" ADD CONSTRAINT "CompanyPosts_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "CompanyUsers"("company_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostImages" ADD CONSTRAINT "CompanyPostImages_company_post_id_fkey" FOREIGN KEY ("company_post_id") REFERENCES "CompanyPosts"("company_post_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Townships" ADD CONSTRAINT "Townships_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "Cities"("city_id") ON DELETE RESTRICT ON UPDATE CASCADE;
