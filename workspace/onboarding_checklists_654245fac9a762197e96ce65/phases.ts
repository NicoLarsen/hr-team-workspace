// Phases for workflow: 💜 Onboarding Checklists
      
import { Onboarding_Checklists_FieldIds, Onboarding_Checklists_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Onboarding_Checklists_PhaseIds.performed_inductions_e6d,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Onboarding_Checklists_FieldIds.computer_ordered_e66,
      Onboarding_Checklists_FieldIds.email_set_up_e67,
      Onboarding_Checklists_FieldIds.hailer_profile_set_up_e68,
      Onboarding_Checklists_FieldIds.other_it_needs_e69,
      Onboarding_Checklists_FieldIds.credit_card_ordered_e6a,
      Onboarding_Checklists_FieldIds.responsible_for_onboarding_e6b,
      Onboarding_Checklists_FieldIds.person_to_be_onboarded_e6c
    ],
    followers: [],
    isEndpoint: false,
    name: "Performed inductions",
    possibleNextPhase: [],
    possibleNextPhaseSettings: {}
  }
];