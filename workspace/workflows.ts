// Workflows registry - single source of truth for all workflows
// When creating a new workflow, only 'name' and 'enabledUnlinkedMode' can be set
// 'folder' property indicates the folder where the workflow configuration is stored and it's auto-generated on 'hailer-sdk ws-config pull'

export const workflows: WorkflowEntry[] = [
  {
    _id: "654245fac9a762197e96ce3d",
    name: "💜  Disciplinary Actions",
    enableUnlinkedMode: true,
    folder: "disciplinary_actions_654245fac9a762197e96ce3d",
  },
  {
    _id: "654245fac9a762197e96ce48",
    name: "💜  Development Discussions",
    enableUnlinkedMode: true,
    folder: "development_discussions_654245fac9a762197e96ce48",
  },
  {
    _id: "654245fac9a762197e96ce4f",
    name: "💜 Change management",
    enableUnlinkedMode: true,
    folder: "change_management_654245fac9a762197e96ce4f",
  },
  {
    _id: "654245fac9a762197e96ce52",
    name: "❤️  Positions",
    enableUnlinkedMode: true,
    folder: "positions_654245fac9a762197e96ce52",
  },
  {
    _id: "654245fac9a762197e96ce5f",
    name: "❤️ Teams",
    enableUnlinkedMode: true,
    folder: "teams_654245fac9a762197e96ce5f",
  },
  {
    _id: "654245fac9a762197e96ce65",
    name: "💜 Onboarding Checklists",
    enableUnlinkedMode: true,
    folder: "onboarding_checklists_654245fac9a762197e96ce65",
  },
  {
    _id: "654245fac9a762197e96ce3f",
    name: "❤️ Employee Directory",
    enableUnlinkedMode: false,
    folder: "employee_directory_654245fac9a762197e96ce3f",
  },
  {
    _id: "654245fac9a762197e96ce74",
    name: "💜 Exit Checklists",
    enableUnlinkedMode: true,
    folder: "exit_checklists_654245fac9a762197e96ce74",
  },
  {
    _id: "654245fac9a762197e96cea7",
    name: "💛 HR-tickets",
    enableUnlinkedMode: false,
    folder: "hrtickets_654245fac9a762197e96cea7",
  },
  {
    _id: "654245fac9a762197e96ceba",
    name: "💜 Job applications",
    enableUnlinkedMode: false,
    folder: "job_applications_654245fac9a762197e96ceba",
  },
  {
    _id: "654245fac9a762197e96cebc",
    name: "💜 Vacancies",
    enableUnlinkedMode: false,
    folder: "vacancies_654245fac9a762197e96cebc",
  }
];
