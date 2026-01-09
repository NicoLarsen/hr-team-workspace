// Configuration for teams
    
// Properties that can be set when updating or creating a new team: name, description, public, defaultView, members
      
import { WorkspaceMembers, WorkspaceTeams } from "./enums";
      
export const teams: HailerTeamUpdatePayload[] = [
  {
    _id: WorkspaceTeams.hr_management_d56,
    description: "",
    members: [
      WorkspaceMembers.nico_larsen_74e
    ],
    name: "💜 HR management",
    public: false
  },
  {
    _id: WorkspaceTeams.employees_d57,
    description: "",
    members: [],
    name: "❤️ Employees",
    public: false
  },
  {
    _id: WorkspaceTeams.supervisors_d58,
    description: "",
    members: [],
    name: "💚 Supervisors",
    public: false
  },
  {
    _id: WorkspaceTeams.bots_378,
    description: "Team bots",
    members: [
      WorkspaceMembers.bot_botinen_382
    ],
    name: "🤖 Bots"
  }
];
      