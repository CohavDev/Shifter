import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function DayGroup(props) {
  const [selection, setSelection] = useState(0); //0,1,2
  function setColor(index) {
    const color = index === selection ? "contained" : "outlined";
    console.log("setting color");
    return color;
  }
  function getDayText() {
    switch (props.day) {
      case 1:
        return "ראשון";
      case 2:
        return "שני";
      case 3:
        return "שלישי";
      case 4:
        return "רביעי";
      case 5:
        return "חמישי";
      case 6:
        return "שישי";
      case 7:
        return "שבת";
    }
  }
  return (
    <Box sx={{ gap: 5, display: "flex", flexDirection: "column" }}>
      <Typography>{getDayText()}</Typography>
      <Button variant={setColor(0)} onClick={() => setSelection(0)}>
        בוקר
      </Button>
      <Button variant={setColor(1)} onClick={() => setSelection(1)}>
        ערב
      </Button>
      <Button variant={setColor(2)} onClick={() => setSelection(2)}>
        לילה
      </Button>
    </Box>
  );
}
