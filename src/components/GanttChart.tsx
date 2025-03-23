
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { generateGanttDateColumns } from '../utils/ganttChart/columnHelpers';
import { DateIntervall } from '../types/common';
import { Vehicle } from '../types/vehicle';
import { getVehiclesWithBookings } from '../utils/ganttChart/rowHelpers';

interface GanttChartProps {
    selectedDateInterval: DateIntervall;
    date: Date;
  }
  

const GanttChart: React.FC<GanttChartProps> = ({selectedDateInterval, date}) => { 
  
  const firstColumn: GridColDef = {
    field: 'vehicle',
    headerName: 'Fahrzeug',
    width: 200,
  }
  const dateColumns: GridColDef[] = generateGanttDateColumns(date, selectedDateInterval)
  const columns: GridColDef<Vehicle>[] = [firstColumn, ...dateColumns]

  const rows: any = getVehiclesWithBookings();

  return (
    <>
  <div style={{ height: '100%', width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
  </div>

  </>
  )
}

export default GanttChart
