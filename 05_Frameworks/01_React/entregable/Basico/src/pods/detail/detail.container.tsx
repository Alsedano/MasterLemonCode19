import React from "react";
import { useParams } from "react-router-dom";
import { Detail } from "./detail.component";
import { createDefaultMemberDetail, MemberDetailEntity } from "./detail.vm";
import { getMember } from "./repository/detail.repository";

export const DetailContainer: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail(),
  );
  const { characters, id } = useParams();

  console.log(`characters value: ${characters}`);

  React.useEffect(() => {
    getMember(characters ?? "", id ?? "").then(setMember);
  }, [id]);

  return (
    <>
      <Detail
        id={id ?? ""}
        characters={characters ?? ""}
        member={member}
      ></Detail>
    </>
  );
};
