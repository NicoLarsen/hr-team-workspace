// Phases for workflow: 💜  Disciplinary Actions
      
import { Disciplinary_Actions_FieldIds, Disciplinary_Actions_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Disciplinary_Actions_PhaseIds.disciplinary_actions_e47,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    fields: [
      Disciplinary_Actions_FieldIds.name_e40,
      Disciplinary_Actions_FieldIds.manager_e41,
      Disciplinary_Actions_FieldIds.verbal_written_warning_e42,
      Disciplinary_Actions_FieldIds.date_e43,
      Disciplinary_Actions_FieldIds.subject_e44,
      Disciplinary_Actions_FieldIds.attachments_e45,
      Disciplinary_Actions_FieldIds.additional_notes_e46
    ],
    followers: [],
    isEndpoint: false,
    name: "Disciplinary actions",
    possibleNextPhase: [],
    possibleNextPhaseSettings: {},
    primaryDateField: Disciplinary_Actions_FieldIds.date_e43
  }
];