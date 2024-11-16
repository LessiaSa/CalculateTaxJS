// let workers1 = 5;
// let workers2 = 15;
// let workers3 = 40;
// let workers4 = 10;
// let workersArr = [workers1, workers2, workers3, workers4];
// let sumWorkers = 0;
// for (let i = 0; i < workersArr.length; i ++) {
//   sumWorkers += workersArr[i];
// }
// console.log("В компании работает " + sumWorkers + " сотрудников");

// let salary1 = 10_000;
// let salary2 = 25_000;
// let salary3 = 50_000;
// let salary4 = 100_000;

// let taxDeduction1 = Math.floor(salary1 * 0.2);
// let taxDeduction2 = Math.floor(salary2 * 0.2);
// let taxDeduction3 = Math.floor(salary3 * 0.2);
// let taxDeduction4 = Math.floor(salary4 * 0.2);
// let taxDeductionArr = [taxDeduction1, taxDeduction2, taxDeduction3, taxDeduction4];
// let taxDeductionSum = 0;
// for (let i = 0; i < taxDeductionArr.length; i ++) {
//   taxDeductionSum += taxDeductionArr[i];
// }
// console.log("Среднее налоговое отчисление составляет " + Math.floor(taxDeductionSum/taxDeductionArr.length) + " рублей.");

// let sal1 = workers1 * salary1;
// let sal2 = workers2 * salary2;
// let sal3 = workers3 * salary3;
// let sal4 = workers4 * salary4;



// let tax1 = Math.floor(sal1 * 0.2);
// let tax2 = Math.floor(sal2 * 0.2);
// let tax3 = Math.floor(sal3 * 0.2);
// let tax4 = Math.floor(sal4 * 0.2);
// let taxArr = [tax1, tax2, tax3, tax4];
// let taxSum = 0;
// for (let i = 0; i < taxArr.length; i ++) {
//   taxSum += taxArr[i];
// }
// console.log("Сумма всех налоговых отчислений со всех работников составляет " + taxSum + " рублей.");



// Известные зарплаты сотрудников
let salaries = {
  "5": 10000,
  "15": 25000,
  "40": 50000,
  "10": 100000
};
// 
// Расчет суммарных налоговых отчислений
function calculateTotalTax(salaries) {
  let totalTax = 0;
  for (let count in salaries) {
    let salary = salaries[count];
    let tax = Math.floor(salary * 0.2); // Расчет налога (20%)
    totalTax += tax; // Добавление налога к суммарным отчислениям
  }
  return totalTax;
}
// 
// Расчет средних налоговых отчислений на человека
function calculateAverageTax(salaries) {
  let totalCount = 0;
  let totalSalary = 0;
  for (let count in salaries) {
    let salary = salaries[count];
    totalCount += parseInt(count); // Суммирование количества людей
    totalSalary += salary * parseInt(count); // Суммирование общей зарплаты
  }
  let averageTax = Math.floor((totalSalary * 0.2) / totalCount); // Расчет среднего налога на человека
  return averageTax;
}

// Вызов функций для расчета и получение результатов
let totalTax = calculateTotalTax(salaries);
let averageTax = calculateAverageTax(salaries);
// 
// Вывод результатов
console.log("Суммарные налоговые отчисления: " + totalTax + " рублей");
console.log("Средние налоговые отчисления на человека: " + averageTax + " рублей");



// let salaries2 = [10000, 10000, 10000, 10000, 10000, 25000, 25000, 25000, 25000, 25000,
    //  25000, 25000, 25000, 25000, 25000, 25000, 25000, 25000, 25000, 25000, 50000, 50000, 50000,
    //   50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 
    //   50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000,
    //    50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 100000, 100000,
        // 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000];
// let sum = 0;
// 
// for (let i = 0; i < salaries2.length; i++) {
    // sum += Math.floor(salaries2[i] * 0.2);
// }
// 
// console.log('Суммарные налоговые отчисления: ' + sum);
// console.log('Средние налоговые отчисления: ' + Math.floor(sum / salaries2.length));
// 
