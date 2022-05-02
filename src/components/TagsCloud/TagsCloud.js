import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function TagsCloud() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="design" onClick={handleClick} />
      <Chip label="marketing" onClick={handleClick} />
      <Chip label="business" onClick={handleClick} />
      <Chip label="developer" onClick={handleClick} />
    </Stack>
  );
}
