// Phases for workflow: 💜 Change management
      
import { Change_management_FieldIds, Change_management_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Change_management_PhaseIds.position_change_e55,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    enableAnnouncement: false,
    fields: [
      Change_management_FieldIds.person_e50,
      Change_management_FieldIds.effective_date_e51,
      Change_management_FieldIds.previous_position_e53,
      Change_management_FieldIds.new_position_e54
    ],
    followers: [],
    isEndpoint: false,
    name: "Position change",
    possibleNextPhase: [],
    possibleNextPhaseSettings: {}
  }
];