import React from "react";
import { useParams } from "react-router-dom";
import { DetailRickMorty } from "./detail.component";
import {
  createDefaultRickMortyMemberDetail,
  RickMortyMemberDetailEntity,
} from "./detail.vm";
import { getMember } from "./repository/detail.repository";

export const DetailRickMortyContainer: React.FC = () => {
  const [member, setMember] = React.useState<RickMortyMemberDetailEntity>(
    createDefaultRickMortyMemberDetail(),
  );
  const { characters, id } = useParams();

  React.useEffect(() => {
    getMember(id ?? "").then(setMember);
  }, [id]);

  return (
    <>
      <DetailRickMorty id={id ?? ""} member={member}></DetailRickMorty>
    </>
  );
};
