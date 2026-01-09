// Configuration for workflow: 💜 Job applications
      
import { HailerMembers, Job_applications_FieldIds, Job_applications_PhaseIds, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.job_applications_eba,
  allowGuests: false,
  coverImage: "65424d17bac972283093ec59",
  createNewLabel: "",
  defaultView: "table",
  discussionPermissions: [
    "discussion.message.add",
    "discussion.message.add.attachment",
    "discussion.read.history",
    "discussion.message.remove.own",
    "discussion.leave"
  ],
  enableAddedField: true,
  enableAttachments: true,
  enableGuestEditing: false,
  enableLinkedAnnouncements: false,
  enableMapLocation: false,
  enableMessenger: false,
  enableModifiedField: true,
  enablePredefinedName: false,
  enablePreselectedTeam: true,
  enableUniqueName: false,
  enableUnlinkedMode: false,
  fieldsOrder: [
    Job_applications_FieldIds.position_applied_for_ebd,
    Job_applications_FieldIds.name_ebe,
    Job_applications_FieldIds.application_sent_ebf,
    Job_applications_FieldIds.linkedin_profile_ec0,
    Job_applications_FieldIds.email_ec1,
    Job_applications_FieldIds.phone_number_ec2,
    Job_applications_FieldIds.why_you_ec3,
    Job_applications_FieldIds.my_info_can_be_saved_for_6_months_ec4
  ],
  initPhaseDescription: "New Job application received",
  members: [
    {
      id: HailerMembers.workspace,
      info: {},
      permissions: [
        "any"
      ]
    }
  ],
  name: "💜 Job applications",
  nameEditable: false,
  nameFieldPlaceHolderText: "Give a title",
  nameFunction: "const name = dep.name || 'no name';\nconst date = new Date(dep.applicationSent)\nconst day = date.getDate();\nconst month = date.getMonth() +1;\nconst year = date.getFullYear();\n\nreturn name + ' - ' + day + '/' + month + '/' + year || 0;",
  nameFunctionEnabled: true,
  nameFunctionVariables: {
    applicationSent: {
      data: [
        Job_applications_FieldIds.application_sent_ebf
      ],
      type: "="
    },
    name: {
      data: [
        Job_applications_FieldIds.name_ebe
      ],
      type: "="
    }
  },
  order: 1,
  personInChargeLabel: "",
  phasesOrder: [
    Job_applications_PhaseIds.received_applications_ec5,
    Job_applications_PhaseIds.interviews_ec6,
    Job_applications_PhaseIds.archive_ec7
  ],
  preselectedTeam: {
    account: "654245fac9a762197e96ce31",
    team: WorkspaceTeams.hr_management_d56
  }
};
      