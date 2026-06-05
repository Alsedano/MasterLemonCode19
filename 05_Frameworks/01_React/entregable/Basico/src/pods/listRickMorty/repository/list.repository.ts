import { mapRickMortyMembersEntityToVm } from "./list.mappers";
import * as api from "./api/api";

export const getRickMortyMembers = async (page: number, customPageSize: number) => {

  return api.getRickMortyMembers(page + 1).then(result => {

    return mapRickMortyMembersEntityToVm(result);
  });
}

export const getRickMortyMembersSlice = async (page: number, customPageSize: number) => {
  const itemNumber = page * customPageSize;
  const calcPage = getOriginalPage(itemNumber);

  console.log(`page: ${page}, pageSize: ${customPageSize}, items: ${page * customPageSize} calcPage: ${calcPage}`);

  return api.getRickMortyMembers(page).then(result => {
    const pagedResults = result.results.slice(itemNumber, itemNumber + customPageSize);
    return mapRickMortyMembersEntityToVm({ ...result, results: pagedResults });
  });
}

function getOriginalPage(itemNumber: number): number {
  const pageSize: number = 20;
  return Math.ceil(itemNumber / pageSize) + 1;
}
