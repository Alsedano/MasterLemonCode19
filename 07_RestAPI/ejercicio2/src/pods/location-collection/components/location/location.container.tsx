import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { Location, createEmptyLocation } from './location.vm';
import { mapLocationFromApiToVm } from './location.mappers';
import { LocationComponent } from './location.component';

interface Props {
  isReadOnly: boolean;
}

export const LocationContainer: React.FunctionComponent<Props> = ({
  isReadOnly,
}) => {
  const [Location, setLocation] = React.useState<Location>(
    createEmptyLocation()
  );
  const { id } = useParams<{ id: string }>();

  const handleLoadLocation = async () => {
    const apiLocation = await api.getLocation(id);
    setLocation(mapLocationFromApiToVm(apiLocation));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadLocation();
    }
  }, []);

  return <LocationComponent Location={Location} isReadOnly={isReadOnly} />;
};
