/**
 * Field function for: Group Life Insurance
 * Field name: Group Life Insurance
 * Field ID: 695d5693e7e22f224d75a6f3
 */

interface Dependencies {
  salary: number;
}

export function group_life_insurance_6f3(dep: Dependencies): any {
  var salary = Number(dep.salary) || 0;
  var holidayAdjusted = salary * 1.12;
  return Math.round(holidayAdjusted * 0.0006);
}