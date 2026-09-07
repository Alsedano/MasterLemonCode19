import React from 'react';
import { HeaderContainer } from '../pods/header';
import { FooterContainer } from '../pods/footer';
import '../global-css/styles.css';

interface Props {
  children: React.ReactNode;
}

const RootLayout = (props: Props) => {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <div className="grid h-screen grid-cols-1 grid-rows-[50px_1fr_50px]">
          <HeaderContainer />
          <main className="flex  items-center justify-center">{children}</main>
          <FooterContainer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
