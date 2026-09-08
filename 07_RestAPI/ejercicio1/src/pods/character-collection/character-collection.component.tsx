import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from './character-collection.vm';
import * as classes from './character-collection.styles';
import { DataGrid, GridColDef, GridFilterModel } from '@mui/x-data-grid';
import { Avatar, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { SearchContainer } from '#pods/search';

interface Props {
  CharacterCollection: CharacterEntityVm;
  membersCount: number;
  loading: boolean;
  handleFilterModelChange: (newModel: GridFilterModel) => void;
  paginationModel?: { pageSize: number; page: number };
  setPaginationModel?: React.Dispatch<
    React.SetStateAction<{
      pageSize: number;
      page: number;
    }>
  >;
  onCreateCharacter: () => void;
  onEdit: (id: string) => void;
}

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
    flex: 1,
    renderCell: (params) => {
      const rowId = params.row.id;
      const rowLogin = params.row.name;

      return <Link to={linkRoutes.detail(rowId)}>{rowLogin}</Link>;
    },
  },
];

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    CharacterCollection,
    membersCount,
    handleFilterModelChange,
    paginationModel,
    setPaginationModel,
    onCreateCharacter,
    onEdit,
  } = props;

  return (
    <div className={classes.root}>
      <SearchContainer />

      <Box sx={{ height: '100%', width: '80%' }}>
        <DataGrid
          rowCount={membersCount}
          rows={CharacterCollection!.members || []}
          columns={columns}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          onFilterModelChange={handleFilterModelChange}
          paginationMode="server"
          pagination
          pageSizeOptions={[CharacterCollection.members.length]}
          disableRowSelectionOnClick
        />
      </Box>
      {/* <ul className={classes.list}>
        {CharacterCollection.map((Character) => (
          <li key={Character.id}>
            <CharacterCard
              members={Character}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul> */}
    </div>
  );
};
