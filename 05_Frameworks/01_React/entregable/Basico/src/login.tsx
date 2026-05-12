import React from "react";
import { AuthContext } from "./auth.provider";

export const LoginPage: React.FC = () => {
  const { user, handleChangeUser, validateUser } =
    React.useContext(AuthContext);
  return (
    <>
      <h2>Hello from login page</h2>

      <div>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={user.name}
            onChange={handleChangeUser("name")}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={user.password}
            onChange={handleChangeUser("password")}
          />
        </div>
      </div>

      <button onClick={validateUser}>Login</button>
    </>
  );
};
