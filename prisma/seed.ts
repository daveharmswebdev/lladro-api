import { PrismaClient, TodoStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  // Create Doers
  const doer1 = await prisma.doer.create({
    data: {
      firstName: 'Alice',
      lastName: 'Smith',
    },
  });
  console.log(`Created doer with id: ${doer1.id}, name: ${doer1.firstName} ${doer1.lastName}`);

  const doer2 = await prisma.doer.create({
    data: {
      firstName: 'Bob',
      lastName: 'Johnson',
    },
  });
  console.log(`Created doer with id: ${doer2.id}, name: ${doer2.firstName} ${doer2.lastName}`);

  // Create Todos and associate them with Doers
  for (let i = 1; i <= 5; i++) {
    const selectedDoerId = i % 2 === 0 ? doer2.id : doer1.id; // Alternate between doer1 and doer2
    const todo = await prisma.todo.create({
      data: {
        name: `Todo Item ${i}`,
        description: `This is the description for todo item ${i}.`,
        status: TodoStatus.New,
        doerId: selectedDoerId,
      },
    });
    console.log(`Created todo with id: ${todo.id}, name: ${todo.name}, assigned to doerId: ${selectedDoerId}`);
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
