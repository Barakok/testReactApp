import Coefficients from '../coefficients/сoefficients';

export default class HarrisBenedict {
    constructor(gender="", lifestyleCoefficient="") {
        this.coefficients = new Coefficients(gender);
        this.lifestyleCoefficient = lifestyleCoefficient;
        this.harrisResult = null;
    }

    calculateBMR(weight, height, age) {
        const { baseMetabolismHarris, weightCoefficientHarris, heightCoefficientHarris, ageCoefficientHarris } = this.coefficients;
        this.harrisResult = (baseMetabolismHarris + (weightCoefficientHarris * weight) + (heightCoefficientHarris * height) - (ageCoefficientHarris * age)) * this.lifestyleCoefficient;
        return this.harrisResult;
    }
    set(gender, lifestyleCoefficient) {
        this.coefficients = new Coefficients(gender);
        this.lifestyleCoefficient = lifestyleCoefficient
    }
}