import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Employment() {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="free"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="free"
          control={<Radio />}
          label="Freelance"
        />
        <FormControlLabel value="full" control={<Radio />} label="Full Time" />
        <FormControlLabel
          value="intern"
          control={<Radio />}
          label="Internship"
        />
        <FormControlLabel
          value="part"
          control={<Radio />}
          
          label="Part Time"
        />
      </RadioGroup>
    </FormControl>
  );
}
