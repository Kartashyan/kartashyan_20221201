import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.category.deleteMany({});
  await prisma.category.createMany({
    data: [
      { name: "Exercise" },
      { name: "Education" },
      { name: "Recipe" },
    ],
  })
  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
