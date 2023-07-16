import prisma from '../../app/lib/prisma/index.js';
const lifestyles = [
  { type: 'Sedentary', name: 'Малоподвижный', coefficient: 1.2 },
  {
    type: 'OneToThreeTimesWeek',
    name: 'Тренировки 1-3 раза в неделю',
    coefficient: 1.375,
  },
  {
    type: 'ThreeToFiveTimesWeek',
    name: 'Тренировки 3-5 раза в неделю',
    coefficient: 1.55,
  },
  { type: 'HighLoadDaily', name: 'Высокие нагрузки каждый день', coefficient: 1.7 },
  { type: 'ExtremeLoad', name: 'Экстремальные нагрузки', coefficient: 1.9 },
];

export const lifestyleSeeder = async () => {
  for (let lifestyle of lifestyles) {
    await prisma.lifestyleCoefficient.create({
      data: {
        type: lifestyle.type,
        name: lifestyle.name,
        coefficient: lifestyle.coefficient,
      },
    });
  }
};
