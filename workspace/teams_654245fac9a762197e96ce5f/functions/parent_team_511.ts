/**
 * Field function for: Parent Team
 * Field name: Parent Team
 * Field ID: 6958ee25ba1d8bef3af8b511
 */

interface Dependencies {
  headOfTeamTeam: { _id: string; name: string } | null;
  thisTeamId: any;
}

export function parent_team_511(dep: Dependencies): any {
  // dep.headOfTeamTeam contains the Team ID from the Head of Team employee
  // This is a forward link traversal: Head of Team (activitylink) -> Team field

  var parentTeamId = dep.headOfTeamTeam;

  // Return the team ID if it exists, otherwise return empty string
  // Empty string is the correct return for activitylink fields when no link exists
  if (parentTeamId === null || parentTeamId === undefined || parentTeamId === '') {
    return '';
  }

  // Prevent circular reference: a team cannot be its own parent
  if (parentTeamId === dep.thisTeamId) {
    return '';
  }

  return parentTeamId;
}