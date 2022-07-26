import { Button, Paper, SxProps, Typography } from "@mui/material";
import { CSSProperties, useState } from "react";
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


export default function FlashQuiz() {
  let { selectedQuestions } = useQuizContext()
  const navigate = useNavigate()
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number>()
  const [showAnswer, setShowAnswer] = useState(false)

  function currentSlide(swiper: any) {
    setShowAnswer(false)
    document.documentElement.style.setProperty('--swiper-theme-color', '#ffa726');
    window.scrollTo(0, 0);
    setCorrectAnswerIndex(selectedQuestions[swiper.activeIndex].correctAlternativeIndex)
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
        <SwiperSlide className="center" key={index}>
          <Paper
            sx={{
              flexDirection: 'column',
              marginBottom: '5rem',
              padding: '1rem',
              width: {
                xs: '85%',
                md: '70%',
                lg: '50%',
                xxl: '40%'
              },
            }}
            className="swiperPaper"
            elevation={10}>
            <Typography>Fråga {index += 1} av {selectedQuestions.length}</Typography>
            {question.image ? <img style={imageStyle} src={question.image} /> : null}
            <Typography sx={textStyle}>{question.description}</Typography>
            {showAnswer ?
              <>
                <Button
                  sx={buttonStyle}
                  variant="outlined"
                  color="warning"
                  onClick={() => setShowAnswer(false)}>
                  Göm svar
                </Button>
                <Typography sx={textStyle}>
                  {typeof correctAnswerIndex === 'number' ? question.alternatives[correctAnswerIndex] : 'Svar hittades inte'}
                </Typography>
              </>
              : <Button
                sx={buttonStyle}
                variant="outlined"
                color="warning"
                onClick={() => setShowAnswer(true)}>
                Visa svar
              </Button>
            }
          </Paper>
        </SwiperSlide>
      ))}
    </Swiper >
  );
}

const imageStyle: CSSProperties = {
  width: '200px',
  height: '200px'
}

const textStyle: SxProps = {
  padding: '1rem 0',
  width: { xs: '85%', md: '70%', xxl: '40%' },
  whiteSpace: 'pre-wrap',
  fontFamily: 'Fanwood Text',
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