import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuizContext } from "../utils/Context";
import "../utils/style.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Quiz() {
  const { selectedQuestions } = useQuizContext()
  const [submitButton, setSubmitButton] = useState<HTMLButtonElement>()
  const [checkedRadio, setCheckedRadio] = useState<HTMLInputElement>()
  const [correctAnswer, setCorrectAnswer] = useState<number>()
  const [radioButtons, setRadioButtons] = useState<HTMLCollectionOf<HTMLInputElement>>()

  function currentSlide(swiper: any) {
    const activeSlide: HTMLElement = swiper.slides[swiper.activeIndex]
    setRadioButtons(activeSlide.getElementsByTagName('input'))
    setSubmitButton(activeSlide.getElementsByTagName('button')[0])
    setCorrectAnswer(selectedQuestions[swiper.activeIndex].correctAlternativeIndex)
  }

  function handleRadioChange() {
    if (submitButton) {
      submitButton.removeAttribute('disabled')
      submitButton.classList.remove('Mui-disabled')
    }
    if (radioButtons) {
      for (let i = 0; i < radioButtons.length; i++) {
        const element = radioButtons[i];
        if (element.checked) {
          return setCheckedRadio(element);
        }
      }
    }
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('clicked');

    if (checkedRadio) {
      if (parseInt(checkedRadio.value) === correctAnswer) {
        console.log('correct answer')
      } else {
        console.log('wrong answer');
      }
    }
    //Lock the radio buttons and the submit button.
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
      onSwiper={(swiper) => currentSlide(swiper)}
      onSlideChange={(swiper) => currentSlide(swiper)}
    >
      {selectedQuestions.map((question, index) => (
        <SwiperSlide className='centerColumn' key={index}>
          <form onSubmit={(e) => handleSubmit(e)}>
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
              <Button
                disabled
                type="submit">
                Lås svar
              </Button>
            </FormControl>
          </form>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Quiz;