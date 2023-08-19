export default  class Coefficients {
    constructor(gender) {
        console.log ("Gender: ", gender)
        this.caloriesPerUnitWeightMifflin = 10;
        this.caloriesPerUnitHeightMifflin = 6.25;
        this.ageForMifflin = 5;
        this.ageCoefficientForMifflin = gender === 'Male' ? 5 : 161;
        this.baseMetabolismHarris = gender === 'Male' ? 88.362 : 447.593;
        this.weightCoefficientHarris = gender === 'Male' ? 13.397 : 9.247;
        this.heightCoefficientHarris = gender === 'Male' ? 4.799 : 3.098;
        this.ageCoefficientHarris = gender === 'Male' ? 5.677 : 4.330;
        this.caloriesPerGramProtein = 4;
        this.caloriesPerGramFat = 9;
        this.caloriesPerGramCarbohydrate = 4;
    }
}