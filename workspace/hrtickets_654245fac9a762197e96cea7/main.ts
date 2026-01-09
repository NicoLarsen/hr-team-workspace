// Configuration for workflow: 💛 HR-tickets
      
import { HRtickets_FieldIds, HRtickets_PhaseIds, HailerMembers, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.hrtickets_ea7,
  allowGuests: true,
  color: "#D6D2D2",
  coverImage: "65424cfabac972283093eb9c",
  createNewLabel: "Create HR-Ticket",
  defaultView: "table",
  description: "https://form.hailer.com/7064d1fb8ff34833697f4939634b353b",
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
  enableMessenger: true,
  enableModifiedField: true,
  enablePredefinedName: false,
  enablePreselectedTeam: true,
  enableUniqueName: false,
  enableUnlinkedMode: false,
  fieldsOrder: [
    HRtickets_FieldIds.ticketid_eae,
    HRtickets_FieldIds.name_of_requester_eaf,
    HRtickets_FieldIds.date_of_request_eaa,
    HRtickets_FieldIds.topic_eab,
    HRtickets_FieldIds.urgency_eac,
    HRtickets_FieldIds.deadline_134,
    HRtickets_FieldIds.description_ea8,
    HRtickets_FieldIds.hr_responsible_ead,
    HRtickets_FieldIds.closing_notes_ea9
  ],
  members: [
    {
      id: HailerMembers.workspace,
      info: {},
      permissions: [
        "any"
      ]
    }
  ],
  name: "💛 HR-tickets",
  nameColumnText: "Ticket name",
  nameEditable: false,
  nameFieldPlaceHolderText: "",
  nameFunction: "return dep.fullName + ' ' + dep.ticket;",
  nameFunctionEnabled: true,
  nameFunctionVariables: {
    fullName: {
      data: [
        HRtickets_FieldIds.name_of_requester_eaf,
        WorkflowIds.employee_directory_e3f,
        "data",
        "name"
      ],
      type: ">"
    },
    ticket: {
      data: [
        HRtickets_FieldIds.ticketid_eae
      ],
      type: "="
    }
  },
  order: 3,
  personInChargeLabel: "",
  phasesOrder: [
    HRtickets_PhaseIds.requested_eb3,
    HRtickets_PhaseIds.processing_eb6,
    HRtickets_PhaseIds.waiting_for_reply_eb8,
    HRtickets_PhaseIds.done_eb7,
    HRtickets_PhaseIds.decisions_eb9
  ],
  preselectedTeam: {
    account: "654245fac9a762197e96ce31",
    team: WorkspaceTeams.hr_management_d56
  }
};
      