import React from 'react';
import { Metadata } from 'next';
import { api, HouseContainer } from '#pods/house';
import { mapHouseItemToVm } from '#pods/house/repository';

interface Props {
  params: Promise<{ houseId: string }>;
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params;
  console.log(`Api call from page with id: ${params}`);
  const houseEntity = await api.getHouse(params.houseId);
  /* const HouseVM = mapHouseItemToVm(houseEntity); */
  return {
    title: `Rent a house - House ${houseEntity.name} details`,
  };
};

export async function generateStaticParams() {
  return [{ houseId: '1' }, { houseId: '2' }, { houseId: '3' }];
}

const HousePage = async (props: Props) => {
  const params = await props.params;
  const house = await api.getHouse(params.houseId);
  console.log('House page', house);

  return (
    <>
      <HouseContainer house={mapHouseItemToVm(house)}></HouseContainer>
    </>
  );
};

export default HousePage;
