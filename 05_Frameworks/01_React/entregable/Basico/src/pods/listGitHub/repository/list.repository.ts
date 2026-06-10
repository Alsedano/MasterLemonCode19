import { mapGitHubMembersEntityToVm } from "./list.mappers";
import * as api from "./api/api";

export const getGitHubMembers = async (organization: string, page: number) =>
  api.getGitHubMembers(organization, page + 1).then(mapGitHubMembersEntityToVm);