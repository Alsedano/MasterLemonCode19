import { HeaderContainer } from '#/pods/header';
import { FooterContainer } from '#/pods/footer';
import React, { PropsWithChildren } from 'react';

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="h-screen">
        <HeaderContainer />
        <main className="h-full">{children}</main>
        <FooterContainer />
      </div>
    </>
  );
};
