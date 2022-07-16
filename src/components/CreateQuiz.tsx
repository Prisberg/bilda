import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../utils/Context";
import CategorySelect from "./CategorySelect";
import "../utils/style.css"


function CreateQuiz() {
  const { username, amountOfQuestions, setAmountOfQuestions, setQuizActive, selectedCategories } = useQuizContext()
  const navigate = useNavigate()

  const handleAmountChange = (event: SelectChangeEvent) => {
    setAmountOfQuestions(event.target.value);
  }

  return (
    <Box sx={{ gap: '1rem' }} className="centerColumn">
      <Typography>Välkommen {username}, skapa ditt quiz</Typography>
      <CategorySelect />
      <FormControl
        sx={{
          m: 1,
          minWidth: 120
        }}
        size="small">
        <InputLabel
          color="warning"
          id="demo-select-small">
          Antal frågor
        </InputLabel>
        <Select
          labelId="demo-select-small"
          color="warning"
          id="demo-select-small"
          value={amountOfQuestions}
          label="Amount of questions"
          onChange={handleAmountChange}
        >
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
        {selectedCategories.length > 0 ?
          <Button
            variant="outlined"
            color="warning"
            onClick={() => {
              navigate('/quiz');
              setQuizActive(true)
            }}>
            Starta Quiz
          </Button> :
          <Button
            variant="outlined"
            disabled>
            Starta Quiz
          </Button>}
      </FormControl>
    </Box>
  );
}

export default CreateQuiz;