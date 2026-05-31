import React from "react";
import { UserComponent } from "./user.component";
import { AuthContext } from "../login/login.provider";

export const UserContainer: React.FC = () => {
  const { user } = React.useContext(AuthContext);

  return <UserComponent name={user.name} />;
};
