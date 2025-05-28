import React from 'react'
import './billingdata.scss'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  // {
  //   field: "avtar", headerName: "Company", width: 100
  // },
  {
    field: 'companyName',
    headerName: 'Company',
    width: 150,
    editable: true,
  },
  {
    field: 'transaction',
    headerName: 'Amount',
    width: 150,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Invoice Date',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'items',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,

  },
];

const rows = [
  { id: 1, transaction: '100000', companyName: 'L&T', date: "14 July", items: "Coal steel" },
  { id: 2, transaction: '457788', companyName: 'Godrej', date: "31 Jan", items: "Property " },
  { id: 3, transaction: '987465', companyName: 'Cipla', date: "31 April", items: "Raw Medicine" },
  { id: 4, transaction: '547896', companyName: 'Relience', date: "11 Jun", items: "Petrolium Crude" },
  { id: 5, transaction: '5214637', companyName: 'Jio', date: "24 Jun", items: "Fiber Cost" },
  { id: 6, transaction: '51412', companyName: "TATA", date: "15 July", items: "Consumer Products" },
  { id: 7, transaction: '478965', companyName: 'Adani', date: "4 Octomber", items: "Coal Mining" },
  { id: 8, transaction: '145237', companyName: 'Bajaj', date: "18 Jan", items: "Electric Applience" },
  { id: 9, transaction: '789654', companyName: 'Kotak', adatege: "6 March", items: "Banking service" },
];

export default function Billingdata() {
  return (
    <div className='billingdata'>

      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid className='datagrid'
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 8,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 }
            }

          }}
          pageSizeOptions={[8]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector

        />
      </Box>
    </div>
  )
}
