
import { Employee_Directory_PhaseIds, Positions_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: ❤️  Positions

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Positions_FieldIds.people_in_this_position_e56,
    data: [],
    defaultTo: false,
    description: "Auto-generated list of active employees currently holding this position.",
    function: "@function:people_in_this_position_e56",
    functionEnabled: true,
    functionVariables: {
      data: {
        data: [
          WorkflowIds.employee_directory_e3f,
          "data"
        ],
        type: "<"
      },
      name: {
        data: [
          WorkflowIds.employee_directory_e3f,
          "data",
          "name"
        ],
        type: "<"
      },
      phase: {
        data: [
          WorkflowIds.employee_directory_e3f,
          Employee_Directory_PhaseIds.active_employees_e57
        ],
        type: "?"
      }
    },
    inviteToDiscussionOnChange: false,
    label: "People in this position",
    required: false,
    type: "textarea"
  },
  {
    _id: Positions_FieldIds.job_description_e58,
    data: [],
    defaultTo: false,
    description: "This is the default job description that will be used as the starting point for all open vacancies for this position",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Job description",
    required: false,
    type: "textarea"
  },
  {
    _id: Positions_FieldIds.people_in_position_e59,
    data: [],
    description: "Count of employees currently in this position. Useful for headcount reporting.",
    function: "@function:people_in_position_e59",
    functionEnabled: true,
    functionVariables: {
      worker: {
        data: [
          WorkflowIds.employee_directory_e3f,
          "data"
        ],
        type: "<"
      }
    },
    inviteToDiscussionOnChange: false,
    label: "People in position",
    required: false,
    type: "numeric"
  },
  {
    _id: Positions_FieldIds.responsibilities_e5b,
    data: [],
    description: "This is the default responsibilities that will be used as the starting point for all open vacancies for this position",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Responsibilities",
    required: false,
    type: "textarea"
  },
  {
    _id: Positions_FieldIds.team_555,
    data: [
      WorkflowIds.teams_e5f
    ],
    description: "The team(s) this position belongs to. Used to filter position suggestions when assigning to employees.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "team",
    label: "Team",
    required: false,
    type: "activitylink"
  }
];
