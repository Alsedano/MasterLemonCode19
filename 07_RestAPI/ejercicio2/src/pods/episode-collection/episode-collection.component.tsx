import React from 'react';
import * as classes from '#pods/character-collection/character-collection.styles';
import { DataGrid, GridColDef, GridDataSource } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { linkRoutes } from '#core/router';

interface Props {
  customDataSource: GridDataSource;
  paginationModel: { pageSize: number; page: number };
}

export const EpisodeCollectionComponent: React.FunctionComponent<Props> = ({
  customDataSource,
  paginationModel,
}) => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 90 },
    { field: 'episode', headerName: 'Episode', width: 150 },
    { field: 'air_date', headerName: 'Air date', width: 180 },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      renderCell: (params) => (
        <Link to={linkRoutes.episodeDetail(params.row.id)}>
          {params.row.name}
        </Link>
      ),
    },
  ];

  return (
    <div className={classes.root}>
      <Box sx={{ height: '100%', width: '80%' }}>
        <DataGrid
          columns={columns}
          dataSource={customDataSource}
          pagination
          pageSizeOptions={[paginationModel.pageSize]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: paginationModel.pageSize, page: 0 },
            },
          }}
        />
      </Box>
    </div>
  );
};
