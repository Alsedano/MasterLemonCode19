import React from "react";
import { MemberEntity } from "../list.vm";
import { Link, useParams } from "react-router-dom";
import { routes } from "@/router";
import { GITHUB } from "@/common/constants";

interface Props {
  member: MemberEntity;
}

export const MemberRow: React.FC<Props> = ({ member }) => {
  const { characters } = useParams();

  console.log(`characters: ${characters}`);

  return (
    <React.Fragment>
      <img src={member.avatarUrl} style={{ borderRadius: "50px" }} />
      <span style={{ textAlign: "center" }}>{member.id}</span>
      <Link
        to={
          characters === GITHUB
            ? routes.detail(member.login)
            : routes.detailRM(member.id.toString())
        }
      >
        {member.login}
      </Link>
    </React.Fragment>
  );
};
