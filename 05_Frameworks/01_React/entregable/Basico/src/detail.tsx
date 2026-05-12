import React from "react";
import { Link, useParams } from "react-router";
import { AuthContext } from "./auth.provider";

interface MemberDetailEntity {
  id: string;
  login: string;
  name: string;
  company: string;
  bio: string;
}

export const DetailPage: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity | undefined>(
    undefined,
  );
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, [id]);

  return (
    <>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {id}</h3>
      <p> id: {member?.id}</p>
      <p> login: {member?.login}</p>
      <p> name: {member?.name}</p>
      <p> company: {member?.company}</p>
      <p> bio: {member?.bio}</p>
      <Link to="/list">Back to list page</Link>
    </>
  );
};
