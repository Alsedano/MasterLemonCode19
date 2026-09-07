import { createFileRoute } from '@tanstack/react-router';
import { HouseListContainer, mapHousesEntityToVm } from '#/pods/house-list';
import { api } from '#pods/house-list';

export const Route = createFileRoute('/houses/')({
  head: () => ({
    meta: [{ title: 'Rent a house - House list' }],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    filter: typeof search.filter === 'string' ? search.filter : '',
  }),
  loaderDeps: ({ search }) => ({ filter: search.filter }),
  loader: ({ deps }) =>
    api.getHouseList({ data: { filter: deps.filter ?? '' } }),
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
