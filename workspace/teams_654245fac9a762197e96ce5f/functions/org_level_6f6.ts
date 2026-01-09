/**
 * Field function for: Org Level
 * Field name: Org Level
 * Field ID: 695945cc1c4ed72e8d72d6f6
 */

interface Dependencies {
  hasParent: { _id: string; name: string };
  parentLevel: number | null;
  parentParent: { _id: string; name: string } | null;
}

export function org_level_6f6(dep: Dependencies): any {
  // If no parent, this is a top-level team (Level 1)
  if (!dep.hasParent || !dep.hasParent._id) {
    return 1;
  }

  // Detect self-reference: if parent's parent is the same as parent, it's a loop
  // This means: Team A -> Parent Team A -> Parent Team A (self-reference at top)
  if (dep.parentParent && dep.parentParent._id === dep.hasParent._id) {
    return 1;
  }

  // If has parent, level = parent's level + 1
  var parentLevel = Number(dep.parentLevel) || 0;

  // If parent level is 0 or null, parent might not have calculated yet
  // Default to level 2 as safe fallback (will recalculate when parent updates)
  if (parentLevel === 0) {
    return 2;
  }

  // Detect circular reference: if parent level is >= 10, we're in a loop
  // Cap at level 1 to break the infinite recursion
  if (parentLevel >= 10) {
    return 1;
  }

  return parentLevel + 1;
}