import { PrismaClient, TodoStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  for (let i = 1; i <= 5; i++) {
    const todo = await prisma.todo.create({
      data: {
        name: `Todo Item ${i}`,
        description: `This is the description for todo item ${i}.`,
        status: TodoStatus.New,
      },
    });
    console.log(`Created todo with id: ${todo.id}, name: ${todo.name}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
