import { mapRickMortyMembersEntityToVm } from "./list.mappers";
import * as api from "./api/api";

export const getRickMortyMembers = async (page: number, pageSize: number) => {
  const itemNumber = page * pageSize;
  const calcPage = getOriginalPage(itemNumber);

  console.log(`page: ${page}, pageSize: ${pageSize}, items: ${page * pageSize} calcPage: ${calcPage}`);

  return api.getRickMortyMembers(page).then(result => {
    const pagedResults = result.results.slice(itemNumber, itemNumber + pageSize);
    return mapRickMortyMembersEntityToVm({ ...result, results: pagedResults });
  });
}

function getOriginalPage(itemNumber: number): number {
  const pageSize: number = 20;
  return Math.ceil(itemNumber / pageSize);
}
