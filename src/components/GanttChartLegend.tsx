import { Container, Divider, Stack } from "@mui/material"
import { BookingBar } from "./BookingBar"

  const GanttChartLegend= () => {

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}
>
  <Stack 
    maxWidth={450}
    width="100%"
    direction="row" 
    spacing={2} 
    divider={<Divider orientation="vertical" flexItem />}
  >
    <BookingBar variant={'provisioning'}>provisioning</BookingBar>
    <BookingBar variant={'customer booking'}>customer booking</BookingBar>
    <BookingBar variant={'maintenance'}>maintenance</BookingBar>
</Stack>
</Container>

  )
}

export default GanttChartLegend

