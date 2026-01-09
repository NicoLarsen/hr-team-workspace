/**
 * Field function for: Supervisor
 * Field name: Supervisor
 * Field ID: 654245fac9a762197e96ce71
 */

interface Dependencies {
  headOfTeam: { _id: string; name: string } | null;
}

export function supervisor_e71(dep: Dependencies): any {
  return dep.headOfTeam || null;
}