/**
 * Field function for: Total Side Costs
 * Field name: Total Side Costs
 * Field ID: 695d5693e7e22f224d75a6f7
 */

interface Dependencies {
  salary: number;
}

export function total_side_costs_6f7(dep: Dependencies): any {
  var salary = Number(dep.salary) || 0;
  var holidayAdjusted = salary * 1.12;

  var holidayPay = salary * 0.12;
  var pension = holidayAdjusted * 0.172;
  var healthInsurance = holidayAdjusted * 0.0187;
  var unemployment = holidayAdjusted * 0.002;
  var accident = holidayAdjusted * 0.0055;
  var groupLife = holidayAdjusted * 0.0006;

  return Math.round(holidayPay + pension + healthInsurance + unemployment + accident + groupLife);
}