import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import style from './Location.module.css'

const marks = [
  {
    value: 0.0,
  },
  {
    value: 1.0,
  },
  {
    value: 37,
  },
  {
    value: 100,
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function AreaRange() {
  return (
    <Box sx={{ width: 150 }}>
      <Typography sx={{marginRight:"53px"}}>Area Range :</Typography>
      <Slider
        className={style.range}
        aria-label="Custom marks"
        defaultValue={0.0}
        getAriaValueText={valuetext}
        step={15.0}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}
