import { useState } from "react";
import { DateIntervallType } from "../types/common";
import DateIntervalSelector from "./DateIntervalSelector";
import GanttChart from "./GanttChart";
import DateNavigator from "./DateNavigator";


function FleetScheduler() {
    const [selectedDateInterval, setSelectedDateInterval] = useState(DateIntervallType.MONTH);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    function handleDateIntervallChange(type: DateIntervallType) {
          setSelectedDateInterval(type);
    }


  return (
    <>

    <DateIntervalSelector handleDateIntervallChange={handleDateIntervallChange} selectedDateInterval={selectedDateInterval}></DateIntervalSelector>
    <DateNavigator selectedDateInterval={selectedDateInterval} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
    <GanttChart selectedDateInterval={selectedDateInterval} date={selectedDate} />
  </>
  )
}

export default FleetScheduler
