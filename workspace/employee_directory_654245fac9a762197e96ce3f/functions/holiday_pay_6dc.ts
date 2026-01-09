/**
 * Field function for: Holiday Pay
 * Field name: Holiday Pay
 * Field ID: 695d5692e7e22f224d75a6dc
 */

interface Dependencies {
  salary: number;
}

export function holiday_pay_6dc(dep: Dependencies): any {
  var salary = Number(dep.salary) || 0;
  return Math.round(salary * 0.12);
}