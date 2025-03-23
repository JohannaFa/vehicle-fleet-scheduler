import { Divider, Stack } from "@mui/material"
import { BookingBar } from "./BookingBar"

  const GanttChartLegend= () => {

  return (
<Stack width={450} direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
    <BookingBar variant={'provisioning'}>provisioning</BookingBar>
    <BookingBar variant={'customer booking'}>customer booking</BookingBar>
    <BookingBar variant={'maintenance'}>maintenance</BookingBar>
</Stack>

  )
}

export default GanttChartLegend

