import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useQuizContext } from "../utils/Context";
import "../utils/style.css";


function Quiz() {
  const { selectedQuestions } = useQuizContext()

  return (
    <Box className="centerColumn">
      {/* map out question */}
      {selectedQuestions.map((question, index) => (
        <Box key={index}>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Typography>{question.description}</Typography>
            <Typography>Fråga nummer {index}</Typography>
          </Box>
          <FormControl>
            <FormLabel color="warning" id="demo-radio-buttons-group-label">Alternativ</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value={question.alternatives[0]} control={<Radio color="warning" />} label={question.alternatives[0]} />
              <FormControlLabel value={question.alternatives[1]} control={<Radio color="warning" />} label={question.alternatives[1]} />
              <FormControlLabel value={question.alternatives[2]} control={<Radio color="warning" />} label={question.alternatives[2]} />
            </RadioGroup>
          </FormControl>
        </Box>
      ))}
    </Box>
  );
}

export default Quiz;