let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false

};
function sumSalary(salaries) {
  let sum = 0;
  for (key in salaries) {
    if (typeof salaries[key] == 'number' && isFinite(salaries[key])) {
      sum += salaries[key];

    }
  }
  return sum;
}
console.log(sumSalary(salaries));

// // Однако, перед сложением нужно не забыть исключить специальные числовые значения, которые нам не подходят:
// `NaN`, `Infinity`, `-Infinity`.
// // А если служебная информация, тип значения - любой другой. Мы ожидаем получить сумму только зарплат, другие
//  свойства следует игнорировать.
// // Также нужно учесть ситуацию, когда в объекте нет свойств, хранящих зарплаты. В таком случае функция должна
// вернуть 0.

