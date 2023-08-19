import Coefficients from '../coefficients/сoefficients';

export default class NutrientCalculator {
    constructor(goalCoefficient, bmrResult) {
        this.coefficients = new Coefficients();
        this.goalCoefficient = goalCoefficient;
        this.bmrResult = bmrResult;

    }
    calculationCalories (){
        const {caloriesPerGramProtein, caloriesPerGramFat, caloriesPerGramCarbohydrate} = this.coefficients;
        const {proteins, fats, carbohydrates} = this.goalCoefficient;
        const mifflinCalories = this.bmrResult;
        const numberProteins = (mifflinCalories * proteins / caloriesPerGramProtein);
        const numberFats = (mifflinCalories * fats / caloriesPerGramFat);
        const numberCarbohydrates = (mifflinCalories * carbohydrates / caloriesPerGramCarbohydrate);
        return {
            proteins: numberProteins,
            fats: numberFats,
            carbohydrates: numberCarbohydrates
        }
    }
}