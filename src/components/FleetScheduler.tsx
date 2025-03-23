import { useState } from "react";
import { DateIntervall, DateIntervallType } from "../types/common";
import DateIntervalSelector from "./DateIntervalSelector";
import GanttChart from "./GanttChart";
import DateNavigator from "./DateNavigator";


function FleetScheduler() {
    const [selectedDateInterval, setSelectedDateInterval] = useState<DateIntervall>({
        type: DateIntervallType.DAY,
        startDate: new Date(),
        endDate: new Date()
      });

      const [selectedDate, setSelectedDate] = useState<Date>(new Date());


      function handleDateIntervallChange(type: DateIntervallType) {
          setSelectedDateInterval({
              type: type,
              // Impement method to keep selected date or current date
            startDate: new Date(),
            endDate: new Date()
          });
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
