// Configuration for workflow: 💜  Disciplinary Actions
      
import { Disciplinary_Actions_FieldIds, Disciplinary_Actions_PhaseIds, HailerMembers, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.disciplinary_actions_e3d,
  createNewLabel: "Create new disciplinary action",
  defaultView: "table",
  discussionPermissions: [
    "discussion.message.add",
    "discussion.message.add.attachment",
    "discussion.read.history",
    "discussion.message.remove.own",
    "discussion.leave"
  ],
  enableAddedField: false,
  enableAttachments: true,
  enableLinkedAnnouncements: true,
  enableMessenger: true,
  enableModifiedField: false,
  enablePredefinedName: true,
  enablePreselectedTeam: true,
  enableUniqueName: true,
  enableUnlinkedMode: true,
  fieldsOrder: [
    Disciplinary_Actions_FieldIds.name_e40,
    Disciplinary_Actions_FieldIds.manager_e41,
    Disciplinary_Actions_FieldIds.verbal_written_warning_e42,
    Disciplinary_Actions_FieldIds.date_e43,
    Disciplinary_Actions_FieldIds.subject_e44,
    Disciplinary_Actions_FieldIds.attachments_e45,
    Disciplinary_Actions_FieldIds.additional_notes_e46
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
  name: "💜  Disciplinary Actions",
  nameEditable: false,
  nameFieldPlaceHolderText: "Give a title",
  nameFunctionEnabled: false,
  order: 11,
  personInChargeLabel: "",
  phasesOrder: [
    Disciplinary_Actions_PhaseIds.disciplinary_actions_e47
  ],
  predefinedNamePrefix: "DISCIP",
  preselectedTeam: {
    account: "654245fac9a762197e96ce31",
    team: WorkspaceTeams.hr_management_d56
  }
};
      