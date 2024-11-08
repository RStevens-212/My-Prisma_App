import { PrismaClient } from '@prisma/client';
import cuid from 'cuid';

const prisma = new PrismaClient();

async function main() {
  // Add your seeding logic here, for example:
  await prisma.user.create({
    data: {
      id: cuid(),
      email: 'alice@example.com',
    },
  });
  console.log('Database seeded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });