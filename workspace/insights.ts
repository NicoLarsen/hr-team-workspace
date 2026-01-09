// Insights configuration
    
 // When adding new members, use the "HailerMembers" enum from "./enums", the members IDs shall be with prefixes like "user_", "team_", "group_".
    
import { Employee_Directory_FieldIds, HailerMembers, Teams_FieldIds, WorkflowIds } from "./enums";
    
export const insights: HailerInsightPayload[] = [
  {
    _id: "695d16015d29130866752871",
    name: "Org Chart Health Check",
    members: [
      {
        id: HailerMembers.hr_management_d56,
        info: {},
        permissions: []
      }
    ],
    public: false,
    query: "SELECT\n  team_name,\n  org_level,\n  CASE\n    WHEN id = parent_team THEN 'SELF-REFERENCE'\n    WHEN head_of_team IS NOT NULL AND (parent_team IS NULL OR parent_team = '') THEN 'MISSING PARENT'\n    WHEN org_level >= 5 THEN 'DEEP HIERARCHY (check if correct)'\n    ELSE 'OK'\n  END as issue\nFROM teams\nWHERE id = parent_team\n   OR (head_of_team IS NOT NULL AND (parent_team IS NULL OR parent_team = ''))\n   OR org_level >= 5",
    sources: [
      {
        name: "teams",
        workflowId: WorkflowIds.teams_e5f,
        fields: [
          {
            name: "id",
            meta: "_id"
          },
          {
            name: "team_name",
            meta: "name"
          },
          {
            name: "parent_team",
            fieldId: Teams_FieldIds.parent_team_511
          },
          {
            name: "head_of_team",
            fieldId: Teams_FieldIds.head_of_team_e61
          },
          {
            name: "org_level",
            fieldId: Teams_FieldIds.org_level_6f6
          }
        ]
      }
    ]
  },
  {
    _id: "695d1621c5ffec94b32ee03b",
    name: "Teams Debug View",
    members: [
      {
        id: HailerMembers.bot_botinen_382,
        info: {},
        permissions: []
      }
    ],
    public: false,
    query: "SELECT team_name, id, parent_team, head_of_team, org_level FROM teams ORDER BY org_level",
    sources: [
      {
        name: "teams",
        workflowId: WorkflowIds.teams_e5f,
        fields: [
          {
            name: "id",
            meta: "_id"
          },
          {
            name: "team_name",
            meta: "name"
          },
          {
            name: "parent_team",
            fieldId: Teams_FieldIds.parent_team_511
          },
          {
            name: "head_of_team",
            fieldId: Teams_FieldIds.head_of_team_e61
          },
          {
            name: "org_level",
            fieldId: Teams_FieldIds.org_level_6f6
          }
        ]
      }
    ]
  },
  {
    _id: "695f6bc9c5f0c5d5892e9823",
    name: "Org Chart Public Data",
    members: [
      {
        id: HailerMembers.bot_botinen_382,
        info: {},
        permissions: []
      }
    ],
    public: true,
    query: "SELECT employees._id, employees.name, employees.position, employees.team, employees.supervisor FROM employees UNION ALL SELECT teams._id, teams.name, NULL as position, NULL as team, teams.headOfTeam as supervisor FROM teams",
    sources: [
      {
        name: "employees",
        workflowId: WorkflowIds.employee_directory_e3f,
        fields: [
          {
            name: "_id",
            meta: "_id"
          },
          {
            name: "name",
            meta: "name"
          },
          {
            name: "position",
            fieldId: Employee_Directory_FieldIds.position_e6f
          },
          {
            name: "team",
            fieldId: Employee_Directory_FieldIds.team_e70
          },
          {
            name: "supervisor",
            fieldId: Employee_Directory_FieldIds.supervisor_e71
          }
        ]
      },
      {
        name: "teams",
        workflowId: WorkflowIds.teams_e5f,
        fields: [
          {
            name: "_id",
            meta: "_id"
          },
          {
            name: "name",
            meta: "name"
          },
          {
            name: "headOfTeam",
            fieldId: Teams_FieldIds.head_of_team_e61
          }
        ]
      }
    ]
  }
];
    