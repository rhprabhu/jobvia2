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

export default function WorkExp() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: true,
    salman: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { Noexperience, jason, antoine, salman } = state;

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
            label="No experience"
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
            label="0-3 years"
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
            label="3-6 years"
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
            label="More than 6 years"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
