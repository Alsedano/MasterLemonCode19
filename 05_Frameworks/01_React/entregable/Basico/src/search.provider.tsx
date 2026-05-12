import React, { PropsWithChildren } from "react";

interface OrganizationContextModel {
  organization: string;
  setOrganization: React.Dispatch<React.SetStateAction<string>>;
}

export const OrgContext = React.createContext<OrganizationContextModel>({
  organization: "",
  setOrganization: () => {},
});

export const OrganizationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [organization, setOrganization] = React.useState("lemoncode");

  return (
    <OrgContext value={{ organization, setOrganization }}>
      {children}
    </OrgContext>
  );
};
