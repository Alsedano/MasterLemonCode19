import * as React from 'react';
import * as classes from './character-collection.styles';
import {
  DataGrid,
  GridActionsCell,
  GridActionsCellItem,
  GridColDef,
  GridDataSource,
} from '@mui/x-data-grid';
import { Avatar, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
  customDataSource: GridDataSource;
  paginationModel: { pageSize: number; page: number };
  onCreateCharacter: () => void;
  onEdit: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { customDataSource, paginationModel, onCreateCharacter, onEdit } =
    props;

  const columns: GridColDef[] = [
    {
      field: 'avatarUrl',
      headerName: 'Avatar',
      width: 90,
      renderCell: (params) => <Avatar alt="" src={params.value} />,
    },
    { field: 'id', headerName: 'Id', width: 150 },
    {
      field: 'name',
      headerName: 'Name',
      flex: 100,
      renderCell: (params) => {
        const rowId = params.row.id;
        const rowName = params.row.name;

        return <Link to={linkRoutes.characterDetail(rowId)}>{rowName}</Link>;
      },
    },
    { field: 'bestSentence', headerName: 'Best Sentence', width: 350 },
    {
      field: 'actions',
      type: 'actions',
      flex: 1,
      renderCell: (params) => (
        <GridActionsCell {...params}>
          <GridActionsCellItem
            icon={<EditIcon />}
            onClick={(e) => {
              const rowId = params.row.id;

              onEdit(rowId);
            }}
            label="Edit"
          />
        </GridActionsCell>
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
