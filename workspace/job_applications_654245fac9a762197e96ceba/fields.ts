
import { Job_applications_FieldIds, WorkflowIds } from "../enums";
      
// Fields for workflow: 💜 Job applications

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Job_applications_FieldIds.position_applied_for_ebd,
    data: [
      "654245fac9a762197e96cebb",
      WorkflowIds.vacancies_ebc
    ],
    description: "The open vacancy the applicant is applying for. Links to the Vacancies workflow.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Position applied for",
    required: false,
    type: "activitylink"
  },
  {
    _id: Job_applications_FieldIds.name_ebe,
    data: [],
    description: "Full name of the job applicant.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Name",
    required: false,
    type: "text"
  },
  {
    _id: Job_applications_FieldIds.application_sent_ebf,
    data: [],
    description: "Auto-captured date when the application was submitted.",
    function: "@function:application_sent_ebf",
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
    label: "Application sent",
    required: false,
    type: "date"
  },
  {
    _id: Job_applications_FieldIds.linkedin_profile_ec0,
    data: [],
    description: "Optional LinkedIn profile URL for the applicant. Useful for reviewing professional background.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "LinkedIn profile",
    placeholder: "paste link here",
    required: false,
    type: "text"
  },
  {
    _id: Job_applications_FieldIds.email_ec1,
    data: [],
    description: "Applicant's email address for communication regarding the application.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Email",
    required: false,
    type: "text"
  },
  {
    _id: Job_applications_FieldIds.phone_number_ec2,
    data: [],
    description: "Applicant's phone number for interview scheduling and follow-up.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Phone number",
    required: false,
    type: "text"
  },
  {
    _id: Job_applications_FieldIds.why_you_ec3,
    data: [],
    description: "Applicant's brief statement explaining why they are the right fit for the position.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Why you?",
    placeholder: "Describe why you are right for the job in a couple of sentences",
    required: false,
    type: "textarea"
  },
  {
    _id: Job_applications_FieldIds.my_info_can_be_saved_for_6_months_ec4,
    data: [
      "Yes",
      "No (only for application period)",
      "Kyllä",
      "Ei ( Ainoastaan työhakemuksen ajaksi )"
    ],
    description: "GDPR consent: Whether the applicant allows their data to be retained for 6 months for future opportunities.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "My info can be saved for 6 months",
    required: false,
    type: "textpredefinedoptions"
  }
];
