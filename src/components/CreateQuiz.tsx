import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import { useQuizContext } from "../utils/Context";
import CategorySelect from "./CategorySelect";


function CreateQuiz() {
  const { username } = useQuizContext()
  const [amount, setAmount] = useState('20');

  const handleAmountChange = (event: SelectChangeEvent) => {
    setAmount(event.target.value);
  }

  return (
    <>
      <Typography>
        Välkommen {username}, skapa ditt quiz
      </Typography>
      <CategorySelect />
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Antal frågor</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={amount}
          label="Amount of questions"
          onChange={handleAmountChange}
        >
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
        <Button variant="outlined">Starta Quiz</Button>
      </FormControl>

    </>
  );
}

export default CreateQuiz;