import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "abhi",
        email: "abhi@gmail.com",
        age: 24,
      },
      {
        name: "sachin",
        email: "sachin@gmail.com",
        age: 23,
      },
      {
        name: "rohit",
        email: "rohit@gmail.com",
        age: 24,
      },
    ],
  });
}

seed().then(() => prisma.$disconnect());
