import { useState } from "react";
import { DateIntervallType } from "../types/common";
import DateIntervalSelector from "./DateIntervalSelector";
import GanttChart from "./GanttChart";
import DateNavigator from "./DateNavigator";
import { Box, Paper, Typography } from "@mui/material";


function FleetScheduler() {
    const [selectedDateInterval, setSelectedDateInterval] = useState(DateIntervallType.MONTH);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    function handleDateIntervallChange(type: DateIntervallType) {
          setSelectedDateInterval(type);
    }


  return (
    <Box sx={{
      padding: 3,
      display: "flex",
      justifyContent: "center", 
      alignItems: "center",
    }}>
    <Paper 
    elevation={2} sx={{
      padding: 3, width: "90vw",
      height: "90vh",
    }}>
      <Typography sx={{ color: "primary.main" }} variant='h1' align="center">Vehicle Fleet Scheduler</Typography>

    <DateIntervalSelector handleDateIntervallChange={handleDateIntervallChange} selectedDateInterval={selectedDateInterval}></DateIntervalSelector>
    <DateNavigator selectedDateInterval={selectedDateInterval} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
    <GanttChart selectedDateInterval={selectedDateInterval} date={selectedDate} />
  </Paper>
  </Box>
  )
}

export default FleetScheduler
