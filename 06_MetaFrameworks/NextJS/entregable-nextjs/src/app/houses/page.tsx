import { Metadata } from 'next';
import { api, HouseListContainer, mapHousesEntityToVm } from '#pods/house-list';

export const metadata: Metadata = {
  title: 'Rent a house - House list',
};

interface Props {
  searchParams?: {
    filter?: string;
  };
}

const HouseListPage = async (props: Props) => {
  const searchParams = await props.searchParams;
  const filterQuery = searchParams?.filter || '';

  const houseList = await api.getHouseList({
    req: { cache: 'no-store' }, // cache: 'force-cache' is the default value
    searchParams: { query: String(filterQuery) },
  });
  /* const houseList = await api.getHouseList({
    req: { next: { revalidate: 10 } },
    searchParams: { query: String(filterQuery) },
  }); // In seconds */

  return (
    <HouseListContainer
      houses={mapHousesEntityToVm(houseList)}
    ></HouseListContainer>
  );
};

export default HouseListPage;
