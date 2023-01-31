import { config } from "dotenv";
config();

export default {
  SECRET: process.env.SECRET,
};

export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
export const AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION;
export const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
export const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
