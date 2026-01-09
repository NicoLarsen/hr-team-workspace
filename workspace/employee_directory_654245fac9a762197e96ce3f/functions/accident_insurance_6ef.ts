/**
 * Field function for: Accident Insurance
 * Field name: Accident Insurance
 * Field ID: 695d5692e7e22f224d75a6ef
 */

interface Dependencies {
  salary: number;
}

export function accident_insurance_6ef(dep: Dependencies): any {
  var salary = Number(dep.salary) || 0;
  var holidayAdjusted = salary * 1.12;
  return Math.round(holidayAdjusted * 0.0055);
}