import { describe, it, expect } from 'vitest';

import * as functions from './functions';

// Tests for ❤️ Employee Directory workflow function fields

describe('Finnish Employment Cost Functions', () => {
  const testSalary = 5000; // €5,000 base salary for testing

  describe('Holiday Pay', () => {
    it('should calculate 12% of base salary', () => {
      const result = functions.holiday_pay({ salary: testSalary });
      expect(result).toBe(600); // 5000 * 0.12
    });

    it('should handle null salary', () => {
      const result = functions.holiday_pay({ salary: null });
      expect(result).toBe(0);
    });
  });

  describe('Holiday-Adjusted Salary', () => {
    it('should calculate 112% of base salary', () => {
      const result = functions.holiday_adjusted_salary({ salary: testSalary });
      expect(result).toBeCloseTo(5600, 2); // 5000 * 1.12
    });

    it('should handle null salary', () => {
      const result = functions.holiday_adjusted_salary({ salary: null });
      expect(result).toBe(0);
    });
  });

  describe('Pension (TyEL)', () => {
    it('should calculate 17.2% of holiday-adjusted salary', () => {
      const result = functions.pension_tyel({ salary: testSalary });
      expect(result).toBeCloseTo(963.2, 2); // 5000 * 1.12 * 0.172
    });

    it('should handle null salary', () => {
      const result = functions.pension_tyel({ salary: null });
      expect(result).toBe(0);
    });
  });

  describe('Employer Health Insurance', () => {
    it('should calculate 1.87% of holiday-adjusted salary', () => {
      const result = functions.employer_health_insurance({ salary: testSalary });
      expect(result).toBeCloseTo(104.72, 2); // 5000 * 1.12 * 0.0187
    });

    it('should handle null salary', () => {
      const result = functions.employer_health_insurance({ salary: null });
      expect(result).toBe(0);
    });
  });

  describe('Unemployment Insurance', () => {
    it('should calculate 0.20% of holiday-adjusted salary', () => {
      const result = functions.unemployment_insurance({ salary: testSalary });
      expect(result).toBeCloseTo(11.2, 2); // 5000 * 1.12 * 0.002
    });

    it('should handle null salary', () => {
      const result = functions.unemployment_insurance({ salary: null });
      expect(result).toBe(0);
    });
  });

  describe('Accident Insurance', () => {
    it('should calculate 0.55% of holiday-adjusted salary', () => {
      const result = functions.accident_insurance({ salary: testSalary });
      expect(result).toBeCloseTo(30.8, 2); // 5000 * 1.12 * 0.0055
    });

    it('should handle null salary', () => {
      const result = functions.accident_insurance({ salary: null });
      expect(result).toBe(0);
    });
  });

  describe('Group Life Insurance', () => {
    it('should calculate 0.06% of holiday-adjusted salary', () => {
      const result = functions.group_life_insurance({ salary: testSalary });
      expect(result).toBeCloseTo(3.36, 2); // 5000 * 1.12 * 0.0006
    });

    it('should handle null salary', () => {
      const result = functions.group_life_insurance({ salary: null });
      expect(result).toBe(0);
    });
  });

  describe('Total Side Costs', () => {
    it('should sum all side costs correctly', () => {
      const result = functions.total_side_costs({ salary: testSalary });
      // Holiday: 600 + Pension: 963.2 + Health: 104.72 + Unemployment: 11.2 + Accident: 30.8 + Group Life: 3.36
      expect(result).toBeCloseTo(1713.28, 2);
    });

    it('should handle null salary', () => {
      const result = functions.total_side_costs({ salary: null });
      expect(result).toBe(0);
    });
  });

  describe('Total Employment Cost', () => {
    it('should calculate base salary plus all side costs', () => {
      const result = functions.total_employment_cost({ salary: testSalary });
      // Base: 5000 + Side costs: 1713.28
      expect(result).toBeCloseTo(6713.28, 2);
    });

    it('should handle null salary', () => {
      const result = functions.total_employment_cost({ salary: null });
      expect(result).toBe(0);
    });
  });

  describe('Integration: All costs should align', () => {
    it('total employment cost should equal salary plus total side costs', () => {
      const sideCosts = functions.total_side_costs({ salary: testSalary });
      const totalCost = functions.total_employment_cost({ salary: testSalary });
      expect(totalCost).toBeCloseTo(testSalary + sideCosts, 2);
    });

    it('total side costs should equal sum of individual costs', () => {
      const holidayPay = functions.holiday_pay({ salary: testSalary });
      const pension = functions.pension_tyel({ salary: testSalary });
      const health = functions.employer_health_insurance({ salary: testSalary });
      const unemployment = functions.unemployment_insurance({ salary: testSalary });
      const accident = functions.accident_insurance({ salary: testSalary });
      const groupLife = functions.group_life_insurance({ salary: testSalary });
      const totalSide = functions.total_side_costs({ salary: testSalary });

      const manualSum = holidayPay + pension + health + unemployment + accident + groupLife;
      expect(totalSide).toBeCloseTo(manualSum, 2);
    });
  });
});
