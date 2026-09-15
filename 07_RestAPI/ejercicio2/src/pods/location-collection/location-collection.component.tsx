import * as React from 'react';
import * as classes from '#pods/character-collection/character-collection.styles';
import { DataGrid, GridColDef, GridDataSource } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { linkRoutes } from '#core/router';

interface Props {
  customDataSource: GridDataSource;
  paginationModel: { pageSize: number; page: number };
}

export const LocationCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { customDataSource, paginationModel } = props;

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 90 },
    {
      field: 'type',
      headerName: 'Type',
      width: 150,
    },
    {
      field: 'dimension',
      headerName: 'Dimension',
      width: 150,
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      renderCell: (params) => {
        const rowId = params.row.id;
        const rowName = params.row.name;

        return <Link to={linkRoutes.locationDetail(rowId)}>{rowName}</Link>;
      },
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
