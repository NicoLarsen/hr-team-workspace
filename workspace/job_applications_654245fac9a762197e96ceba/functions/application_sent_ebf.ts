/**
 * Field function for: Application sent
 * Field name: Application sent
 * Field ID: 654245fac9a762197e96cebf
 */

interface Dependencies {
  data: {
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
    };
}

export function application_sent_ebf(dep: Dependencies): any {
return dep.data.created || 0;
}