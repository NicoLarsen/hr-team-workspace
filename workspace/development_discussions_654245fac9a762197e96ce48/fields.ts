
import { Development_Discussions_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: 💜  Development Discussions

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Development_Discussions_FieldIds.name_e49,
    data: [
      "654245fac9a762197e96ce3e",
      WorkflowIds.employee_directory_e3f
    ],
    defaultTo: false,
    defaultValue: "",
    description: "The employee being reviewed. Links to their employee record.",
    functionEnabled: false,
    label: "Name",
    required: false,
    type: "activitylink"
  },
  {
    _id: Development_Discussions_FieldIds.manager_appraiser_e4b,
    data: [],
    defaultTo: true,
    defaultValue: "",
    description: "The manager conducting the performance review and development discussion.",
    functionEnabled: false,
    label: "Manager / Appraiser",
    required: true,
    type: "users"
  },
  {
    _id: Development_Discussions_FieldIds.date_e4c,
    data: [],
    defaultTo: true,
    defaultValue: "",
    description: "Date when the development discussion took place.",
    functionEnabled: false,
    label: "Date",
    required: true,
    type: "date"
  },
  {
    _id: Development_Discussions_FieldIds.attach_completed_appraisal_form_e4d,
    data: [
      "Yes",
      "No",
      "Kyllä",
      "Ei"
    ],
    defaultTo: false,
    defaultValue: "",
    description: "Indicates if the completed appraisal form has been attached to this record.",
    functionEnabled: false,
    label: "Attach completed appraisal form",
    required: true,
    type: "textpredefinedoptions"
  },
  {
    _id: Development_Discussions_FieldIds.memo_247,
    data: [],
    description: "Notes from the discussion, including goals set, feedback given, and development plans.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Memo",
    required: false,
    type: "textarea"
  }
];
