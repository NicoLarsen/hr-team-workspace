// Configuration for workflow: 💜 Exit Checklists
      
import { Exit_Checklists_FieldIds, Exit_Checklists_PhaseIds, HailerMembers, WorkflowIds } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.exit_checklists_e74,
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
  enablePreselectedTeam: false,
  enableUniqueName: false,
  enableUnlinkedMode: true,
  fieldsOrder: [
    Exit_Checklists_FieldIds.person_leaving_ea5,
    Exit_Checklists_FieldIds.responsible_for_exit_ea4,
    Exit_Checklists_FieldIds.computer_returned_e9d,
    Exit_Checklists_FieldIds.hailer_profile_removed_e9f,
    Exit_Checklists_FieldIds.email_turned_off_e9e,
    Exit_Checklists_FieldIds.alt_contact_in_auto_reply_ea3,
    Exit_Checklists_FieldIds.other_company_property_returned_ea0,
    Exit_Checklists_FieldIds.credit_card_canceled_ea1,
    Exit_Checklists_FieldIds.unresolved_ea2
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
  name: "💜 Exit Checklists",
  nameFieldPlaceHolderText: "Give a title",
  nameFunction: "return dep.fullName + ' exit'",
  nameFunctionEnabled: true,
  nameFunctionVariables: {
    fullName: {
      data: [
        Exit_Checklists_FieldIds.person_leaving_ea5,
        WorkflowIds.employee_directory_e3f,
        "data",
        "name"
      ],
      type: ">"
    }
  },
  order: 12,
  phasesOrder: [
    Exit_Checklists_PhaseIds.performed_exits_ea6
  ]
};
      