import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg;

export const pool = new Pool({
    host:
        process.env.DB_HOST ||
        "postgresql://top_users_uk9p_user:vbOu2bB8zqPNTZn0Gt6rNjf5W9Zc9Pac@dpg-ctpicut2ng1s73ds8c5g-a.frankfurt-postgres.render.com/top_users_uk9p",
    user: process.env.DB_USER || "postgres",
    database: process.env.DB_NAME || "top_users",
    password: process.env.DB_PASSWORD || "0077",
    port: process.env.DB_PORT || 5432,
});
