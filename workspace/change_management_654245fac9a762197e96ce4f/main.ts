// Configuration for workflow: 💜 Change management
      
import { Change_management_FieldIds, Change_management_PhaseIds, HailerMembers, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.change_management_e4f,
  defaultView: "table",
  description: "HR Dataset",
  discussionPermissions: [
    "discussion.message.add",
    "discussion.message.add.attachment",
    "discussion.read.history",
    "discussion.message.remove.own",
    "discussion.leave"
  ],
  enableAddedField: false,
  enableAttachments: false,
  enableLinkedAnnouncements: false,
  enableMessenger: false,
  enableModifiedField: false,
  enablePredefinedName: false,
  enablePreselectedTeam: true,
  enableUniqueName: true,
  enableUnlinkedMode: true,
  fieldsOrder: [
    Change_management_FieldIds.person_e50,
    Change_management_FieldIds.effective_date_e51,
    Change_management_FieldIds.previous_position_e53,
    Change_management_FieldIds.new_position_e54
  ],
  members: [
    {
      id: HailerMembers.hr_management_d56,
      info: {},
      permissions: [
        "any"
      ]
    }
  ],
  name: "💜 Change management",
  nameFieldPlaceHolderText: "Give a title",
  nameFunction: "return dep.nameOfPerson +': ' + dep.previous + ' 👉 '+ dep.new || null;",
  nameFunctionEnabled: true,
  nameFunctionVariables: {
    nameOfPerson: {
      data: [
        Change_management_FieldIds.person_e50,
        WorkflowIds.employee_directory_e3f,
        "data",
        "name"
      ],
      type: ">"
    },
    new: {
      data: [
        Change_management_FieldIds.new_position_e54,
        WorkflowIds.positions_e52,
        "data",
        "name"
      ],
      type: ">"
    },
    previous: {
      data: [
        Change_management_FieldIds.previous_position_e53,
        WorkflowIds.positions_e52,
        "data",
        "name"
      ],
      type: ">"
    }
  },
  order: 10,
  phasesOrder: [
    Change_management_PhaseIds.position_change_e55
  ],
  predefinedNamePrefix: "PREFIX",
  preselectedTeam: {
    account: "654245fac9a762197e96ce31",
    team: WorkspaceTeams.hr_management_d56
  }
};
      