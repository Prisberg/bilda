import { Box, Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, SxProps, Typography } from "@mui/material";
import { CSSProperties, useEffect, useState } from "react";
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


export default function ChoiceQuiz() {
  let { selectedQuestions, setScore, score } = useQuizContext()
  const navigate = useNavigate()
  const [submitButton, setSubmitButton] = useState<HTMLButtonElement>()
  const [checkedRadio, setCheckedRadio] = useState<HTMLInputElement>()
  const [correctAnswer, setCorrectAnswer] = useState<number>()
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)
  const [amountOfSubmittedAnswers, setAmountOfSubmittedAnswers] = useState<number>(0)
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
    window.scrollTo(0, 0);
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

    //Count the amount of submitted answers.
    setAmountOfSubmittedAnswers(amountOfSubmittedAnswers + 1)

    //Checks if your answer was correct.
    if (checkedRadio) {
      if (parseInt(checkedRadio.value) === correctAnswer) {
        setScore(score + 1)
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
            radioCircle.style.color = '#10ec13'
            singleLabel.style.color = '#10ec13'
          } else {
            radioCircle.style.color = '#ff0000'
            singleLabel.style.color = '#ff0000'
          }
        }
      }
    }
  }

  function result() {
    if (amountOfSubmittedAnswers < selectedQuestions.length) {
      if (window.confirm('Du har inte svarat på alla frågor, vill du gå till resultatet ändå?')) {
        navigate('result');
      }
    } else {
      navigate('result')
    }
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      className='swiperStyle'
      navigation
      mousewheel
      pagination={{ clickable: true }}
      onSwiper={(swiper) => currentSlide(swiper)}
      onSlideChange={(swiper) => currentSlide(swiper)}
    >
      {selectedQuestions.map((question, index) => (
        <SwiperSlide className="centerColumn" key={index}>
          <form className='swiperForm' onSubmit={(e) => handleSubmit(e)}>
            <Paper className="swiperPaper" elevation={10}>
              <Typography>Fråga {index += 1} av {selectedQuestions.length}</Typography>
              {question.image ? <img style={imageStyle} src={question.image} /> : null}
              <Typography sx={textStyle}>{question.description}</Typography>
              <FormControl
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <FormLabel color="warning" id="demo-radio-buttons-group-label">Svarsalternativ:</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  onChange={handleRadioChange}
                  name="radio-buttons-group"
                >
                  {question.alternatives.map((item, answerIndex) => (
                    <FormControlLabel
                      className="center"
                      sx={formControlStyle}
                      key={item}
                      value={answerIndex}
                      control={<Radio color="warning" />}
                      label={<Typography sx={textStyle}>{item}</Typography>} />
                  ))
                  }
                </RadioGroup>
                <Box sx={buttonBoxStyle}>
                  <Button
                    color="warning"
                    disabled
                    type="submit">
                    Lås svar
                  </Button>
                  {index === selectedQuestions.length ?
                    <Button
                      onClick={() => result()}
                      color="warning"
                      variant="outlined"
                      sx={buttonStyle}>Räkna ut resultat</Button> :
                    null
                  }
                </Box>
              </FormControl>
            </Paper>
          </form>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const imageStyle: CSSProperties = {
  width: '200px',
  height: '200px'
}

const textStyle: SxProps = {
  padding: '1rem 0',
  width: { xs: '85%', md: '70%', lg: '50%', xxl: '40%' },
  fontSize: { xs: '1.2rem', xl: '1.5rem' },
  whiteSpace: 'pre-wrap',
  fontFamily: 'Fanwood Text',
}

const buttonBoxStyle: SxProps = {
  display: 'flex',
  justifyContent: 'space-evenly',
  gap: '1rem',
  marginTop: '1rem'
}

const formControlStyle: SxProps = {
  transition: 'border 300ms',
  border: { xs: '1px solid #6d6c6c', lg: 'none' },
  borderRadius: '5px',
  marginBottom: '1rem',
  marginLeft: '0',
  '&:active': { borderColor: '#ffa726', }
}

const buttonStyle: SxProps = {
  position: 'relative',
  background: '#ffa726',
  color: 'black',
  fontWeight: '600',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#ff9100',
  }
}