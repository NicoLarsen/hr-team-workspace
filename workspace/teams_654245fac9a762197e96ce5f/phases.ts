// Phases for workflow: ❤️ Teams
      
import { Teams_FieldIds, Teams_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Teams_PhaseIds.list_of_teams_e64,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Teams_FieldIds.team_info_e60,
      Teams_FieldIds.head_of_team_e61,
      Teams_FieldIds.parent_team_511,
      Teams_FieldIds.approval_rights_80b,
      Teams_FieldIds.quotationstender_limit_80e,
      Teams_FieldIds.travel_expenses_authority_812,
      Teams_FieldIds.investment_limit_816,
      Teams_FieldIds.single_invoice_approval_limit_81a,
      Teams_FieldIds.project_purchases_81e,
      Teams_FieldIds.rd_authority_822,
      Teams_FieldIds.hiring_authority_826,
      Teams_FieldIds.org_level_6f6
    ],
    followers: [],
    isEndpoint: false,
    name: "List of teams",
    possibleNextPhase: [],
    possibleNextPhaseSettings: {}
  }
];