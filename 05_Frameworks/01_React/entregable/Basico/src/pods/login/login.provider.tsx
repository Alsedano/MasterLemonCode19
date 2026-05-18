import React from "react";
import { LoginComponent } from "./login.component";

interface User {
  name: string;
  password: string;
}

interface AuthContextModel {
  user: User;
  handleChangeUser: (
    field: keyof User,
  ) => (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
  validateUser: () => void;
}

export const AuthContext = React.createContext<AuthContextModel>({
  user: { name: "", password: "" },
  handleChangeUser: () => () => {},
  validateUser: () => {},
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = React.useState<User>({ name: "", password: "" });
  const [isValidUser, setIsValidUser] = React.useState(false);

  const handleChangeUser =
    (field: keyof User) =>
    (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
      setUser({ ...user, [field]: e.target.value });
    };

  const validateUser = () => {
    if (user.name === "admin" && user.password === "test") {
      setIsValidUser(true);
    } else {
      setIsValidUser(false);
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <AuthContext value={{ user, handleChangeUser, validateUser }}>
      {isValidUser ? children : <LoginComponent />}
    </AuthContext>
  );
};
