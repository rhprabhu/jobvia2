import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function DatePosted() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: true,
      salman: false,
    last14:false,
    last30:false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { Noexperience, jason, antoine, salman,last14, last30 } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                style={{
                  color: "#02af74",
                  borderColor: " #adb5bd",
                }}
                checked={Noexperience}
                onChange={handleChange}
                name="Noexperience"
              />
            }
            label="All"
          />

          <FormControlLabel
            control={
              <Checkbox
                style={{
                  color: "#02af74",
                }}
                checked={antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label="Last Hour"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{
                  color: "#02af74",
                }}
                checked={jason}
                onChange={handleChange}
                name="jason"
              />
            }
            label="Last 24 hours"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{
                  color: "#02af74",
                }}
                checked={salman}
                onChange={handleChange}
                name="salman"
              />
            }
            label="Last 7 days"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{
                  color: "#02af74",
                }}
                checked={last14}
                onChange={handleChange}
                name="last14"
              />
            }
            label="Last 14 days"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{
                  color: "#02af74",
                }}
                checked={last30}
                onChange={handleChange}
                name="last30"
              />
            }
            label="Last 30 days"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
