import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function POST(request) {
  const r = await request.json()
  try {
    const { gender, height, weight, age, lifestyle, goal } = r;
    console.log("ошибка", r)
    const newUser = await prisma.user.create({
      data: {
        gender,
        height,
        weight,
        age,
        goal,
        lifestyleCoefficient: {
          connect: { type: lifestyle },
        },
      },
    });
    console.log('newUser', newUser);
    return NextResponse.json(newUser);
  } catch (error) {
    console.error('Ошибка при сохранении пользователя:', error);
    return NextResponse.json({ error: 'Ошибка при сохранении пользователя.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    console.log('users', users);
  } catch (e) {
    console.log('e', e);
  }
  return NextResponse.json({ message: 'get users' });
}

