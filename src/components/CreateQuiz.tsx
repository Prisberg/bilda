import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../utils/Context";
import CategorySelect from "./CategorySelect";
import "../utils/style.css"


function CreateQuiz() {
  const { username, amountOfQuestions, setAmountOfQuestions, setQuizActive, selectedCategories, extractQuestions } = useQuizContext()
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
          Max antal frågor
        </InputLabel>
        <Select
          labelId="demo-select-small"
          color="warning"
          id="demo-select-small"
          value={amountOfQuestions.toString()}
          label="Amount of questions"
          onChange={handleAmountChange}
        >
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
      {selectedCategories.length > 0 ?
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Button
            variant="outlined"
            color="warning"
            onClick={() => {
              setQuizActive(true);
              extractQuestions();
              navigate('/flash-quiz');
            }}>
            Skapa flashcard Quiz
          </Button><Button
            variant="outlined"
            color="warning"
            onClick={() => {
              setQuizActive(true);
              extractQuestions();
              navigate('/choice-quiz');
            }}>
            Skapa flervals Quiz
          </Button>
        </Box> :
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Button
            variant="outlined"
            disabled>
            Skapa flashcard Quiz
          </Button><Button
            variant="outlined"
            disabled>
            Skapa flervals Quiz
          </Button>
        </Box>}
    </Box>
  );
}

export default CreateQuiz;