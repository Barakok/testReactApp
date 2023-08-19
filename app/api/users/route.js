import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import formulaFactory from '../../calculator/formulaFactory';
import NutrientCalculator from "../../calculator/formulas/nutrientCalculator";

const prisma = new PrismaClient();

export async function POST(request) {
  const r = await request.json()
  try {
    const { gender, height, weight, age, lifestyle, goal, formulaType } = r;
    console.log("ошибка", r)
    const newUser = await prisma.user.create({
      data: {
        height,
        weight,
        age,
        gender,
        goalCoefficient: {
          connect: { type: goal },
        },
        lifestyleCoefficient: {
          connect: { type: lifestyle },
        },
      },
      include: {
        lifestyleCoefficient: {
          select: {
            coefficient: true,
          },
        },
        goalCoefficient: {
          select: {
            proteins: true,
            fats: true,
            carbohydrates: true,
          },
        },
      },
    });

    const lifestyleCoefficient = newUser.lifestyleCoefficient.coefficient;
    const goalCoefficient = newUser.goalCoefficient;

    const bmrCalculator = formulaFactory(formulaType);
    const formula = new bmrCalculator(gender, lifestyleCoefficient);
    const bmrResult = formula.calculateBMR(weight, height, age, gender);
    const nutrientCalculation = new NutrientCalculator (goalCoefficient, bmrResult);
    const normaNutrientPerDay = nutrientCalculation.calculationCalories();

    function roundNumbers(obj) {
      for (const key in obj) {
        if (typeof obj[key] === 'number') {
          obj[key] = Math.round(obj[key]);
        } else if (typeof obj[key] === 'object') {
          roundNumbers(obj[key]);
        }
      }
    }

    const response = {
      bmrResult,
      normaNutrientPerDay,
    };

    roundNumbers(response)

    console.log("Miflin: ", bmrResult, "Nutrient Calculation: ", nutrientCalculation)

    return NextResponse.json(response);
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

