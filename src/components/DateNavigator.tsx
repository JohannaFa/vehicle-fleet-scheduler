import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DateIntervallType} from "../types/common";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { de } from 'date-fns/locale/de';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, IconButton } from "@mui/material";

interface DateNavigatorProps {
    selectedDateInterval: DateIntervallType;
    selectedDate: Date;
    setSelectedDate: (date: Date) => void;
  }

  const DateNavigator: React.FC<DateNavigatorProps> = ({selectedDateInterval, selectedDate, setSelectedDate }) => {

    function handleDateChange(negative: number){
        const newSelectedDate = new Date(selectedDate);
        switch (selectedDateInterval) {
            case "week": {
                newSelectedDate.setDate(newSelectedDate.getDate() + (7*negative));
                setSelectedDate(newSelectedDate)
                break;
            }
            case "day":
                newSelectedDate.setDate(newSelectedDate.getDate() + (1*negative));
                setSelectedDate(newSelectedDate)
                break;
            case "month":
            default:
                newSelectedDate.setMonth(newSelectedDate.getMonth() + (1*negative));
                setSelectedDate(newSelectedDate)
                break;
        }
    }

    function handleCalendarChange(event: any){
        if(event !== null) setSelectedDate(new Date(event));
    }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>     
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
        <IconButton onClick={() => handleDateChange(-1)}><ChevronLeftIcon/></IconButton>
        <IconButton onClick={() => handleDateChange(1)}><ChevronRightIcon/></IconButton>
        <DatePicker sx={{"& fieldset": {border: 'none', padding: '0px'}}} value={selectedDate} onChange={handleCalendarChange}/>
    </LocalizationProvider>
    </Box>
  )
}

export default DateNavigator

