import { GridColDef } from "@mui/x-data-grid";
import { DateIntervallType } from "../../types/common";
import { formatDatetoString } from "../formatters";
import { BookingBar } from "../../components/BookingBar";
import { BookingStatus, BookingType } from "../../types/booking";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { Box, Tooltip, Typography } from "@mui/material";


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
            renderHeader: () => (
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="body2" fontWeight="bold" color="primary.dark">
                  {format(dateObject, "EE", { locale: de })} {/* Mo, Di, ... */}
                </Typography>
                <Typography variant="caption" color="primary.main">
                  {format(dateObject, "d")} {/* 27, 28, ... */}
                </Typography>
              </Box>),
            flex: 1,
            align: 'center',
            minWidth: 50,
            renderCell: (params) => {
              const cellValue = params.value as { type: BookingType; colspan: number; status: BookingStatus, updatedAt: any }
              if (cellValue?.status) {
                return (
                  <Tooltip title={`${cellValue.type} - ${cellValue.status}`} placement="top">
                  <BookingBar variant={cellValue.type} state={cellValue.status}></BookingBar>
                  </Tooltip>
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