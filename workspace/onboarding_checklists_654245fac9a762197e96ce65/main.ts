// Configuration for workflow: 💜 Onboarding Checklists
      
import { HailerMembers, Onboarding_Checklists_FieldIds, Onboarding_Checklists_PhaseIds, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.onboarding_checklists_e65,
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
  enableLinkedAnnouncements: false,
  enableMapLocation: false,
  enableMessenger: false,
  enableModifiedField: true,
  enablePredefinedName: false,
  enablePreselectedTeam: true,
  enableUniqueName: false,
  enableUnlinkedMode: true,
  fieldsOrder: [
    Onboarding_Checklists_FieldIds.person_to_be_onboarded_e6c,
    Onboarding_Checklists_FieldIds.responsible_for_onboarding_e6b,
    Onboarding_Checklists_FieldIds.computer_ordered_e66,
    Onboarding_Checklists_FieldIds.hailer_profile_set_up_e68,
    Onboarding_Checklists_FieldIds.email_set_up_e67,
    Onboarding_Checklists_FieldIds.other_it_needs_e69,
    Onboarding_Checklists_FieldIds.credit_card_ordered_e6a
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
  name: "💜 Onboarding Checklists",
  nameFieldPlaceHolderText: "Give a title",
  nameFunction: "const person = dep.fullName || 'Onboarding';\n\nreturn person + ' ' + dep.data.sequence ",
  nameFunctionEnabled: true,
  nameFunctionVariables: {
    data: {
      data: [
        "data"
      ],
      type: "="
    },
    fullName: {
      data: [
        "654245fac9a762197e96ce6e",
        WorkflowIds.employee_directory_e3f,
        "data",
        "name"
      ],
      type: ">"
    }
  },
  order: 8,
  phasesOrder: [
    Onboarding_Checklists_PhaseIds.performed_inductions_e6d
  ],
  preselectedTeam: {
    account: "654245fac9a762197e96ce31",
    team: WorkspaceTeams.hr_management_d56
  }
};
      