import { HeaderContainer } from '#/pods/header';
import { FooterContainer } from '#/pods/footer';
import React, { PropsWithChildren } from 'react';

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="grid h-screen grid-cols-1 grid-rows-[50px_1fr_50px]">
        <HeaderContainer />
        <main className="flex  items-center justify-center">{children}</main>
        <FooterContainer />
      </div>
    </>
  );
};
