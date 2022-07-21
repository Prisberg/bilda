import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useQuizContext } from "../utils/Context";

function Result() {
  const { score, possibleScore } = useQuizContext()
  // display score and

  let percentage= 0;

  function calculate() {
    return percentage = Math.round((100 * score) / possibleScore);
  }

  calculate()

  return (
    <Box className="centerColumn">
      <Typography>Resultat: {percentage}%</Typography>
      <Typography>{score}/{possibleScore}</Typography>
    </Box>
  );
}

export default Result;