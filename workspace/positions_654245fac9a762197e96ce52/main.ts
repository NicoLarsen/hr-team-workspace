// Configuration for workflow: ❤️  Positions
      
import { HailerMembers, Positions_FieldIds, Positions_PhaseIds, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.positions_e52,
  allowGuests: false,
  defaultView: "table",
  discussionPermissions: [
    "discussion.message.add",
    "discussion.message.add.attachment",
    "discussion.read.history",
    "discussion.message.remove.own",
    "discussion.leave"
  ],
  enableAddedField: true,
  enableAttachments: true,
  enableGuestEditing: false,
  enableLinkedAnnouncements: false,
  enableMapLocation: false,
  enableMessenger: false,
  enableModifiedField: true,
  enableOwnerTeamField: false,
  enablePredefinedName: false,
  enablePreselectedTeam: true,
  enableUniqueName: false,
  enableUnlinkedMode: true,
  fieldsOrder: [
    Positions_FieldIds.job_description_e58,
    Positions_FieldIds.responsibilities_e5b,
    Positions_FieldIds.people_in_this_position_e56,
    Positions_FieldIds.people_in_position_e59,
    Positions_FieldIds.team_555
  ],
  members: [
    {
      id: HailerMembers.workspace,
      info: {},
      permissions: [
        "any"
      ]
    }
  ],
  name: "❤️  Positions",
  nameColumnText: "Name",
  nameEditable: false,
  nameFieldPlaceHolderText: "Give a title",
  order: 5,
  phasesOrder: [
    Positions_PhaseIds.list_of_positions_e5d
  ],
  preselectedTeam: {
    account: "654245fac9a762197e96ce31",
    team: WorkspaceTeams.hr_management_d56
  }
};
      