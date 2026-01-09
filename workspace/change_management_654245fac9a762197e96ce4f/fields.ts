
import { Change_management_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: 💜 Change management

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Change_management_FieldIds.person_e50,
    data: [
      WorkflowIds.employee_directory_e3f
    ],
    defaultTo: false,
    defaultValue: "",
    description: "The employee whose position is changing.",
    functionEnabled: false,
    key: "person",
    label: "Person",
    required: true,
    type: "activitylink"
  },
  {
    _id: Change_management_FieldIds.effective_date_e51,
    data: [],
    defaultTo: false,
    defaultValue: "",
    description: "Date when the position change takes effect. Update employee record on this date.",
    functionEnabled: false,
    key: "effectiveDate",
    label: "Effective date",
    required: true,
    type: "date"
  },
  {
    _id: Change_management_FieldIds.previous_position_e53,
    data: [
      WorkflowIds.positions_e52
    ],
    defaultTo: false,
    description: "The employee's position before the change.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "previousPosition",
    label: "Previous position",
    required: true,
    type: "activitylink"
  },
  {
    _id: Change_management_FieldIds.new_position_e54,
    data: [
      WorkflowIds.positions_e52
    ],
    defaultTo: false,
    description: "The employee's new position after the change. Remember to update the employee record.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "newPosition",
    label: "New position",
    required: true,
    type: "activitylink"
  }
];
