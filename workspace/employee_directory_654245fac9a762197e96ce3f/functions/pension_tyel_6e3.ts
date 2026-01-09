/**
 * Field function for: Pension (TyEL)
 * Field name: Pension (TyEL)
 * Field ID: 695d5692e7e22f224d75a6e3
 */

interface Dependencies {
  salary: number;
}

export function pension_tyel_6e3(dep: Dependencies): any {
  var salary = Number(dep.salary) || 0;
  var holidayAdjusted = salary * 1.12;
  return Math.round(holidayAdjusted * 0.172);
}