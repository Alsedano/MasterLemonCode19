import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { GridDataSource, GridGetRowsParams } from '@mui/x-data-grid';
import { SearchContext } from '../search/search.provider';

export const CharacterCollectionContainer = () => {
  const { CharacterCollection, loadCharacterCollection } =
    useCharacterCollection();

  const navigate = useNavigate();

  const { searchText } = React.useContext(SearchContext);

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 30,
    page: 0,
  });

  React.useEffect(() => {
    loadCharacterCollection(searchText, paginationModel.page);
    setPaginationModel((prev) => ({
      ...prev,
      pageSize: Math.min(CharacterCollection.totalCount, 30),
    }));
  }, [searchText]);

  const customDataSource: GridDataSource = {
    getRows: async (params: GridGetRowsParams) => {
      loadCharacterCollection(searchText, params.paginationModel?.page);

      return {
        rows: CharacterCollection.members,
        rowCount: CharacterCollection.totalCount,
      };
    },
  };

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };

  return (
    <CharacterCollectionComponent
      customDataSource={customDataSource}
      paginationModel={paginationModel}
      onCreateCharacter={handleCreateCharacter}
      onEdit={handleEdit}
    />
  );
};
