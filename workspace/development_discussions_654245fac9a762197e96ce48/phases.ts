// Phases for workflow: 💜  Development Discussions
      
import { Development_Discussions_FieldIds, Development_Discussions_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Development_Discussions_PhaseIds.performance_appraisals_e4e,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    fields: [
      Development_Discussions_FieldIds.name_e49,
      Development_Discussions_FieldIds.manager_appraiser_e4b,
      Development_Discussions_FieldIds.date_e4c,
      Development_Discussions_FieldIds.attach_completed_appraisal_form_e4d,
      Development_Discussions_FieldIds.memo_247
    ],
    followers: [],
    isEndpoint: false,
    name: "Performance Appraisals",
    possibleNextPhase: [],
    possibleNextPhaseSettings: {},
    primaryDateField: Development_Discussions_FieldIds.date_e4c
  }
];