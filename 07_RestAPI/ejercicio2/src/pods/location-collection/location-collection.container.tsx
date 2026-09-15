import * as React from 'react';
import { useLocationCollection } from './location-collection.hook';
import { LocationCollectionComponent } from './location-collection.component';
import { GridDataSource, GridGetRowsParams } from '@mui/x-data-grid';
import { SearchContext } from '../search/search.provider';

export const LocationCollectionContainer = () => {
  const { LocationCollection, loadLocationCollection } =
    useLocationCollection();

  const { searchText } = React.useContext(SearchContext);

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 30,
    page: 0,
  });

  React.useEffect(() => {
    loadLocationCollection(searchText, paginationModel.page);
    setPaginationModel((prev) => ({
      ...prev,
      pageSize: Math.min(LocationCollection.totalCount, 30),
    }));
  }, [searchText]);

  const customDataSource: GridDataSource = {
    getRows: async (params: GridGetRowsParams) => {
      loadLocationCollection(searchText, params.paginationModel?.page);

      return {
        rows: LocationCollection.locations,
        rowCount: LocationCollection.totalCount,
      };
    },
  };

  return (
    <LocationCollectionComponent
      customDataSource={customDataSource}
      paginationModel={paginationModel}
    />
  );
};
