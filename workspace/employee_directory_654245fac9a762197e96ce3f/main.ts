// Configuration for workflow: ❤️ Employee Directory
      
import { Employee_Directory_FieldIds, Employee_Directory_PhaseIds, HailerMembers, WorkflowIds, WorkspaceTeams } from "../enums";
      
export const workflowConfig: HailerWorkflowUpdatePayload = {
  _id: WorkflowIds.employee_directory_e3f,
  coverImage: "65424ce06261241ecca95920",
  createNewLabel: "Add new employee",
  defaultView: "table",
  description: "Voit lisätä ohjeita tänne asetuksista",
  discussionPermissions: [
    "discussion.message.add",
    "discussion.message.add.attachment",
    "discussion.read.history",
    "discussion.message.remove.own",
    "discussion.leave"
  ],
  enableAddedField: true,
  enableAttachments: false,
  enableLinkedAnnouncements: true,
  enableMapLocation: false,
  enableMessenger: true,
  enableModifiedField: true,
  enablePredefinedName: false,
  enablePreselectedTeam: true,
  enableUniqueName: false,
  enableUnlinkedMode: false,
  fieldsOrder: [
    Employee_Directory_FieldIds.position_e6f,
    Employee_Directory_FieldIds.basic_information_e8b,
    Employee_Directory_FieldIds.firstname_e72,
    Employee_Directory_FieldIds.lastname_e73,
    Employee_Directory_FieldIds.social_security_number_e76,
    Employee_Directory_FieldIds.date_of_birth_e77,
    Employee_Directory_FieldIds.nationality_698,
    Employee_Directory_FieldIds.status_e87,
    Employee_Directory_FieldIds.supervisor_and_subordinates_e8f,
    Employee_Directory_FieldIds.team_e70,
    Employee_Directory_FieldIds.org_level_81a,
    Employee_Directory_FieldIds.supervisor_e71,
    Employee_Directory_FieldIds.employee_directory_e90,
    Employee_Directory_FieldIds.contact_information_e8e,
    Employee_Directory_FieldIds.home_address_e81,
    Employee_Directory_FieldIds.work_phone_number_e85,
    Employee_Directory_FieldIds.personal_phone_number_e84,
    Employee_Directory_FieldIds.private_email_e82,
    Employee_Directory_FieldIds.work_email_e83,
    Employee_Directory_FieldIds.emergency_contact_ice_e86,
    Employee_Directory_FieldIds.admin_e8c,
    Employee_Directory_FieldIds.salary_type_e80,
    Employee_Directory_FieldIds.account_number_e7b,
    Employee_Directory_FieldIds.working_hours_e7f,
    Employee_Directory_FieldIds.employment_type_e78,
    Employee_Directory_FieldIds.tax_card_saved_in_files_e7c,
    Employee_Directory_FieldIds.milestones_e8d,
    Employee_Directory_FieldIds.starting_date_e79,
    Employee_Directory_FieldIds.probation_e7d,
    Employee_Directory_FieldIds.probation_end_date_e7e,
    Employee_Directory_FieldIds.retired_date_e8a,
    Employee_Directory_FieldIds.exit_checklist_e75,
    Employee_Directory_FieldIds.holiday_pay_6dc,
    Employee_Directory_FieldIds.salary_and_benefits_fe7,
    Employee_Directory_FieldIds.salary_e7a,
    Employee_Directory_FieldIds.holidayadjusted_salary_6df,
    Employee_Directory_FieldIds.pension_tyel_6e3,
    Employee_Directory_FieldIds.employer_health_insurance_6e7,
    Employee_Directory_FieldIds.unemployment_insurance_6eb,
    Employee_Directory_FieldIds.accident_insurance_6ef,
    Employee_Directory_FieldIds.group_life_insurance_6f3,
    Employee_Directory_FieldIds.total_side_costs_6f7,
    Employee_Directory_FieldIds.consultancy_fee_0c5,
    Employee_Directory_FieldIds.benefits_e88,
    Employee_Directory_FieldIds.value_of_benefits_e89,
    Employee_Directory_FieldIds.total_cost_6fb
  ],
  initPhaseDescription: "Please welcome new team member",
  members: [
    {
      id: HailerMembers.workspace,
      info: {},
      permissions: [
        "any"
      ]
    }
  ],
  name: "❤️ Employee Directory",
  nameColumnText: "Full Name",
  nameEditable: false,
  nameFieldPlaceHolderText: "Firstname Lastname",
  nameFunction: "const first = dep.firstname || '';\r\nconst last = dep.lastname || '';\r\nlet result = (!first && !last) ? 'Autonaming Enabled' : first + ' ' + last;\r\n\r\nreturn result || null;",
  nameFunctionEnabled: true,
  nameFunctionVariables: {
    firstname: {
      data: [
        Employee_Directory_FieldIds.firstname_e72
      ],
      type: "="
    },
    lastname: {
      data: [
        Employee_Directory_FieldIds.lastname_e73
      ],
      type: "="
    }
  },
  order: 0,
  personInChargeLabel: "",
  phasesOrder: [
    Employee_Directory_PhaseIds.active_employees_e57,
    Employee_Directory_PhaseIds.active_contractors_e95,
    Employee_Directory_PhaseIds.archive_e96
  ],
  preselectedTeam: {
    account: "654245fac9a762197e96ce31",
    team: WorkspaceTeams.hr_management_d56
  }
};
      