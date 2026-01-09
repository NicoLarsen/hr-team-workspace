
import { Onboarding_Checklists_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: 💜 Onboarding Checklists

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Onboarding_Checklists_FieldIds.computer_ordered_e66,
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
    description: "Status of laptop/desktop computer order for the new employee.",
    label: "Computer ordered",
    required: true,
    type: "textpredefinedoptions"
  },
  {
    _id: Onboarding_Checklists_FieldIds.email_set_up_e67,
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
    description: "Status of company email account creation and configuration.",
    label: "Email set up",
    required: true,
    type: "textpredefinedoptions"
  },
  {
    _id: Onboarding_Checklists_FieldIds.hailer_profile_set_up_e68,
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
    description: "Status of Hailer workspace user account creation and team assignment.",
    label: "Hailer profile set up",
    required: true,
    type: "textpredefinedoptions"
  },
  {
    _id: Onboarding_Checklists_FieldIds.other_it_needs_e69,
    data: [],
    description: "Additional IT equipment or software needed (monitors, phone, specialized software, etc.).",
    label: "Other IT needs",
    type: "textarea"
  },
  {
    _id: Onboarding_Checklists_FieldIds.credit_card_ordered_e6a,
    data: [
      "Yes 🟢",
      "Not needed 🟢",
      "No  🅾️",
      "Kyllä 🟢",
      "Ei tarvitse 🟢",
      "Ei 🔴"
    ],
    defaultTo: true,
    defaultValue: "No  🅾️",
    description: "Status of company credit card order if applicable for this role.",
    label: "Credit Card ordered",
    required: true,
    type: "textpredefinedoptions"
  },
  {
    _id: Onboarding_Checklists_FieldIds.responsible_for_onboarding_e6b,
    data: [
      WorkflowIds.employee_directory_e3f
    ],
    description: "HR or manager responsible for completing the onboarding checklist.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Responsible for onboarding",
    required: false,
    type: "activitylink"
  },
  {
    _id: Onboarding_Checklists_FieldIds.person_to_be_onboarded_e6c,
    data: [
      "654245fac9a762197e96ce3e",
      WorkflowIds.employee_directory_e3f
    ],
    description: "The new employee being onboarded. Links to their employee directory record.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Person to be onboarded",
    required: false,
    type: "activitylink"
  }
];
