'use strict'; //kodda yer alan hataları konsola yazar 
/*
function describeCountry(country, population, capitalCity) {

    const value = `${country} has ${population} million people and its capital city is ${capitalCity} `;

    return value;

}

console.log(describeCountry('finland', 8, 'Helsinki'));
console.log(describeCountry('Turkey', 80, 'Ankara'));
console.log(describeCountry('USA', 200, 'Washington D.C'));

//function declaration and expression

// function declaration
function percentageOfWorld1(population) {

    const percentagePop = (population / 7900) * 100;
    return percentagePop;

}

const turkey = percentageOfWorld1(80);
const england = percentageOfWorld1(10);
const finland = percentageOfWorld1(6)
const indian = percentageOfWorld1(1500);
console.log(turkey, england, indian, finland);

// function Expression

const percentageOfWorld2 = function (population) {

    const percantagePop = (population / 7900) * 100
    return `this country has % ${percantagePop}`;

}

console.log(percentageOfWorld2(80),
    percentageOfWorld2(4));

//arrow function

const percentageOfWorld3 = population => (population / 7900) * 100

const percentageOfTurkey = percentageOfWorld3(80);

console.log(percentageOfTurkey);

//function calling function

const describePopulation = function (country, population) {
    const perCountryPop = percentageOfWorld3(population);
    return `${country} has ${population} million people this is % ${perCountryPop} of world !!`;

}

const germany = describePopulation('germany', 90);
const japan = describePopulation('japan', 90);
const italy = describePopulation('italy', 15);


console.log(germany, japan, italy);



const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

const averageDolphines = calcAverage(44, 23, 71);
const averageKoalas = calcAverage(65, 54, 49);

const findWinner = function (avgDolphines, avgKoalas) {

    if (avgDolphines >= avgKoalas * 2) {
        return console.log(`Dolphines win !! ${avgDolphines} vs ${avgKoalas}`);

    }
    else if (avgKoalas >= avgDolphines * 2)
        return console.log(`Koalas win!! ${avgKoalas} vs ${avgDolphines}`);
    else
        return console.log('there is no winner ');



}
const testData1 = findWinner(averageDolphines, averageKoalas);

const data2Dolphines = calcAverage(85, 54, 41);
const data2Koalas = calcAverage(23, 34, 27);

const testData2 = findWinner(data2Dolphines, data2Koalas);


// introduntion arrays

const population = ['Turkey', 'China', 'USA', 'Russia'];

const a = population.length === 4;
console.log(a);

const percentageOfWorld3 = population => (population / 7900) * 100

const percentage = [percentageOfWorld3(80), percentageOfWorld3(1400), percentageOfWorld3(250), percentageOfWorld3(300)];
console.log(percentage);

//code challenge #2
const calculateTip = function (bill) {

    if (bill >= 50 && bill <= 300) {
        return bill * 0, 15;
    } else {
        return bill * 0.2;
    }

}

const bills = [125, 555, 44];
const tips = [
    calculateTip(bills[0]),
    calculateTip(bills[1]),
    calculateTip(bills[2])
]

const totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]
console.log(tips, totals);



//basic array operations

const neighbour = ['bulgaristan ', 'yunanistan ', 'ırak ', 'iran', 'gürcistan'];
neighbour.push('Utopia');
console.log(neighbour);
neighbour.pop();
console.log(neighbour);

console.log(neighbour);

if (!neighbour.includes('germany'))
    console.log('probably not a central Europian country ');

neighbour[neighbour.indexOf('ırak')] = 'ırak cumhuriyeti ';

console.log(neighbour);

//DOT NOTATİON AND BRACET NOTATİON

const jonas = {
    firstName: 'jonas ',
    lastName: 'sımetmen',
    age: 2020 - 1991,
    job: 'teacher',
    friend: ['maykıl', 'edi', 'budu']
}

//obje keyine ulaşma
const enaa = jonas.firstName;
const agaa = jonas['job'];
console.log(agaa);
console.log(enaa);

const b = 'Name';
console.log(jonas['first' + b]);


console.log(`${jonas.firstName} has ${jonas.friend.length} friends , his best friend is ${jonas.friend[0]} `);

const merak = prompt('jonas hakkında ne merak ediyorsun');

if (jonas[merak]) {
    console.log(jonas[merak]);
} else
    console.log('yalnış girdiniz');

// objeye ekleme
jonas.location = 'izmir';
jonas['twiiter'] = '@conacona ';

console.log(jonas)
    ;



//code challenge #3  methods
const mark = {

    firsName: 'Mark',
    lastName: 'Miller',
    height: 1.69,
    mass: 78,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {

    firsName: 'John',
    lastName: 'Smith',
    height: 1.95,
    mass: 92,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
mark.calcBMI();
console.log(mark.bmi);
john.calcBMI();
console.log(john.bmi);

if (john.bmi > mark.bmi) {
    console.log(`${john.firsName} ${john.lastName} 's BMI (${john.calcBMI()} is higher than ${mark.firsName, mark.lastName} (${mark.calcBMI()}))`);
} else if (mark.bmi > john.bmi)
    console.log(`${mark.firsName} ${mark.lastName} 's BMI (${mark.calcBMI()} is higher than ${john.firsName, john.lastName} (${john.calcBMI()}))`);
else
    console.log('the same value ');


*/

//last code cahlleng
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


const calculateTip = function (bill) {

    if (bill >= 50 && bill <= 300) {
        return bill * 0, 15;
    } else {
        return bill * 0.2;
    }


}

for (let i = 0; i < bills.length; i++) {
    tips.push(calculateTip(bills[i]));
}
console.log(tips)
for (let i = 0; i < tips.length; i++) {

    totals.push(tips[i] + bills[i]);

}
console.log(totals);

//code cahlleng bonus 
const colcAvg = function (arr) {
    let tempt = 0;
    for (let i = 0; i < arr.length; i++) {
        tempt += arr[i];
    }
    return tempt / arr.length;

}

console.log(colcAvg(totals));
console.log(colcAvg(tips));
console.log(colcAvg(bills));
