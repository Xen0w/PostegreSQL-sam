import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "top_users",
    password: "0077",
    port: 5432,
});
