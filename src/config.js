import { config } from 'dotenv'
config()

export const BD_HOST = process.env.BD_HOST || "btk8de7pxk98orbqfjrh-mysql.services.clever-cloud.com";
export const BD_DATABASE = process.env.BD_DATABASE || "btk8de7pxk98orbqfjrh";
export const DB_USER = process.env.DB_USER || "uak1u17ha3ixovhg";
export const DB_PASSWORD = process.env.DB_PASSWORD || "6h1co0P0prNoeEzAvnxe";
export const DB_PORT = process.env.DB_PORT || 3306;
export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET || "anthony123";
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "api_2024";
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "129117278282968";
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "vMTibViWQhHOccgIi2MoBuZKuyM";
