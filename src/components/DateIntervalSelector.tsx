import { DateIntervall, DateIntervallType} from "../types/common";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface DateIntervalSelectorProps {
    selectedDateInterval: DateIntervall;
    handleDateIntervallChange: (type: DateIntervallType) => void;
  }

  const DateIntervalSelector: React.FC<DateIntervalSelectorProps> = ({selectedDateInterval,
    handleDateIntervallChange,
  }) => {

  return (
    <FormControl>
  <InputLabel id="period-selection">Ansicht</InputLabel>
  <Select
    id="period-simple-selection"
    label="period"
    value={selectedDateInterval.type}
    onChange={(e: any) => handleDateIntervallChange(e.target.value)}
  >
    <MenuItem value={DateIntervallType.DAY}>Tag</MenuItem>
    <MenuItem value={DateIntervallType.WEEK}>Woche</MenuItem>
    <MenuItem value={DateIntervallType.MONTH}>Monat</MenuItem>
  </Select>
</FormControl>
  )
}

export default DateIntervalSelector
