// Configuration for workflow: 💜  Development Discussions
      
import { Development_Discussions_FieldIds, Development_Discussions_PhaseIds, HailerMembers, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.development_discussions_e48,
  createNewLabel: "Create new development discussion",
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
  enableLinkedAnnouncements: false,
  enableMessenger: false,
  enableModifiedField: false,
  enablePredefinedName: false,
  enablePreselectedTeam: true,
  enableUniqueName: true,
  enableUnlinkedMode: true,
  fieldsOrder: [
    Development_Discussions_FieldIds.name_e49,
    Development_Discussions_FieldIds.manager_appraiser_e4b,
    Development_Discussions_FieldIds.date_e4c,
    Development_Discussions_FieldIds.attach_completed_appraisal_form_e4d,
    Development_Discussions_FieldIds.memo_247
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
  name: "💜  Development Discussions",
  nameFieldPlaceHolderText: "Give a title",
  nameFunction: "return dep.kokonimi + '-kehityskeskustelu';",
  nameFunctionEnabled: true,
  nameFunctionVariables: {
    kokonimi: {
      data: [
        Development_Discussions_FieldIds.name_e49,
        WorkflowIds.employee_directory_e3f,
        "data",
        "name"
      ],
      type: ">"
    }
  },
  order: 9,
  personInChargeLabel: "",
  phasesOrder: [
    Development_Discussions_PhaseIds.performance_appraisals_e4e
  ],
  predefinedNamePrefix: "PREFIX",
  preselectedTeam: {
    account: "654245fac9a762197e96ce31",
    team: WorkspaceTeams.hr_management_d56
  }
};
      