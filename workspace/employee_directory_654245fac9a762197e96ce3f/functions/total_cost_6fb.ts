/**
 * Field function for: Total Cost
 * Field name: Total Cost
 * Field ID: 695d5693e7e22f224d75a6fb
 */

interface Dependencies {
  benefits: number;
  consultancyFee: number;
  salary: number;
}

export function total_cost_6fb(dep: Dependencies): any {
  var salary = Number(dep.salary) || 0;
  var consultancyFee = Number(dep.consultancyFee) || 0;
  var benefits = Number(dep.benefits) || 0;

  // Contractor: consultancy fee + benefits (no side costs)
  if (consultancyFee > 0 && salary === 0) {
    return Math.round(consultancyFee + benefits);
  }

  // Employee: salary + side costs + benefits
  if (salary > 0) {
    var holidayAdjusted = salary * 1.12;

    var holidayPay = salary * 0.12;
    var pension = holidayAdjusted * 0.172;
    var healthInsurance = holidayAdjusted * 0.0187;
    var unemployment = holidayAdjusted * 0.002;
    var accident = holidayAdjusted * 0.0055;
    var groupLife = holidayAdjusted * 0.0006;

    var sideCosts = holidayPay + pension + healthInsurance + unemployment + accident + groupLife;

    return Math.round(salary + sideCosts + benefits);
  }

  // No salary or consultancy fee - just return benefits if any
  return Math.round(benefits);
}