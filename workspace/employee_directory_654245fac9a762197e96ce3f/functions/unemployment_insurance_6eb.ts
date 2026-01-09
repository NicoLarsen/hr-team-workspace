/**
 * Field function for: Unemployment Insurance
 * Field name: Unemployment Insurance
 * Field ID: 695d5692e7e22f224d75a6eb
 */

interface Dependencies {
  salary: number;
}

export function unemployment_insurance_6eb(dep: Dependencies): any {
  var salary = Number(dep.salary) || 0;
  var holidayAdjusted = salary * 1.12;
  return Math.round(holidayAdjusted * 0.002);
}