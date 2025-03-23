import { GridColDef } from "@mui/x-data-grid";
import { DateIntervallType } from "../../types/common";
import { formatDatetoString } from "../formatters";


export function generateGanttDateColumns(selectedDate: Date, selectedDateInterval: DateIntervallType): GridColDef[] {
    const thisYear = selectedDate.getFullYear();
    const thisMonth = selectedDate.getMonth();

    const ganttDateColumns: GridColDef[] = [];
    
    var firstDisplayedDay = 1;
    let daystoDisplay = 0;

    function calculateDaysToDisplay() {
        switch (selectedDateInterval) {
            case "week": {
                const dayOfWeek = selectedDate.getDay(); // sunday = 0, mo - sat: 1 - 6
                firstDisplayedDay = selectedDate.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1);
                daystoDisplay = 7;
                break;
            }
            case "day":
                firstDisplayedDay = selectedDate.getDate();
                daystoDisplay = 1;
                break;
            case "month":
            default:
                firstDisplayedDay = 1;
                daystoDisplay = new Date(thisYear, thisMonth + 1, 0).getDate(); // days of the month
                break;
        }
    }

    calculateDaysToDisplay();
    
    for (let dayPointer = 0; dayPointer < daystoDisplay; dayPointer++) {
        const dateObject = new Date(thisYear, thisMonth, firstDisplayedDay+dayPointer);
        
        ganttDateColumns.push({
            field: formatDatetoString(dateObject), 
            headerName: formatDatetoString(dateObject),
            flex: 1,
            minWidth: 100,
            renderCell: (params) => {
              const cellValue = params.value as { value: string; colspan: number; status: string }
              if (cellValue?.value) {
                return (
                  <div className={`${cellValue.value} ${cellValue.status}`} style={{ 
                    backgroundColor: '#e3f2fd'
                  }}>
                    {cellValue.value}
                  </div>
                )
              }
            },
            colSpan: (value) => {
                if (value?.colspan) {
                  return value?.colspan;
                }}
          });
    }
    
    return ganttDateColumns;
}