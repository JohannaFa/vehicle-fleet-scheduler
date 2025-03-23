import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateIntervall} from "../types/common";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



interface DateNavigatorProps {
    selectedDateInterval: DateIntervall;
    selectedDate: Date;
    setSelectedDate: (date: Date) => void;
  }

  const DateNavigator: React.FC<DateNavigatorProps> = ({selectedDateInterval, selectedDate, setSelectedDate }) => {

    function handleDateChange(negative: number){
        const newSelectedDate = new Date(selectedDate);
        switch (selectedDateInterval.type) {
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

  return (
    <div>
        <button onClick={() => handleDateChange(-1)}>Prev</button>
        {selectedDate.toLocaleDateString('de-DE', {
                year: 'numeric',
                month: 'long',
                day: '2-digit'
            })}
        <button onClick={() => handleDateChange(1)}>LAter</button>
        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
    </LocalizationProvider>
    </div>
  )
}

export default DateNavigator
