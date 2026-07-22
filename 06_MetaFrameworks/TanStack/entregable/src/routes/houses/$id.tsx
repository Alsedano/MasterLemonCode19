import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/houses/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  return (
    <>
      <div>House id={id}</div>
      <Link to="/houses">Navigate back to house list</Link>
    </>
  );
}
