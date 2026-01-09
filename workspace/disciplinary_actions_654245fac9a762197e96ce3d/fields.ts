
import { Disciplinary_Actions_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: 💜  Disciplinary Actions

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Disciplinary_Actions_FieldIds.name_e40,
    data: [
      "654245fac9a762197e96ce3e",
      WorkflowIds.employee_directory_e3f
    ],
    defaultTo: false,
    defaultValue: "",
    description: "The employee receiving the disciplinary action. Links to their employee record.",
    functionEnabled: false,
    label: "Name",
    required: false,
    type: "activitylink"
  },
  {
    _id: Disciplinary_Actions_FieldIds.manager_e41,
    data: [],
    defaultTo: true,
    defaultValue: "",
    description: "Manager who conducted the disciplinary meeting and issued the action.",
    functionEnabled: false,
    label: "Manager ",
    required: true,
    type: "users"
  },
  {
    _id: Disciplinary_Actions_FieldIds.verbal_written_warning_e42,
    data: [
      "Verbal",
      "Written",
      "Suullinen",
      "Kirjallinen"
    ],
    defaultTo: false,
    defaultValue: "",
    description: "Type of warning issued. Written warnings require documented acknowledgment.",
    functionEnabled: false,
    label: "Verbal / Written warning",
    required: true,
    type: "textpredefinedoptions"
  },
  {
    _id: Disciplinary_Actions_FieldIds.date_e43,
    data: [],
    defaultTo: true,
    defaultValue: "",
    description: "Date when the disciplinary meeting was held.",
    functionEnabled: false,
    label: "Date",
    required: true,
    type: "date"
  },
  {
    _id: Disciplinary_Actions_FieldIds.subject_e44,
    data: [],
    defaultTo: false,
    defaultValue: "",
    description: "Detailed record of the issue, discussion, and agreed corrective actions.",
    functionEnabled: false,
    label: "Subject",
    placeholder: "Include detail of the disciplinary matter including what was discussed and agreed with the employee. If the matter is written warning please attach the letter which should also be signed as acknowledged by the employee",
    required: false,
    type: "textarea"
  },
  {
    _id: Disciplinary_Actions_FieldIds.attachments_e45,
    data: [
      "Yes",
      "No",
      "Kyllä",
      "Ei"
    ],
    defaultTo: false,
    defaultValue: "",
    description: "Indicates if supporting documents (warning letter, evidence) are attached to this record.",
    functionEnabled: false,
    label: "Attachments",
    required: true,
    type: "textpredefinedoptions"
  },
  {
    _id: Disciplinary_Actions_FieldIds.additional_notes_e46,
    data: [],
    defaultTo: false,
    defaultValue: "",
    description: "Any additional context, follow-up actions, or HR notes related to this case.",
    functionEnabled: false,
    label: "Additional notes",
    required: false,
    type: "textarea"
  }
];
