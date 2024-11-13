import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetUsersQuery } from '@/api/users/queries';

export default function UserDataGrid() {
  const getUsersQuery = useGetUsersQuery();
  const { data: getUsersQueryData, isLoading: getUsersQueryIsLoading } = getUsersQuery;
  const users = getUsersQueryData?.users ?? [];

  const rows = users;
  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 200 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: false,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: false,
    },
    {
      field: 'isAdmin',
      headerName: 'Admin?',
      type: 'boolean',
      width: 110,
    },
  ];  

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}