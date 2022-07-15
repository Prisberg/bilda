import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import "../utils/style.css"

function Quiz() {
  return (
    <Box className="centerColumn">
      {/* map out question */}
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Typography>Frågo-beskrivning</Typography>
        <Typography>Fråga nummer x</Typography>
      </Box>
      <FormControl>
        <FormLabel color="warning" id="demo-radio-buttons-group-label">Alternativ</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="temporary" control={<Radio color="warning" />} label="Temporary" />
          <FormControlLabel value="temp" control={<Radio color="warning" />} label="temp" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default Quiz;