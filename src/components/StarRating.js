import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function StarRating({startingValue}) {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={startingValue}
        size="large"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}