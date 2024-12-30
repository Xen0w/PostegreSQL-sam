import path from "path";
import { getAllUsernames, insertUsername } from "../db/queries.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function getAllUsers(req, res) {
    const usernames = await getAllUsernames();
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}
export async function getNewUserForm(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
}
export async function saveUser(req, res) {
    const { username } = req.body;
    await insertUsername(username);
    res.redirect("/");
}
