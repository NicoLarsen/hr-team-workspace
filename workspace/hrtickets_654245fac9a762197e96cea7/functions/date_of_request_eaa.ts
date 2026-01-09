/**
 * Field function for: Date of request
 * Field name: Date of request
 * Field ID: 654245fac9a762197e96ceaa
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

export function date_of_request_eaa(dep: Dependencies): any {
return dep.data.created || 0;

}