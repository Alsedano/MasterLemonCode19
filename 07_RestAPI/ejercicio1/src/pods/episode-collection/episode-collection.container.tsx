import * as React from 'react';
import { useEpisodeCollection } from './episode-collection.hook';
import { EpisodeCollectionComponent } from './episode-collection.component';
import { GridDataSource, GridGetRowsParams } from '@mui/x-data-grid';
import { SearchContext } from '../search/search.provider';

export const EpisodeCollectionContainer = () => {
  const { episodeCollection, loadEpisodeCollection } = useEpisodeCollection();
  const { searchText } = React.useContext(SearchContext);
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 30,
    page: 0,
  });

  React.useEffect(() => {
    loadEpisodeCollection(searchText, paginationModel.page);
    setPaginationModel((prev) => ({
      ...prev,
      pageSize: Math.min(episodeCollection.totalCount, 30),
    }));
  }, [searchText]);

  const customDataSource: GridDataSource = {
    getRows: async (params: GridGetRowsParams) => {
      loadEpisodeCollection(searchText, params.paginationModel?.page);

      return {
        rows: episodeCollection.episodes,
        rowCount: episodeCollection.totalCount,
      };
    },
  };

  return (
    <EpisodeCollectionComponent
      customDataSource={customDataSource}
      paginationModel={paginationModel}
    />
  );
};
