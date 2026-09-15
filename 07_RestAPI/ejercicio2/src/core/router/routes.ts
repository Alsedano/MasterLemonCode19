import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  collection: string;
  characterCollection: string;
  characterDetail: string,
  createCharacter: string;
  editCharacter: string;
  locationCollection: string;
  locationDetail: string;
  episodeCollection: string;
  episodeDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  collection: '/collection',
  characterCollection: '/characters',
  characterDetail: "/characters/:id",
  createCharacter: '/characters/create',
  editCharacter: '/characters/edit/:id',
  locationCollection: '/locations',
  locationDetail: "/locations/:id",
  episodeCollection: '/episodes',
  episodeDetail: '/episodes/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter' | 'characterDetail' | 'locationDetail' | 'episodeDetail'> {
  editCharacter: NavigationFunction;
  characterDetail: NavigationFunction;
  locationDetail: NavigationFunction;
  episodeDetail: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
  characterDetail: (id) => generatePath(switchRoutes.characterDetail, { id }),
  locationDetail: (id) => generatePath(switchRoutes.locationDetail, { id }),
  episodeDetail: (id) => generatePath(switchRoutes.episodeDetail, { id }),
};
