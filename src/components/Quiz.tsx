import { Box, Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Typography } from "@mui/material";
import { useQuizContext } from "../utils/Context";
import "../utils/style.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { QuestionInterface } from "../utils/QuestionData";
import { useState } from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Quiz() {
  const { selectedQuestions } = useQuizContext()
  const [value, setValue] = useState('')

  //ERRORS: answerCorrection corrects across questions for the last radio button you pressed. answerSelected conditional rendering is not specific for each instance of the question, if set to true by one question then all questions recieve the "lås svar" button.

  function answerCorrection(question: QuestionInterface, answerIndex: number) {
    //Answer index = the index you get from the map. Use the answerIndex to compare to question.correctAlternativeIndex, if they are the same then the answer is correct.
    if (question.correctAlternativeIndex === answerIndex) {
      console.log('correct answer');
    } else {
      console.log('wrong answer');
    }
  }
  console.log(value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value)

  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      className='centerColumn'
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {selectedQuestions.map((question, index) => (
        <SwiperSlide className='centerColumn' key={index}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <Typography>{question.description}</Typography>
              <Typography>Fråga {index += 1} av {selectedQuestions.length}</Typography>
            </Box>
            <FormControl>
              <FormLabel color="warning" id="demo-radio-buttons-group-label">Svarsalternativ</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                onChange={handleRadioChange}
                name="radio-buttons-group"
              >
                {question.alternatives.map((item, answerIndex) => (
                  <FormControlLabel
                    key={item}
                    value={answerIndex}
                    control={<Radio color="warning" />}
                    label={item} />
                ))
                }
              </RadioGroup>
              {value ?
                <Button
                  type="submit">
                  Lås svar
                </Button> :
                <Button disabled>Lås svar</Button>}
            </FormControl>
          </form>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Quiz;