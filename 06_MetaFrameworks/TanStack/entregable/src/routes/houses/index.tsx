import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';

const getHouseList = async () =>
  await fetch('/api/houses').then((res) => res.json());

export const Route = createFileRoute('/houses/')({
  loader: () => getHouseList(),
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const houses = Route.useLoaderData();

  return (
    <>
      <ul>
        {houses.map((house) => (
          <li key={house.id}>
            <Link to="/houses/$id" params={{ id: house.id }}>
              {house.name}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate({ to: '/' })}>Go back to home</button>
    </>
  );
}
