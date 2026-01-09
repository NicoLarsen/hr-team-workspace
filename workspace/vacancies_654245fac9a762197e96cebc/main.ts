// Configuration for workflow: 💜 Vacancies
      
import { HailerMembers, Vacancies_FieldIds, Vacancies_PhaseIds, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.vacancies_ebc,
  allowGuests: true,
  coverImage: "65424d2b153aa607ff83e495",
  createNewLabel: "",
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
  enableGuestEditing: true,
  enableLinkedAnnouncements: true,
  enableMapLocation: false,
  enableMessenger: true,
  enableModifiedField: true,
  enablePredefinedName: false,
  enablePreselectedTeam: true,
  enableUniqueName: false,
  enableUnlinkedMode: false,
  fieldsOrder: [
    Vacancies_FieldIds.team_eca,
    Vacancies_FieldIds.application_period_ecb,
    Vacancies_FieldIds.position_ec9,
    Vacancies_FieldIds.job_applications_077
  ],
  members: [
    {
      id: HailerMembers.workspace,
      info: {},
      permissions: [
        "any"
      ]
    }
  ],
  name: "💜 Vacancies",
  nameFieldPlaceHolderText: "Give a title",
  nameFunction: "const pos = dep.position || '';\nconst team1 = dep.team || '';\nlet result = (!pos && !team1) ? 'Autonaming Enabled' : pos + ' for ' + team1;\n\nreturn result || '';\n\n\n//return dep.position + ' for ' + dep.team ;",
  nameFunctionEnabled: true,
  nameFunctionVariables: {
    position: {
      data: [
        Vacancies_FieldIds.position_ec9,
        WorkflowIds.positions_e52,
        "data",
        "name"
      ],
      type: ">"
    },
    team: {
      data: [
        Vacancies_FieldIds.team_eca,
        WorkflowIds.teams_e5f,
        "data",
        "name"
      ],
      type: ">"
    }
  },
  order: 2,
  personInChargeLabel: "",
  phasesOrder: [
    Vacancies_PhaseIds.open_vacancies_ecd,
    Vacancies_PhaseIds.archive_ece
  ],
  preselectedTeam: {
    account: "654245fac9a762197e96ce31",
    team: WorkspaceTeams.hr_management_d56
  }
};
      