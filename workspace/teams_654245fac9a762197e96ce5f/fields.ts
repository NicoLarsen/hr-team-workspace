
import { Employee_Directory_FieldIds, Teams_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: ❤️ Teams

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Teams_FieldIds.team_info_e60,
    data: [],
    defaultTo: false,
    description: "Auto-generated list showing all team members and their positions.",
    function: "@function:team_info_e60",
    functionEnabled: true,
    functionVariables: {
      data: {
        data: [
          WorkflowIds.employee_directory_e3f,
          "data"
        ],
        type: "<"
      }
    },
    inviteToDiscussionOnChange: false,
    key: "teamInfo",
    label: "Team info",
    required: false,
    type: "textarea"
  },
  {
    _id: Teams_FieldIds.head_of_team_e61,
    data: [
      WorkflowIds.employee_directory_e3f
    ],
    description: "The team manager or leader. This person becomes the supervisor for all team members.",
    key: "headOfTeam",
    label: "Head of Team",
    type: "activitylink"
  },
  {
    _id: Teams_FieldIds.parent_team_511,
    data: [
      WorkflowIds.teams_e5f
    ],
    description: "The team this team reports to. Used to build organizational hierarchy. The Head of the Parent Team becomes the supervisor for this team's Head. Automatically set based on the Team assignment of the Head of Team.",
    function: "@function:parent_team_511",
    functionEnabled: true,
    functionVariables: {
      headOfTeamTeam: {
        data: [
          Teams_FieldIds.head_of_team_e61,
          Employee_Directory_FieldIds.team_e70
        ],
        type: ">"
      },
      thisTeamId: {
        data: [
          "_id"
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    key: "parentTeam",
    label: "Parent Team",
    required: false,
    type: "activitylink"
  },
  {
    _id: Teams_FieldIds.approval_rights_80b,
    collapsedByDefault: true,
    data: [],
    description: "Team-level approval authorities inherited by all team members.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "✅ Approval Rights",
    required: false,
    type: "subheader"
  },
  {
    _id: Teams_FieldIds.quotationstender_limit_80e,
    data: [],
    description: "The limit is per individual sales case.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Quotations/Tender Limit",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Teams_FieldIds.travel_expenses_authority_812,
    data: [],
    description: "Maximum amount that can be approved for a single business trip.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Travel Expenses Authority",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Teams_FieldIds.investment_limit_816,
    data: [],
    description: "The limit is per individual investment.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Investment Limit",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Teams_FieldIds.single_invoice_approval_limit_81a,
    data: [],
    description: "Maximum amount that can be approved on a single invoice without additional authorization.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Single Invoice Approval Limit",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Teams_FieldIds.project_purchases_81e,
    data: [
      "Authorised to create project budgets",
      "Authorised to make purchases within project budgets",
      "Not authorised to make project purchases"
    ],
    description: "Level of authority for project-related purchases and budget creation.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Project Purchases",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Teams_FieldIds.rd_authority_822,
    data: [
      "Authorised to create R&D budgets",
      "Authorised to make investments within R&D budgets",
      "Not authorised to make R&D purchases"
    ],
    description: "Level of authority for Research & Development spending and budget creation.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "R&D Authority",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Teams_FieldIds.hiring_authority_826,
    data: [
      "Can approve new hires",
      "Can approve new hires with superior permission"
    ],
    description: "Level of authority to approve new employee hiring decisions.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Hiring Authority",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Teams_FieldIds.org_level_6f6,
    data: [],
    description: "Organizational hierarchy level. Level 1 = top (CEO/Board), Level 2 = reports to top, etc. Auto-calculated from parent team chain.",
    function: "@function:org_level_6f6",
    functionEnabled: true,
    functionVariables: {
      hasParent: {
        data: [
          Teams_FieldIds.parent_team_511
        ],
        type: "="
      },
      parentLevel: {
        data: [
          Teams_FieldIds.parent_team_511,
          Teams_FieldIds.org_level_6f6
        ],
        type: ">"
      },
      parentParent: {
        data: [
          Teams_FieldIds.parent_team_511,
          Teams_FieldIds.parent_team_511
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    label: "Org Level",
    required: false,
    type: "numeric"
  }
];
