import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import {
  mapRickMortyMembersEntityToVm,
  useCharacterCollection,
} from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { CharacterEntityVm } from './character-collection.vm';
import { GridFilterModel } from '@mui/x-data-grid';
import { useDebounce } from '#hooks/debounce.hook';
import { getCharacterByName } from './api';
import { mapCharacterFromApiToVm } from '#pods/character/character.mappers.js';

export const CharacterCollectionContainer = () => {
  const { CharacterCollection, loadCharacterCollection } =
    useCharacterCollection();
  const [memberRoot, setMemberRoot] = React.useState<CharacterEntityVm>();
  const [loading, setLoading] = React.useState(true);

  const members = memberRoot?.members ?? [];
  const navigate = useNavigate();

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 30,
    page: 0,
  });

  const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [],
  });

  const debouncedPaginationModel = useDebounce(paginationModel, 500);

  const getCharacterFilteredByName = async (name: string) => {
    getCharacterByName(name)
      .then((characterCollection) => {
        setMemberRoot(mapRickMortyMembersEntityToVm(characterCollection));
      })
      .catch()
      .finally(() => setLoading(false));
  };

  React.useEffect(() => {
    loadCharacterCollection(paginationModel.page);
    setMemberRoot(CharacterCollection);
    setPaginationModel((prev) => ({
      ...prev,
      pageSize: Math.min(CharacterCollection.totalCount, 30),
    }));
    setLoading(false);
  }, [debouncedPaginationModel.page]);

  const handleFilterModelChange = React.useCallback(
    (newModel: GridFilterModel) => {
      setFilterModel(newModel);

      const quickFilterNameValue = newModel.quickFilterValues?.[0];

      if (quickFilterNameValue) {
        console.log('Buscando en servidor:', quickFilterNameValue);
        getCharacterFilteredByName(quickFilterNameValue);
      }
    },
    []
  );

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };

  return (
    <CharacterCollectionComponent
      CharacterCollection={CharacterCollection}
      membersCount={memberRoot?.totalCount ?? members.length}
      loading={loading}
      paginationModel={paginationModel}
      setPaginationModel={setPaginationModel}
      handleFilterModelChange={handleFilterModelChange}
      onCreateCharacter={handleCreateCharacter}
      onEdit={handleEdit}
    />
  );
};
