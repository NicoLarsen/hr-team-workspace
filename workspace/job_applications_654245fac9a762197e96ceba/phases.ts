// Phases for workflow: 💜 Job applications
      
import { Job_applications_FieldIds, Job_applications_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: Job_applications_PhaseIds.received_applications_ec5,
    announcementFields: [
      Job_applications_FieldIds.position_applied_for_ebd,
      Job_applications_FieldIds.name_ebe,
      Job_applications_FieldIds.linkedin_profile_ec0,
      Job_applications_FieldIds.why_you_ec3
    ],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    enableAnnouncement: true,
    fields: [
      Job_applications_FieldIds.position_applied_for_ebd,
      Job_applications_FieldIds.name_ebe,
      Job_applications_FieldIds.application_sent_ebf,
      Job_applications_FieldIds.linkedin_profile_ec0,
      Job_applications_FieldIds.email_ec1,
      Job_applications_FieldIds.phone_number_ec2,
      Job_applications_FieldIds.why_you_ec3,
      Job_applications_FieldIds.my_info_can_be_saved_for_6_months_ec4
    ],
    followers: [],
    isEndpoint: false,
    name: "Received Applications",
    possibleNextPhase: [
      Job_applications_PhaseIds.interviews_ec6,
      Job_applications_PhaseIds.archive_ec7
    ],
    possibleNextPhaseSettings: {},
    primaryDateField: Job_applications_FieldIds.application_sent_ebf
  },
  {
    _id: Job_applications_PhaseIds.interviews_ec6,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Job_applications_FieldIds.position_applied_for_ebd,
      Job_applications_FieldIds.name_ebe,
      Job_applications_FieldIds.application_sent_ebf,
      Job_applications_FieldIds.linkedin_profile_ec0,
      Job_applications_FieldIds.email_ec1,
      Job_applications_FieldIds.phone_number_ec2,
      Job_applications_FieldIds.why_you_ec3,
      Job_applications_FieldIds.my_info_can_be_saved_for_6_months_ec4
    ],
    followers: [],
    isEndpoint: false,
    name: "Interviews",
    possibleNextPhase: [
      Job_applications_PhaseIds.archive_ec7
    ],
    possibleNextPhaseSettings: {}
  },
  {
    _id: Job_applications_PhaseIds.archive_ec7,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    description: "",
    fields: [
      Job_applications_FieldIds.position_applied_for_ebd,
      Job_applications_FieldIds.name_ebe,
      Job_applications_FieldIds.application_sent_ebf,
      Job_applications_FieldIds.linkedin_profile_ec0,
      Job_applications_FieldIds.email_ec1,
      Job_applications_FieldIds.phone_number_ec2,
      Job_applications_FieldIds.why_you_ec3,
      Job_applications_FieldIds.my_info_can_be_saved_for_6_months_ec4
    ],
    followers: [],
    isEndpoint: false,
    name: "Archive",
    possibleNextPhase: [
      Job_applications_PhaseIds.interviews_ec6
    ],
    possibleNextPhaseSettings: {}
  }
];