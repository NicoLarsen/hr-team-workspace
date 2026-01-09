/**
 * Field function for: Ticket-ID
 * Field name: Ticket-ID
 * Field ID: 654245fac9a762197e96ceae
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

export function ticketid_eae(dep: Dependencies): any {
return JSON.stringify(dep.data.sequence)
}