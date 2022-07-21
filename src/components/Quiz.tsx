import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuizContext } from "../utils/Context";
import "../utils/style.css";

// Import Swiper styles
import { useNavigate } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { questions } from "../utils/QuestionData";


function Quiz() {
  let { selectedQuestions, setScore, score } = useQuizContext()
  const navigate = useNavigate()
  const [submitButton, setSubmitButton] = useState<HTMLButtonElement>()
  const [checkedRadio, setCheckedRadio] = useState<HTMLInputElement>()
  const [correctAnswer, setCorrectAnswer] = useState<number>()
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)
  const [radioButtons, setRadioButtons] = useState<HTMLCollectionOf<HTMLInputElement>>()
  const [radioLabels, setRadioLabels] = useState<NodeListOf<HTMLElement>>()

  function getCheckedRadio() {
    if (radioButtons) {
      for (let i = 0; i < radioButtons.length; i++) {
        const radio = radioButtons[i];
        if (radio.checked) {
          return setCheckedRadio(radio);
        }
      }
    }
  }

  useEffect(() => {
    getCheckedRadio()
  }, [radioButtons])

  function currentSlide(swiper: any) {
    document.documentElement.style.setProperty('--swiper-theme-color', '#ffa726');
    const activeSlide: HTMLElement = swiper.slides[swiper.activeIndex]
    setActiveSlideIndex(swiper.activeIndex)
    setRadioButtons(activeSlide.getElementsByTagName('input'))
    setRadioLabels(activeSlide.querySelectorAll<HTMLElement>('.MuiFormControlLabel-root'))
    setSubmitButton(activeSlide.getElementsByTagName('button')[0])
    setCorrectAnswer(selectedQuestions[swiper.activeIndex].correctAlternativeIndex)
  }

  function handleRadioChange() {
    if (submitButton) {
      submitButton.removeAttribute('disabled')
      submitButton.classList.remove('Mui-disabled')
    }
    getCheckedRadio();
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    //Checks if your answer was correct.
    if (checkedRadio) {
      if (parseInt(checkedRadio.value) === correctAnswer) {
        console.log('correct answer')
        const onePoint = 1
        setScore(score + onePoint)
        //set state to render right or wrong snackbar
      } else {
        console.log('wrong answer');
        //set state to render right or wrong snackbar
      }
    }
    //Lock the radio buttons.
    if (radioButtons) {
      for (let i = 0; i < radioButtons.length; i++) {
        const radio = radioButtons[i];
        radio.setAttribute('disabled', 'true')
      }
    }
    //Lock submit button.
    if (submitButton) {
      submitButton.setAttribute('disabled', 'true')
      submitButton.classList.add('Mui-disabled')
      submitButton.innerText = 'Besvarad'
    }

    //Set color of alternatives to display correctness of the answers.
    if (radioLabels) {
      for (let i = 0; i < radioLabels.length; i++) {
        const singleLabel = radioLabels[i];
        const radioCircle = singleLabel.children[0] as HTMLElement

        if (activeSlideIndex != undefined) {
          if (i === questions[activeSlideIndex].correctAlternativeIndex) {
            radioCircle.style.color = 'green'
            singleLabel.style.color = 'green'
          } else {
            radioCircle.style.color = 'red'
            singleLabel.style.color = 'red'
          }
        }
      }
    }
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
                color="warning"
                disabled
                type="submit">
                Lås svar
              </Button>
            </FormControl>
          </form>
          {index === selectedQuestions.length ?
            <Button
              onClick={() => navigate('result')}
              color="warning"
              variant="outlined"
              sx={{
                position: 'absolute',
                bottom: '5rem'
              }}>Resultat</Button> :
            null
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Quiz;