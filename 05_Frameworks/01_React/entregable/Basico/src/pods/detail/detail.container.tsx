import React from "react";
import { useParams } from "react-router-dom";
import { Detail } from "./detail.component";
import { createDefaultMemberDetail, MemberDetailEntity } from "./detail.vm";
import { getMember } from "./repository/detail.repository";

export const DetailContainer: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail(),
  );
  const { login } = useParams();

  React.useEffect(() => {
    getMember(login).then(setMember);
  }, [login]);

  return (
    <>
      <Detail id={login ?? ""} member={member}></Detail>
    </>
  );
};
