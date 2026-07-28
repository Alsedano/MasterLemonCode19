import * as React from 'react';
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { AppLayout } from '#/layouts/app.layout';
import '#global-css/styles.css';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Rent a house' },
    ],
    links: [{ rel: 'icon', type: 'image/png', href: '/home-logo.png' }],
  }),
  shellComponent: RootComponent,
});

function RootComponent({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <AppLayout>{children}</AppLayout>
        <TanStackRouterDevtools />
        <Scripts />
      </body>
    </html>
  );
}
