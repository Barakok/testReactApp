import Coefficients from '../coefficients/сoefficients';

export default class MifflinSanJeor {
    constructor(gender="", lifestyleCoefficient="") {
        this.coefficients =  new Coefficients(gender);
        this.lifestyleCoefficient = lifestyleCoefficient;
        this.mifflinResult = null;
    }

    calculateBMR(weight, height, age, gender) {
        const {caloriesPerUnitWeightMifflin, caloriesPerUnitHeightMifflin, ageForMifflin, ageCoefficientForMifflin} = this.coefficients;
        switch (gender) {
            case 'Male':
                this.mifflinResult = (caloriesPerUnitWeightMifflin * weight + caloriesPerUnitHeightMifflin * height - ageForMifflin * age + ageCoefficientForMifflin ) * this.lifestyleCoefficient;
                return this.mifflinResult;
            case 'Female':
                this.mifflinResult = (caloriesPerUnitWeightMifflin * weight + caloriesPerUnitHeightMifflin * height - ageForMifflin * age - ageCoefficientForMifflin) * this.lifestyleCoefficient;
                return this.mifflinResult;
        }

        return this.mifflinResult;
    }

    set(gender, lifestyleCoefficient) {
        this.coefficients = new Coefficients(gender);
        this.lifestyleCoefficient = lifestyleCoefficient
    }
}