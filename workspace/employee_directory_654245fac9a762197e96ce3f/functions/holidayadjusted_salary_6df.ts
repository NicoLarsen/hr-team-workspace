/**
 * Field function for: Holiday-Adjusted Salary
 * Field name: Holiday-Adjusted Salary
 * Field ID: 695d5692e7e22f224d75a6df
 */

interface Dependencies {
  salary: number;
}

export function holidayadjusted_salary_6df(dep: Dependencies): any {
  var salary = Number(dep.salary) || 0;
  return Math.round(salary * 1.12);
}