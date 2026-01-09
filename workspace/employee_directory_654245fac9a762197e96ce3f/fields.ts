
import { Employee_Directory_FieldIds, Employee_Directory_PhaseIds, Positions_FieldIds, Teams_FieldIds, WorkflowIds, WorkspaceTeams } from "../enums";
      
// Fields for workflow: ❤️ Employee Directory

// Note: Field functions are extracted to ./functions/ directory
      
// They are referenced here as "@function:functionName" strings
      
export const fields: HailerFieldGeneric[] = [
  {
    _id: Employee_Directory_FieldIds.position_e6f,
    data: [
      WorkflowIds.positions_e52
    ],
    description: "The employee's current job position within the organization. Links to the Positions workflow for role details and approval rights.",
    key: "position",
    label: "Position",
    modifier: {
      activityFieldFilters: [
        {
          sourceFieldId: Employee_Directory_FieldIds.team_e70,
          targetFieldId: Positions_FieldIds.team_555,
          targetWorkflowId: WorkflowIds.positions_e52
        }
      ]
    },
    type: "activitylink"
  },
  {
    _id: Employee_Directory_FieldIds.team_e70,
    data: [
      WorkflowIds.teams_e5f
    ],
    description: "The team or department this employee belongs to. Used to determine reporting structure and supervisor assignment.",
    key: "team",
    label: "Team",
    type: "activitylink"
  },
  {
    _id: Employee_Directory_FieldIds.supervisor_e71,
    data: [
      WorkflowIds.employee_directory_e3f
    ],
    description: "The employee's direct supervisor. Automatically calculated from their Team's Head of Team.",
    function: "@function:supervisor_e71",
    functionEnabled: true,
    functionVariables: {
      headOfTeam: {
        data: [
          Employee_Directory_FieldIds.team_e70,
          Teams_FieldIds.head_of_team_e61
        ],
        type: ">"
      }
    },
    key: "supervisor",
    label: "Supervisor",
    type: "activitylink"
  },
  {
    _id: Employee_Directory_FieldIds.firstname_e72,
    data: [],
    description: "Employee's legal first name as it appears on official documents.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "firstname",
    label: "Firstname",
    required: true,
    type: "text"
  },
  {
    _id: Employee_Directory_FieldIds.lastname_e73,
    data: [],
    description: "Employee's legal last name (surname) as it appears on official documents.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "lastname",
    label: "Lastname",
    required: true,
    type: "text"
  },
  {
    _id: Employee_Directory_FieldIds.exit_checklist_e75,
    data: [
      WorkflowIds.exit_checklists_e74
    ],
    description: "Create a new exit checklist before moving to archive",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Exit Checklist",
    type: "activitylink"
  },
  {
    _id: Employee_Directory_FieldIds.social_security_number_e76,
    data: [],
    description: "Employee's national identification number. Confidential - used for payroll and tax reporting purposes.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Social security number",
    required: false,
    type: "text"
  },
  {
    _id: Employee_Directory_FieldIds.date_of_birth_e77,
    data: [],
    description: "Employee's date of birth. Used for age verification and retirement planning.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "dateOfBirth",
    label: "Date of Birth",
    required: false,
    type: "date"
  },
  {
    _id: Employee_Directory_FieldIds.employment_type_e78,
    data: [
      "Continuos",
      "Fixed term",
      "Hourly based",
      "Contractor",
      "Management agreement",
      "Managing director agreement",
      "Trainee",
      "Jatkuva",
      "Määräaikainen",
      "Tuntiperusteinen",
      "Urakka",
      "Hoitosopimus",
      "Toimitusjohtajasopimus",
      "Harjoittelija"
    ],
    description: "The type of employment contract. Determines benefits eligibility and termination notice periods.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Employment type",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Employee_Directory_FieldIds.starting_date_e79,
    data: [],
    defaultTo: true,
    description: "The employee's first day of work. Used to calculate probation end date and tenure.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Starting date",
    required: false,
    type: "date"
  },
  {
    _id: Employee_Directory_FieldIds.salary_e7a,
    data: [],
    description: "Monthly gross salary before taxes. Confidential information - access restricted to HR and management.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "salary",
    label: "Salary",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Employee_Directory_FieldIds.account_number_e7b,
    data: [],
    description: "Bank account number for salary payments. Enter in IBAN format.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Account number",
    placeholder: "IBAN (FI00 0000 0000 0000)",
    required: false,
    type: "text"
  },
  {
    _id: Employee_Directory_FieldIds.tax_card_saved_in_files_e7c,
    data: [
      "Yes",
      "No",
      "Kyllä",
      "Ei"
    ],
    description: "Indicates whether the employee's tax card has been uploaded to the attachments. Required for correct tax withholding.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Tax card saved in files",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Employee_Directory_FieldIds.probation_e7d,
    data: [],
    description: "Length of the probationary period in months. Standard is typically 4-6 months depending on contract type.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Probation",
    required: false,
    type: "numericunit",
    unit: "Months"
  },
  {
    _id: Employee_Directory_FieldIds.probation_end_date_e7e,
    data: [],
    description: "Automatically calculated end date of probation. HR is notified 7 days before this date to make a continuation decision.",
    function: "@function:probation_end_date_e7e",
    functionEnabled: true,
    functionVariables: {
      probation: {
        data: [
          Employee_Directory_FieldIds.probation_e7d
        ],
        type: "="
      },
      start: {
        data: [
          Employee_Directory_FieldIds.starting_date_e79
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    label: "Probation end date",
    reminderEnabled: true,
    reminderSettings: {
      activityOwner: false,
      activityOwnerTeam: false,
      activityParticipants: false,
      fieldOffset: {
        beforeOrAfter: "before",
        days: 7,
        milliseconds: 0,
        months: 0
      },
      fields: [],
      phases: [
        Employee_Directory_PhaseIds.active_employees_e57,
        Employee_Directory_PhaseIds.active_contractors_e95,
        Employee_Directory_PhaseIds.archive_e96
      ],
      reminderText: "((field-name)) aktiviteetissä ((activity-name))lähestyy määräaikaa (((relative-time)))",
      teams: [
        WorkspaceTeams.hr_management_d56
      ],
      users: []
    },
    required: false,
    type: "date"
  },
  {
    _id: Employee_Directory_FieldIds.working_hours_e7f,
    data: [
      "Full time",
      "Part time",
      "Täysiaikainen",
      "Osa-aikainen"
    ],
    description: "Whether the employee works full-time or part-time. Affects benefits eligibility and leave calculations.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Working hours",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Employee_Directory_FieldIds.salary_type_e80,
    data: [
      "Monthly",
      "Hourly",
      "Success fee",
      "Combination",
      "Kuukausi",
      "Tunti",
      "Palkkio",
      "Kombinaatio"
    ],
    description: "How the employee is compensated. Determines payroll processing and reporting requirements.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Salary type",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Employee_Directory_FieldIds.home_address_e81,
    data: [],
    description: "Employee's current residential address. Include street, postal code, and city.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Home address",
    required: false,
    type: "textarea"
  },
  {
    _id: Employee_Directory_FieldIds.private_email_e82,
    data: [],
    description: "Personal email address for communication outside of work systems. Used for exit communication.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Private e-mail",
    required: false,
    type: "text"
  },
  {
    _id: Employee_Directory_FieldIds.work_email_e83,
    data: [],
    description: "Company email address. Primary contact for work-related communications.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Work e-mail",
    required: false,
    type: "text"
  },
  {
    _id: Employee_Directory_FieldIds.personal_phone_number_e84,
    data: [],
    description: "Employee's personal mobile phone number. Used for urgent contact when work phone is unavailable.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Personal phone number",
    required: false,
    type: "text"
  },
  {
    _id: Employee_Directory_FieldIds.work_phone_number_e85,
    data: [],
    description: "Company-provided phone number. Listed in company directory for internal and external contacts.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Work phone number",
    required: false,
    type: "text"
  },
  {
    _id: Employee_Directory_FieldIds.emergency_contact_ice_e86,
    data: [],
    description: "In Case of Emergency contact. Include name, relationship, and phone number of person to contact in emergencies.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Emergency contact (ICE)",
    required: false,
    type: "text"
  },
  {
    _id: Employee_Directory_FieldIds.status_e87,
    data: [
      "Active",
      "Long sick leave",
      "Parental leave",
      "Study leave"
    ],
    defaultTo: true,
    defaultValue: "Active",
    description: "Current employment status. Update when employee goes on extended leave or returns to active duty.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "status",
    label: "Status",
    required: false,
    type: "textpredefinedoptions"
  },
  {
    _id: Employee_Directory_FieldIds.benefits_e88,
    data: [],
    description: "List of employee benefits such as company car, phone, meal vouchers, gym membership, etc.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Benefits",
    required: false,
    type: "textarea"
  },
  {
    _id: Employee_Directory_FieldIds.value_of_benefits_e89,
    data: [],
    description: "Total taxable monthly value of fringe benefits for payroll reporting purposes.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Value of benefits",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Employee_Directory_FieldIds.retired_date_e8a,
    data: [],
    description: "Expected or actual retirement date. Used for succession planning and workforce forecasting.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Retired date",
    required: false,
    type: "date"
  },
  {
    _id: Employee_Directory_FieldIds.basic_information_e8b,
    collapsedByDefault: true,
    data: [],
    description: "Personal details including name, date of birth, and identification information.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Basic Information",
    required: false,
    type: "subheader"
  },
  {
    _id: Employee_Directory_FieldIds.admin_e8c,
    collapsedByDefault: true,
    data: [],
    description: "Salary, bank details, tax information, and employment contract details.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "📂 Admin",
    required: false,
    type: "subheader"
  },
  {
    _id: Employee_Directory_FieldIds.milestones_e8d,
    collapsedByDefault: true,
    data: [],
    description: "Important dates including start date, probation period, and retirement planning.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "🗓 Milestones",
    required: false,
    type: "subheader"
  },
  {
    _id: Employee_Directory_FieldIds.contact_information_e8e,
    collapsedByDefault: true,
    data: [],
    description: "Phone numbers, email addresses, home address, and emergency contact details.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "✉️ Contact information",
    required: false,
    type: "subheader"
  },
  {
    _id: Employee_Directory_FieldIds.supervisor_and_subordinates_e8f,
    collapsedByDefault: true,
    data: [],
    description: "Organizational hierarchy showing the employee's manager and direct reports.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "🧩 Supervisor and subordinates",
    required: false,
    type: "subheader"
  },
  {
    _id: Employee_Directory_FieldIds.employee_directory_e90,
    data: [
      WorkflowIds.employee_directory_e3f
    ],
    description: "Subordinates",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "subordinates",
    label: "❤️ Employee Directory",
    required: false,
    type: "linkedfrom"
  },
  {
    _id: Employee_Directory_FieldIds.org_level_81a,
    data: [],
    description: "Employee's organizational level, derived from their Team assignment. Level 1 = top (CEO/Board), Level 2 = reports to top, etc.",
    function: "@function:org_level_81a",
    functionEnabled: true,
    functionVariables: {
      teamLevel: {
        data: [
          Employee_Directory_FieldIds.team_e70,
          Teams_FieldIds.org_level_6f6
        ],
        type: ">"
      }
    },
    inviteToDiscussionOnChange: false,
    label: "Org Level",
    required: false,
    type: "numeric"
  },
  {
    _id: Employee_Directory_FieldIds.nationality_698,
    data: [],
    description: "Employee's nationality/country of citizenship.",
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    key: "nationality",
    label: "Nationality",
    required: false,
    type: "country"
  },
  {
    _id: Employee_Directory_FieldIds.holiday_pay_6dc,
    data: [],
    description: "12% of base salary",
    function: "@function:holiday_pay_6dc",
    functionEnabled: true,
    functionVariables: {
      salary: {
        data: [
          Employee_Directory_FieldIds.salary_e7a
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    key: "holidayPay",
    label: "Holiday Pay",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Employee_Directory_FieldIds.holidayadjusted_salary_6df,
    data: [],
    description: "Base salary + holiday pay (112% of salary)",
    function: "@function:holidayadjusted_salary_6df",
    functionEnabled: true,
    functionVariables: {
      salary: {
        data: [
          Employee_Directory_FieldIds.salary_e7a
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    key: "holidayAdjustedSalary",
    label: "Holiday-Adjusted Salary",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Employee_Directory_FieldIds.pension_tyel_6e3,
    data: [],
    description: "17.2% of holiday-adjusted salary",
    function: "@function:pension_tyel_6e3",
    functionEnabled: true,
    functionVariables: {
      salary: {
        data: [
          Employee_Directory_FieldIds.salary_e7a
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    key: "pensionTyel",
    label: "Pension (TyEL)",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Employee_Directory_FieldIds.employer_health_insurance_6e7,
    data: [],
    description: "1.87% of holiday-adjusted salary",
    function: "@function:employer_health_insurance_6e7",
    functionEnabled: true,
    functionVariables: {
      salary: {
        data: [
          Employee_Directory_FieldIds.salary_e7a
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    key: "employerHealthInsurance",
    label: "Employer Health Insurance",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Employee_Directory_FieldIds.unemployment_insurance_6eb,
    data: [],
    description: "0.20% of holiday-adjusted salary",
    function: "@function:unemployment_insurance_6eb",
    functionEnabled: true,
    functionVariables: {
      salary: {
        data: [
          Employee_Directory_FieldIds.salary_e7a
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    key: "unemploymentInsurance",
    label: "Unemployment Insurance",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Employee_Directory_FieldIds.accident_insurance_6ef,
    data: [],
    description: "0.55% of holiday-adjusted salary",
    function: "@function:accident_insurance_6ef",
    functionEnabled: true,
    functionVariables: {
      salary: {
        data: [
          Employee_Directory_FieldIds.salary_e7a
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    key: "accidentInsurance",
    label: "Accident Insurance",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Employee_Directory_FieldIds.group_life_insurance_6f3,
    data: [],
    description: "0.06% of holiday-adjusted salary",
    function: "@function:group_life_insurance_6f3",
    functionEnabled: true,
    functionVariables: {
      salary: {
        data: [
          Employee_Directory_FieldIds.salary_e7a
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    key: "groupLifeInsurance",
    label: "Group Life Insurance",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Employee_Directory_FieldIds.total_side_costs_6f7,
    data: [],
    description: "Sum of all employer side costs (~31.8% of holiday-adjusted salary)",
    function: "@function:total_side_costs_6f7",
    functionEnabled: true,
    functionVariables: {
      salary: {
        data: [
          Employee_Directory_FieldIds.salary_e7a
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    key: "totalSideCosts",
    label: "Total Side Costs",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Employee_Directory_FieldIds.total_cost_6fb,
    data: [],
    description: "Total employment cost: For employees = salary + side costs + benefits, for contractors = consultancy fee + benefits",
    function: "@function:total_cost_6fb",
    functionEnabled: true,
    functionVariables: {
      benefits: {
        data: [
          Employee_Directory_FieldIds.value_of_benefits_e89
        ],
        type: "="
      },
      consultancyFee: {
        data: [
          Employee_Directory_FieldIds.consultancy_fee_0c5
        ],
        type: "="
      },
      salary: {
        data: [
          Employee_Directory_FieldIds.salary_e7a
        ],
        type: "="
      }
    },
    inviteToDiscussionOnChange: false,
    key: "totalCost",
    label: "Total Cost",
    required: false,
    type: "numericunit",
    unit: "€"
  },
  {
    _id: Employee_Directory_FieldIds.salary_and_benefits_fe7,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "💰 Salary and benefits",
    required: false,
    type: "subheader"
  },
  {
    _id: Employee_Directory_FieldIds.consultancy_fee_0c5,
    data: [],
    functionEnabled: false,
    inviteToDiscussionOnChange: false,
    label: "Consultancy fee",
    required: false,
    type: "numericunit",
    unit: "€"
  }
];
