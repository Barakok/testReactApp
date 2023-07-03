import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    console.log('users', users);
  } catch (e) {
    console.log('e', e);
  }
  return NextResponse.json({ message: 'get users' });
}
