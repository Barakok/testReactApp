import prisma from '../../lib/prisma';

export const getLifestyles = async () => {
  const lifestyle = await prisma.lifestyleCoefficient.findMany();
  return lifestyle.map((item) => ({ value: item.type, label: item.name }));
};
