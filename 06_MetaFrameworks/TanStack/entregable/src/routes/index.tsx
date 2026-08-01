import { HouseListContainer, mapHousesEntityToVm } from '#pods/house-list';
import { createFileRoute } from '@tanstack/react-router';
import { api } from '#pods/house-list';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [{ title: 'Rent a house - House list' }],
  }),
  loader: () => api.getHouseList(),
  component: RouteComponent,
});

function RouteComponent() {
  const houses = Route.useLoaderData();

  return (
    <>
      <HouseListContainer
        houses={mapHousesEntityToVm(houses)}
      ></HouseListContainer>
    </>
  );
}
