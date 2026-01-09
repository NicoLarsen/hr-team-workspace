// Phases for workflow: 💜 Vacancies
      
import { Vacancies_FieldIds, Vacancies_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Vacancies_PhaseIds.open_vacancies_ecd,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Vacancies_FieldIds.position_ec9,
      Vacancies_FieldIds.team_eca,
      Vacancies_FieldIds.application_period_ecb,
      Vacancies_FieldIds.job_applications_077
    ],
    followers: [],
    isEndpoint: false,
    isInitial: true,
    name: "Open Vacancies",
    possibleNextPhase: [
      Vacancies_PhaseIds.archive_ece
    ],
    possibleNextPhaseSettings: {}
  },
  {
    _id: Vacancies_PhaseIds.archive_ece,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Vacancies_FieldIds.position_ec9,
      Vacancies_FieldIds.team_eca,
      Vacancies_FieldIds.application_period_ecb,
      Vacancies_FieldIds.job_applications_077
    ],
    followers: [],
    isEndpoint: false,
    name: "Archive",
    possibleNextPhase: [
      Vacancies_PhaseIds.open_vacancies_ecd
    ],
    possibleNextPhaseSettings: {}
  }
];