import { GridColDef } from "@mui/x-data-grid";
import { DateIntervall } from "../types/common";

export function generateGanttDateColumns(selectedDate: Date, selectedDateInterval: DateIntervall): GridColDef[] {
    const thisYear = selectedDate.getFullYear();
    const thisMonth = selectedDate.getMonth();

    const ganttDateColumns: GridColDef[] = [];
    
    var firstDisplayedDay = 1;
    let daystoDisplay = 0;

    function calculateDaysToDisplay() {
        switch (selectedDateInterval.type) {
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
            field: dateObject.toLocaleDateString('de-DE', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }),
            headerName: dateObject.toLocaleDateString('de-DE', {
                weekday: 'short',
                day: '2-digit'
            }),
            flex: 1,
            minWidth: 100,
        });
    }
    
    return ganttDateColumns;
}