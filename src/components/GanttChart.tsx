
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { mockVehicles } from '../mocks/vehicles';
import { generateGanttDateColumns } from '../utils/columnHelpers';
import { DateIntervall } from '../types/common';

interface GanttChartProps {
    selectedDateInterval: DateIntervall;
    date: Date;
  }

const GanttChart: React.FC<GanttChartProps> = ({selectedDateInterval, date}) => { 

  
  const firstColumn: GridColDef = {
    field: 'model',
    headerName: 'Fahrzeug',
    width: 200,
    renderCell: (params) => (
        // replace through component
      <>
        <div>{params.row.brand + ' ' + params.row.model}</div>
      </>
    ),
  }
  const dateColumns: GridColDef[] = generateGanttDateColumns(date, selectedDateInterval)
  const columns: GridColDef[] = [firstColumn, ...dateColumns]

  return (
    <>
  <div style={{ height: '100%', width: '100%' }}>
      <DataGrid rows={mockVehicles} columns={columns} />
  </div>

  </>
  )
}

export default GanttChart
