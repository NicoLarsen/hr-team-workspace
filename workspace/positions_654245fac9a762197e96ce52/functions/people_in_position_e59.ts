/**
 * Field function for: People in position
 * Field name: People in position
 * Field ID: 654245fac9a762197e96ce59
 */

interface Dependencies {
  worker: Array<{
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

export function people_in_position_e59(dep: Dependencies): any {
return dep.worker && dep.worker.length;
}