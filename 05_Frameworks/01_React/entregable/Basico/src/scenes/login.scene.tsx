import { CenteredLayout } from "@/layouts";
import { LoginComponent } from "@/pods/login/login.component";
import React from "react";

export const LoginScene: React.FC = () => {
  return (
    <CenteredLayout>
      <LoginComponent />
    </CenteredLayout>
  );
};
