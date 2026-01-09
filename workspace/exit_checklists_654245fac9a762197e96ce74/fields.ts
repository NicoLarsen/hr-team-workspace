
import { Exit_Checklists_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: 💜 Exit Checklists

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Exit_Checklists_FieldIds.computer_returned_e9d,
    data: [
      "Yes 🟢",
      "Not needed 🟢",
      "No 🅾️",
      "Kyllä 🟢",
      "Ei tarvitse 🟢",
      "Ei 🔴"
    ],
    defaultTo: true,
    defaultValue: "No 🅾️",
    description: "Status of laptop/desktop computer return from the departing employee.",
    label: "Computer returned",
    required: true,
    type: "textpredefinedoptions"
  },
  {
    _id: Exit_Checklists_FieldIds.email_turned_off_e9e,
    data: [
      "Yes 🟢",
      "Not Needed 🟢",
      "No  🅾️",
      "Kyllä 🟢",
      "Ei tarvitse 🟢",
      "Ei 🔴"
    ],
    defaultTo: true,
    defaultValue: "No  🅾️",
    description: "Status of company email account deactivation and access revocation.",
    label: "Email turned off",
    required: true,
    type: "textpredefinedoptions"
  },
  {
    _id: Exit_Checklists_FieldIds.hailer_profile_removed_e9f,
    data: [
      "Yes 🟢",
      "Hailer profile will remain 🟢",
      "Role changed to guest 🟢",
      "No  🅾️",
      "Kyllä 🟢",
      "Hailer profiili jää voimaan 🟢",
      "Rooli vaihtuu vieraskäyttäjäksi 🟢",
      "Ei 🔴"
    ],
    defaultTo: true,
    defaultValue: "No  🅾️",
    description: "Status of Hailer workspace account removal or role change for the departing employee.",
    label: "Hailer profile removed",
    required: true,
    type: "textpredefinedoptions"
  },
  {
    _id: Exit_Checklists_FieldIds.other_company_property_returned_ea0,
    data: [],
    description: "List of other company property returned (keys, access cards, phones, tools, etc.).",
    label: "Other company property returned",
    type: "textarea"
  },
  {
    _id: Exit_Checklists_FieldIds.credit_card_canceled_ea1,
    data: [
      "Yes 🟢",
      "No  🅾️",
      "Kyllä 🟢",
      "Ei 🔴"
    ],
    defaultTo: true,
    defaultValue: "No  🅾️",
    description: "Status of company credit card cancellation for the departing employee.",
    label: "Credit Card Canceled",
    required: true,
    type: "textpredefinedoptions"
  },
  {
    _id: Exit_Checklists_FieldIds.unresolved_ea2,
    data: [],
    description: "Auto-calculated count of incomplete exit checklist items. Shows how many tasks still need attention.",
    function: "@function:unresolved__ea2",
    functionEnabled: true,
    functionVariables: {
      "Alt contact in auto reply": {
        data: [
          Exit_Checklists_FieldIds.alt_contact_in_auto_reply_ea3
        ],
        type: "="
      },
      "Computer returned": {
        data: [
          Exit_Checklists_FieldIds.computer_returned_e9d
        ],
        type: "="
      },
      "Credit Card Canceled": {
        data: [
          Exit_Checklists_FieldIds.credit_card_canceled_ea1
        ],
        type: "="
      },
      "Email turned off": {
        data: [
          Exit_Checklists_FieldIds.email_turned_off_e9e
        ],
        type: "="
      },
      "Hailer profile removed": {
        data: [
          Exit_Checklists_FieldIds.hailer_profile_removed_e9f
        ],
        type: "="
      },
      "Other company property returned": {
        data: [
          Exit_Checklists_FieldIds.other_company_property_returned_ea0
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    label: "Unresolved 🅾️",
    required: false,
    type: "numeric"
  },
  {
    _id: Exit_Checklists_FieldIds.alt_contact_in_auto_reply_ea3,
    data: [],
    description: "Alternative contact person to be set in the departing employee's email auto-reply message.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Alt contact in auto reply",
    required: false,
    type: "text"
  },
  {
    _id: Exit_Checklists_FieldIds.responsible_for_exit_ea4,
    data: [
      WorkflowIds.employee_directory_e3f
    ],
    description: "HR or manager responsible for completing the exit checklist and offboarding process.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Responsible for exit",
    required: false,
    type: "activitylink"
  },
  {
    _id: Exit_Checklists_FieldIds.person_leaving_ea5,
    data: [
      WorkflowIds.employee_directory_e3f
    ],
    description: "The employee who is leaving the company. Links to their employee directory record.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Person leaving",
    required: false,
    type: "activitylink"
  }
];
