import { Metadata } from 'next';
import { api, HouseListContainer, mapHousesEntityToVm } from '#pods/house-list';

export const metadata: Metadata = {
  title: 'Rent a house - House list',
};

const HouseListPage = async () => {
  // cache: 'force-cache' is the default value
  const houseList = await api.getHouseList({ next: { revalidate: 10 } }); // In seconds

  return (
    <HouseListContainer
      houses={mapHousesEntityToVm(houseList)}
    ></HouseListContainer>
  );
};

export default HouseListPage;
