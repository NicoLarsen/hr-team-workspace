// Phases for workflow: 💜 Exit Checklists
      
import { Exit_Checklists_FieldIds, Exit_Checklists_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Exit_Checklists_PhaseIds.performed_exits_ea6,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Exit_Checklists_FieldIds.computer_returned_e9d,
      Exit_Checklists_FieldIds.email_turned_off_e9e,
      Exit_Checklists_FieldIds.hailer_profile_removed_e9f,
      Exit_Checklists_FieldIds.other_company_property_returned_ea0,
      Exit_Checklists_FieldIds.credit_card_canceled_ea1,
      Exit_Checklists_FieldIds.unresolved_ea2,
      Exit_Checklists_FieldIds.alt_contact_in_auto_reply_ea3,
      Exit_Checklists_FieldIds.responsible_for_exit_ea4,
      Exit_Checklists_FieldIds.person_leaving_ea5
    ],
    followers: [],
    isEndpoint: false,
    name: "Performed exits",
    possibleNextPhase: [],
    possibleNextPhaseSettings: {}
  }
];