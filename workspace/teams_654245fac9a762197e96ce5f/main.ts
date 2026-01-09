// Configuration for workflow: ❤️ Teams
      
import { HailerMembers, Teams_FieldIds, Teams_PhaseIds, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.teams_e5f,
  defaultView: "table",
  discussionPermissions: [
    "discussion.message.add",
    "discussion.message.add.attachment",
    "discussion.read.history",
    "discussion.message.remove.own",
    "discussion.leave"
  ],
  enableAddedField: true,
  enableAttachments: false,
  enableLinkedAnnouncements: true,
  enableMapLocation: false,
  enableMessenger: true,
  enableModifiedField: true,
  enablePredefinedName: false,
  enablePreselectedTeam: true,
  enableUniqueName: false,
  enableUnlinkedMode: true,
  fieldsOrder: [
    Teams_FieldIds.team_info_e60,
    Teams_FieldIds.head_of_team_e61,
    Teams_FieldIds.approval_rights_80b,
    Teams_FieldIds.quotationstender_limit_80e,
    Teams_FieldIds.travel_expenses_authority_812,
    Teams_FieldIds.investment_limit_816,
    Teams_FieldIds.single_invoice_approval_limit_81a,
    Teams_FieldIds.project_purchases_81e,
    Teams_FieldIds.rd_authority_822,
    Teams_FieldIds.hiring_authority_826,
    Teams_FieldIds.org_level_6f6,
    Teams_FieldIds.parent_team_511
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
  name: "❤️ Teams",
  nameColumnText: "Team Name",
  nameEditable: false,
  nameFieldPlaceHolderText: "Name the Team",
  order: 6,
  phasesOrder: [
    Teams_PhaseIds.list_of_teams_e64
  ],
  preselectedTeam: {
    account: "654245fac9a762197e96ce31",
    team: WorkspaceTeams.hr_management_d56
  }
};
      