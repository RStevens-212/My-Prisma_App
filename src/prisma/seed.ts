import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  const users: Prisma.UserCreateManyInput[] = [
    {id: 'clj012abc000001qwd9fwph27', email: 'userOne@example.com', password: 'UserOnePassword'},
    {id: 'clj012abc000002qwd2jh8z7f', email: 'userTwo@example.com', password: 'UserTwoPassword'},
    {id: 'clj012abc000003qwdvhmnrnk', email: 'userThree@example.com', password: 'UserThreePassword'},
  ]

  const labels: Prisma.LabelCreateManyInput[] = [
    {'id': 'label01', 'text': 'owner::John', 'color': '#cd8821'},
    {'id': 'label02', 'text': 'owner::Mary', 'color': '#2170cd'},
    {'id': 'label03', 'text': 'owner::Pete', 'color': '#21cd99'},
  ]

  const metrics: Prisma.MetricCreateManyInput[] = [
    {id: 'clj012abc000001qwd9fwph27', key: 'metric_1', name: 'Metric 1', },
    {id: 'clj012abc000002qwd2jh8z7f', key: 'metric_2', name: 'Metric 2',},
    {id: 'clj012abc000003qwdvhmnrnk', key: 'metric_3', name: 'Metric 3',},
    {id: 'clj012abc000004qwdzptcrb8', key: 'metric_4', name: 'Metric 4',},
    {id: 'clj012abc000005qwd98ksqrw', key: 'metric_5', name: 'Metric 5',},
    {id: 'clj012abc000006qwd4fzhrmv', key: 'metric_6', name: 'Metric 6',},
  ]
  
  await prisma.$transaction(async prisma => {
    await Promise.all([
      prisma.user.deleteMany({}),
      prisma.userPreferences.deleteMany({}),
      prisma.favorite.deleteMany({}),
      prisma.metric.deleteMany({}),
      prisma.label.deleteMany({}),
    ])
  });

  await prisma.user.createMany({
    data: users,
  });

  await prisma.metric.createMany({
    data: metrics
  });

  await prisma.label.createMany({
    data: labels,
  });

  console.log('Database seeded!');
}

main()
  .then(async() => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });