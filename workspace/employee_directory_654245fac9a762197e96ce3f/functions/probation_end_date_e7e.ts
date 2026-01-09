/**
 * Field function for: Probation end date
 * Field name: Probation end date
 * Field ID: 654245fac9a762197e96ce7e
 */

interface Dependencies {
  probation: number;
  start: number;
}

export function probation_end_date_e7e(dep: Dependencies): any {
return dep.start + (dep.probation * 30 * 24 * 60 * 60 * 1000)  || null;
}