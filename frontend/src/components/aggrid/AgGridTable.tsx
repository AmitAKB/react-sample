import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import apiClient from '../../services/apiClient'

export default function AgGridTable(){
  const [rowData, setRowData] = useState<any[]>([])
  useEffect(() => {
    apiClient.get('/api/data').then(r => setRowData(r.data)).catch(() => setRowData([]))
  },[])
  const columnDefs = [{ field: 'id' }, { field: 'name' }, { field: 'status' }]
  return (
    <div className="ag-theme-alpine" style={{height:400}}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  )
}
