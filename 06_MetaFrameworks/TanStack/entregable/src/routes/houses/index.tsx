import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { HouseListContainer, mapHousesEntityToVm } from '#/pods/house-list';
import { api } from '#pods/house-list';

export const Route = createFileRoute('/houses/')({
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
      {/* <ul>
        {houses.map((house) => (
          <li key={house.id}>
            <Link to="/houses/$id" params={{ id: house.id }}>
              {house.name}
            </Link>
          </li>
        ))}
      </ul> */}
    </>
  );
}
