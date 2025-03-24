import { useState } from "react";
import { DateIntervallType } from "../types/common";
import DateIntervalSelector from "./DateIntervalSelector";
import GanttChart from "./GanttChart";
import DateNavigator from "./DateNavigator";
import { Box, Container, Paper, Typography } from "@mui/material";


function FleetScheduler() {
    const [selectedDateInterval, setSelectedDateInterval] = useState(DateIntervallType.MONTH);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    function handleDateIntervallChange(type: DateIntervallType) {
          setSelectedDateInterval(type);
    }


  return (
    <Box
  sx={{
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", 
  }}
>
  <Paper
    elevation={2}
    sx={{
      width: "95%",
      height: "80%",
      padding: 3,
      overflow: "hidden",
    }}
  >
      <Typography sx={{ color: "primary.main" }} variant='h1' align="center">Vehicle Fleet Scheduler</Typography>

    <DateIntervalSelector handleDateIntervallChange={handleDateIntervallChange} selectedDateInterval={selectedDateInterval}></DateIntervalSelector>
    <DateNavigator selectedDateInterval={selectedDateInterval} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
    <GanttChart selectedDateInterval={selectedDateInterval} date={selectedDate} />
  </Paper>
  </Box>
  )
}

export default FleetScheduler
