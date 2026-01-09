/**
 * Field function for: People in this position
 * Field name: People in this position
 * Field ID: 654245fac9a762197e96ce56
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
  name: Array<string | number | boolean | null>;
  phase: string;
}

export function people_in_this_position_e56(dep: Dependencies): any {
let output = '';

dep.data.forEach((value, key) => {
    if (value.phase === dep.phase) {
        output += dep.name[key] + '\n';
    }

})

return output;
}