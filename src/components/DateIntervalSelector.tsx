import { DateIntervall, DateIntervallType} from "../types/common";
import { ButtonGroup, Button, Box, ToggleButtonGroup, ToggleButton } from '@mui/material';

interface DateIntervalSelectorProps {
    selectedDateInterval: DateIntervall;
    handleDateIntervallChange: (type: DateIntervallType) => void;
  }

  const DateIntervalSelector: React.FC<DateIntervalSelectorProps> = ({selectedDateInterval,
    handleDateIntervallChange,
  }) => {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
  <ToggleButtonGroup
    id="interval-selection"
    value={selectedDateInterval.type}
    onChange={(e: any) => handleDateIntervallChange(e.target.value)}
  >
    <ToggleButton value={DateIntervallType.DAY}>Tag</ToggleButton >
    <ToggleButton value={DateIntervallType.WEEK}>Woche</ToggleButton >
    <ToggleButton value={DateIntervallType.MONTH}>Monat</ToggleButton >
  </ToggleButtonGroup>
  </Box>
  )
}

export default DateIntervalSelector
