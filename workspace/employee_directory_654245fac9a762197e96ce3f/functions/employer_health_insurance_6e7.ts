/**
 * Field function for: Employer Health Insurance
 * Field name: Employer Health Insurance
 * Field ID: 695d5692e7e22f224d75a6e7
 */

interface Dependencies {
  salary: number;
}

export function employer_health_insurance_6e7(dep: Dependencies): any {
  var salary = Number(dep.salary) || 0;
  var holidayAdjusted = salary * 1.12;
  return Math.round(holidayAdjusted * 0.0187);
}