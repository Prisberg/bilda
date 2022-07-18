import { Box, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Typography } from "@mui/material";
import { useQuizContext } from "../utils/Context";
import "../utils/style.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Quiz() {
  const { selectedQuestions } = useQuizContext()

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
              <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Typography>{question.description}</Typography>
                <Typography>Fråga nummer {index += 1}</Typography>
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
          </SwiperSlide>
        ))}
      </Swiper>
  );
}

export default Quiz;