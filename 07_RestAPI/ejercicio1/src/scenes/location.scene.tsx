import * as React from 'react';
import { AppLayout } from '#layouts';
import { LocationContainer } from '#pods/location-collection/components/location';

interface Props {
  isReadOnly: boolean;
}

export const LocationScene = ({ isReadOnly }) => (
  <AppLayout>
    <LocationContainer isReadOnly={isReadOnly} />
  </AppLayout>
);
