
import { Positions_FieldIds, Vacancies_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: 💜 Vacancies

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Vacancies_FieldIds.position_ec9,
    data: [
      WorkflowIds.positions_e52
    ],
    description: "The job position being advertised. Links to the Positions workflow for role details. Filtered to show only positions from the selected team.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "position",
    label: "Position",
    modifier: {
      activityFieldFilters: [
        {
          sourceFieldId: Vacancies_FieldIds.team_eca,
          targetFieldId: Positions_FieldIds.team_555,
          targetWorkflowId: WorkflowIds.positions_e52
        }
      ]
    },
    required: true,
    type: "activitylink"
  },
  {
    _id: Vacancies_FieldIds.team_eca,
    data: [
      WorkflowIds.teams_e5f
    ],
    description: "The team or department where this vacancy exists. Links to the Teams workflow.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "team",
    label: "Team",
    required: true,
    type: "activitylink"
  },
  {
    _id: Vacancies_FieldIds.application_period_ecb,
    data: [],
    description: "Start and end dates when applications are accepted for this vacancy.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "applicationPeriod",
    label: "Application period",
    required: true,
    type: "daterange"
  },
  {
    _id: Vacancies_FieldIds.job_applications_077,
    data: [
      WorkflowIds.job_applications_eba
    ],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "💜 Job applications",
    required: false,
    type: "linkedfrom"
  }
];
