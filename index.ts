import express, { json } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
    const users = await prisma.user.findUnique({
        where: { id: 1 }
    });
    res.json(users);
});

app.listen(4000, () => {
    console.log("server running on port 4000");
});