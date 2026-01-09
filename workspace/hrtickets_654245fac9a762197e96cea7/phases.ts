// Phases for workflow: 💛 HR-tickets
      
import { HRtickets_FieldIds, HRtickets_PhaseIds } from "../enums";
      
export const phases: HailerPhaseUpdatePayload[] = [
  {
    _id: HRtickets_PhaseIds.requested_eb3,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    color: "#E34F3A",
    description: "",
    fields: [
      HRtickets_FieldIds.description_ea8,
      HRtickets_FieldIds.date_of_request_eaa,
      HRtickets_FieldIds.topic_eab,
      HRtickets_FieldIds.urgency_eac,
      HRtickets_FieldIds.ticketid_eae,
      HRtickets_FieldIds.name_of_requester_eaf,
      HRtickets_FieldIds.deadline_134
    ],
    followers: [
      "654245fac9a762197e96ceb4",
      "654245fac9a762197e96ceb5"
    ],
    isEndpoint: false,
    name: "Requested",
    possibleNextPhase: [
      HRtickets_PhaseIds.processing_eb6,
      HRtickets_PhaseIds.done_eb7,
      HRtickets_PhaseIds.waiting_for_reply_eb8
    ],
    possibleNextPhaseSettings: {},
    primaryDateField: HRtickets_FieldIds.deadline_134,
    webhookUrl: "https://hooks.zapier.com/hooks/catch/9958586/b4s0wo8/",
    webhooksEnabled: false
  },
  {
    _id: HRtickets_PhaseIds.processing_eb6,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    color: "#E0952F",
    description: "",
    fields: [
      HRtickets_FieldIds.description_ea8,
      HRtickets_FieldIds.date_of_request_eaa,
      HRtickets_FieldIds.topic_eab,
      HRtickets_FieldIds.urgency_eac,
      HRtickets_FieldIds.hr_responsible_ead,
      HRtickets_FieldIds.ticketid_eae,
      HRtickets_FieldIds.name_of_requester_eaf,
      HRtickets_FieldIds.deadline_134
    ],
    followers: [],
    isEndpoint: false,
    name: "Processing",
    possibleNextPhase: [
      HRtickets_PhaseIds.done_eb7,
      HRtickets_PhaseIds.waiting_for_reply_eb8,
      HRtickets_PhaseIds.decisions_eb9
    ],
    possibleNextPhaseSettings: {}
  },
  {
    _id: HRtickets_PhaseIds.done_eb7,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    color: "#12861B",
    description: "",
    fields: [
      HRtickets_FieldIds.description_ea8,
      HRtickets_FieldIds.closing_notes_ea9,
      HRtickets_FieldIds.date_of_request_eaa,
      HRtickets_FieldIds.topic_eab,
      HRtickets_FieldIds.urgency_eac,
      HRtickets_FieldIds.hr_responsible_ead,
      HRtickets_FieldIds.ticketid_eae,
      HRtickets_FieldIds.name_of_requester_eaf,
      HRtickets_FieldIds.deadline_134
    ],
    followers: [],
    isEndpoint: false,
    name: "Done",
    possibleNextPhase: [
      HRtickets_PhaseIds.processing_eb6,
      HRtickets_PhaseIds.waiting_for_reply_eb8,
      HRtickets_PhaseIds.decisions_eb9
    ],
    possibleNextPhaseSettings: {},
    webhookUrl: "https://hooks.zapier.com/hooks/catch/9958586/bb7s5sa/",
    webhooksEnabled: true
  },
  {
    _id: HRtickets_PhaseIds.waiting_for_reply_eb8,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    color: "#92CB15",
    description: "",
    fields: [
      HRtickets_FieldIds.description_ea8,
      HRtickets_FieldIds.date_of_request_eaa,
      HRtickets_FieldIds.topic_eab,
      HRtickets_FieldIds.urgency_eac,
      HRtickets_FieldIds.hr_responsible_ead,
      HRtickets_FieldIds.ticketid_eae,
      HRtickets_FieldIds.name_of_requester_eaf,
      HRtickets_FieldIds.deadline_134
    ],
    followers: [],
    isEndpoint: false,
    name: "Waiting for reply",
    possibleNextPhase: [
      HRtickets_PhaseIds.processing_eb6,
      HRtickets_PhaseIds.done_eb7,
      HRtickets_PhaseIds.decisions_eb9
    ],
    possibleNextPhaseSettings: {},
    webhookUrl: "https://hooks.zapier.com/hooks/catch/9958586/b3wp63p/",
    webhooksEnabled: false
  },
  {
    _id: HRtickets_PhaseIds.decisions_eb9,
    announcementFields: [],
    announcementFieldsOrder: [],
    announcementRecipients: [],
    color: "#162F9F",
    description: "",
    fields: [
      HRtickets_FieldIds.description_ea8,
      HRtickets_FieldIds.closing_notes_ea9,
      HRtickets_FieldIds.date_of_request_eaa,
      HRtickets_FieldIds.topic_eab,
      HRtickets_FieldIds.urgency_eac,
      HRtickets_FieldIds.hr_responsible_ead,
      HRtickets_FieldIds.ticketid_eae,
      HRtickets_FieldIds.name_of_requester_eaf,
      HRtickets_FieldIds.deadline_134
    ],
    followers: [],
    isEndpoint: false,
    name: "Decisions",
    possibleNextPhase: [
      HRtickets_PhaseIds.done_eb7
    ],
    possibleNextPhaseSettings: {}
  }
];