
import { HRtickets_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: 💛 HR-tickets

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: HRtickets_FieldIds.description_ea8,
    data: [],
    description: "Detailed description of the HR request or issue. Include all relevant information for HR to process.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Description",
    required: true,
    type: "textarea"
  },
  {
    _id: HRtickets_FieldIds.closing_notes_ea9,
    data: [],
    description: "Measures taken, notes etc",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Closing notes",
    required: false,
    type: "textarea"
  },
  {
    _id: HRtickets_FieldIds.date_of_request_eaa,
    data: [],
    description: "Automatically set to the date when the ticket was created.",
    function: "@function:date_of_request_eaa",
    functionEnabled: true,
    functionVariables: {
      data: {
        data: [
          "data"
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    label: "Date of request",
    required: false,
    type: "date"
  },
  {
    _id: HRtickets_FieldIds.topic_eab,
    data: [
      "Salary",
      "induction",
      "Exit",
      "Pension",
      "Other",
      "Contract",
      "Palkka",
      "Induktio",
      "Työsuhteen lopetus",
      "Eläke",
      "Sopimus",
      "Muut asiat"
    ],
    defaultValue: "HR",
    description: "Category of the HR request. Helps route tickets to the appropriate HR specialist.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Topic",
    required: true,
    type: "textpredefinedoptions"
  },
  {
    _id: HRtickets_FieldIds.urgency_eac,
    data: [
      "Low (7 days)",
      "Medium (3 days)",
      "High (1 day)",
      "Vähäinen ( 7 vrk )",
      "Kohtalainen ( 3 vrk )",
      "Korkea ( 1 vrk )"
    ],
    description: "Workdays (mon-fri)",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Urgency",
    required: true,
    type: "textpredefinedoptions"
  },
  {
    _id: HRtickets_FieldIds.hr_responsible_ead,
    data: [],
    defaultTo: true,
    description: "HR team member assigned to handle this ticket. Will be notified of updates.",
    functionEnabled: false,
    inviteToDiscussionOnChange: true,
    label: "HR responsible",
    required: false,
    type: "users"
  },
  {
    _id: HRtickets_FieldIds.ticketid_eae,
    data: [],
    description: "Unique ticket identifier generated automatically. Use for reference in communications.",
    function: "@function:ticketid_eae",
    functionEnabled: true,
    functionVariables: {
      data: {
        data: [
          "data"
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    label: "Ticket-ID",
    required: false,
    type: "text"
  },
  {
    _id: HRtickets_FieldIds.name_of_requester_eaf,
    data: [
      WorkflowIds.employee_directory_e3f
    ],
    description: "The employee who submitted this HR request. Links to their employee record.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Name of requester",
    required: true,
    type: "activitylink"
  },
  {
    _id: HRtickets_FieldIds.deadline_134,
    data: [],
    description: "Target date for resolving this ticket. Set based on urgency level.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Deadline",
    required: false,
    type: "date"
  }
];
