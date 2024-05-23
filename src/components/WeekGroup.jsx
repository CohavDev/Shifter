import { Box } from "@mui/material";
import DayGroup from "./DayGroup";
import { useState } from "react";

export default function WeekGroup(props) {
  const [daysSelection, setSelection] = useState([]);
  return (
    <Box sx={{ display: "flex", gap: 5, direction: "rtl" }}>
      <DayGroup day={1} />
      <DayGroup day={2} />
      <DayGroup day={3} />
      <DayGroup day={4} />
      <DayGroup day={5} />
      <DayGroup day={6} />
      <DayGroup day={7} />
    </Box>
  );
}
