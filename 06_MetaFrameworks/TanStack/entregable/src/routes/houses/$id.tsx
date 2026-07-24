import { createFileRoute, Link } from '@tanstack/react-router';
import { api, HouseContainer } from '#pods/house';

export const Route = createFileRoute('/houses/$id')({
  loader: ({ params }) => api.getHouse({ data: { id: params.id } }),
  head: ({ loaderData }) => ({
    meta: [{ title: `Rent a house - House ${loaderData?.name} details` }],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const house = Route.useLoaderData();
  return <HouseContainer house={house}></HouseContainer>;
}
