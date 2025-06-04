import { PrismaClient, TodoStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  // 1. Delete existing data (in reverse order of creation to respect constraints)
  console.log('Deleting existing Todos...');
  await prisma.todo.deleteMany();

  console.log('Deleting existing Doers...');
  await prisma.doer.deleteMany();

  console.log('Deleting existing Regions...');
  await prisma.region.deleteMany();

  // 2. Create Regions
  console.log('Creating Regions...');
  const regionNorth = await prisma.region.create({
    data: {
      name: 'North',
    },
  });
  console.log(`Created region with id: ${regionNorth.id}, name: ${regionNorth.name}`);

  const regionSouth = await prisma.region.create({
    data: {
      name: 'South',
    },
  });
  console.log(`Created region with id: ${regionSouth.id}, name: ${regionSouth.name}`);

  const regionEast = await prisma.region.create({
    data: {
      name: 'East',
    },
  });
  console.log(`Created region with id: ${regionEast.id}, name: ${regionEast.name}`);

  const regionWest = await prisma.region.create({
    data: {
      name: 'West',
    },
  });
  console.log(`Created region with id: ${regionWest.id}, name: ${regionWest.name}`);


  // 3. Create Doers and associate them with Regions
  console.log('Creating Doers...');
  const doer1 = await prisma.doer.create({
    data: {
      firstName: 'Alice',
      lastName: 'Smith',
      regionId: regionNorth.id,
    },
  });
  console.log(`Created doer with id: ${doer1.id}, name: ${doer1.firstName} ${doer1.lastName}, regionId: ${doer1.regionId}`);

  const doer2 = await prisma.doer.create({
    data: {
      firstName: 'Bob',
      lastName: 'Johnson',
      regionId: regionSouth.id,
    },
  });
  console.log(`Created doer with id: ${doer2.id}, name: ${doer2.firstName} ${doer2.lastName}, regionId: ${doer2.regionId}`);

  const doer3 = await prisma.doer.create({
    data: {
      firstName: 'Charlie',
      lastName: 'Brown',
      regionId: regionNorth.id,
    },
  });
  console.log(`Created doer with id: ${doer3.id}, name: ${doer3.firstName} ${doer3.lastName}, regionId: ${doer3.regionId}`);
  
  const doer4 = await prisma.doer.create({
    data: {
      firstName: 'Diana',
      lastName: 'Prince',
      regionId: regionEast.id,
    },
  });
  console.log(`Created doer with id: ${doer4.id}, name: ${doer4.firstName} ${doer4.lastName}, regionId: ${doer4.regionId}`);

  // 4. Create Todos and associate them with Doers
  console.log('Creating Todos...');
  const doers = [doer1, doer2, doer3, doer4];
  for (let i = 1; i <= 10; i++) { // Create 10 todos
    const selectedDoer = doers[i % doers.length]; // Cycle through doers
    const todo = await prisma.todo.create({
      data: {
        name: `Todo Item ${i}`,
        description: `This is the description for todo item ${i}. Belongs to ${selectedDoer.firstName}.`,
        status: i % 3 === 0 ? TodoStatus.Complete : i % 3 === 1 ? TodoStatus.InProgress : TodoStatus.New, // Vary statuses
        doerId: selectedDoer.id,
      },
    });
    console.log(`Created todo with id: ${todo.id}, name: ${todo.name}, assigned to doerId: ${selectedDoer.id}`);
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
