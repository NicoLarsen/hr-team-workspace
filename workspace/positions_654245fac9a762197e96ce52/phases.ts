// Phases for workflow: ❤️  Positions
      
import { Positions_FieldIds, Positions_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Positions_PhaseIds.list_of_positions_e5d,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Positions_FieldIds.job_description_e58,
      Positions_FieldIds.people_in_position_e59,
      Positions_FieldIds.responsibilities_e5b,
      Positions_FieldIds.team_555
    ],
    followers: [],
    isEndpoint: false,
    name: "List of positions",
    possibleNextPhase: [],
    possibleNextPhaseSettings: {}
  }
];