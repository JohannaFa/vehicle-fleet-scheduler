
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { generateGanttDateColumns } from '../utils/ganttChart/columnHelpers';
import { DateIntervallType } from '../types/common';
import { Vehicle } from '../types/vehicle';
import { getVehiclesWithBookings } from '../utils/ganttChart/rowHelpers';
import GanttChartLegend from './GanttChartLegend';
import { Box, Typography } from '@mui/material';

interface GanttChartProps {
    selectedDateInterval: DateIntervallType;
    date: Date;
  }
  

const GanttChart: React.FC<GanttChartProps> = ({selectedDateInterval, date}) => { 
  
  const firstColumn: GridColDef = {
    field: 'vehicle',
    headerName: 'Fahrzeug',
    minWidth: 150,
    renderCell(params) {
      const cellValue = params.value as { brand: string, model: string, licensePlate: string }
        if (cellValue.brand) {
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.3 }}>
              <Typography variant="caption" fontWeight="bold">{cellValue.brand}</Typography>
              <Typography variant="caption">{cellValue.model}</Typography>
            </Box>
            <Typography variant="caption" color="text.secondary">{cellValue.licensePlate}</Typography>
          </Box>
        
      )
   }
    },
  }
  const dateColumns: GridColDef[] = generateGanttDateColumns(date, selectedDateInterval)
  const columns: GridColDef<Vehicle>[] = [firstColumn, ...dateColumns]

  const rows: any = getVehiclesWithBookings();

  return (
    <>
      <DataGrid rows={rows} columns={columns} slots={{
          toolbar: GridToolbar,
        }}
        sx={{
          height: "75%",
    '& .MuiDataGrid-cell': { padding: '8px 8px' },
  }}/>

    <GanttChartLegend/>
  </>
  )
}

export default GanttChart
