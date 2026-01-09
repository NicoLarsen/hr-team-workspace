/**
 * Field function for: Team info
 * Field name: Team info
 * Field ID: 654245fac9a762197e96ce60
 */

interface Dependencies {
  data: Array<{
      _id: string;
      name: string;
      process: string;
      phase: string;
      active?: boolean;
      created: number;
      updated: number;
      completed: number | null;
      processName: string;
      phaseName: string;
      sequence: number;
    }>;
}

export function team_info_e60(dep: Dependencies): any {
return 'The team has  ' + (Object.keys(dep.data).length || 0)  + ' member(s)';
}