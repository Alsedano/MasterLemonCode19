import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  characterDetail: string,
  createCharacter: string;
  editCharacter: string;
  locationCollection: string;
  locationDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  characterDetail: "/characters/:id",
  createCharacter: '/characters/create',
  editCharacter: '/characters/:id',
  locationCollection: '/locations',
  locationDetail: "/locations/:id",
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter' | 'characterDetail' | 'locationDetail'> {
  editCharacter: NavigationFunction;
  characterDetail: NavigationFunction;
  locationDetail: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
  characterDetail: (id) => generatePath(switchRoutes.characterDetail, { id }),
  locationDetail: (id) => generatePath(switchRoutes.locationDetail, { id }),
};
