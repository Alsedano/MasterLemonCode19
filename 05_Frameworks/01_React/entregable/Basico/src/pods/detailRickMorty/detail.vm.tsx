export interface RickMortyMemberDetailEntity {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export const createDefaultRickMortyMemberDetail = () => ({
  id: 0,
  name: "",
  status: "",
  species: "",
  gender: "",
  image: "",
});
