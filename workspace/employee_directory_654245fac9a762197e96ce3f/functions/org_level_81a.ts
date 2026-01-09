/**
 * Field function for: Org Level
 * Field name: Org Level
 * Field ID: 6959462b1c4ed72e8d72d81a
 */

interface Dependencies {
  teamLevel: number | null;
}

export function org_level_81a(dep: Dependencies): any {
  var level = Number(dep.teamLevel) || 0;
  return level > 0 ? level : null;
}