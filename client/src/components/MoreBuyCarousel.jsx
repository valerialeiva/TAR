import React, { Component } from 'react'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import logoAbril from '../img/logo-Abril.jpg';

class MoreBuyCarousel extends Component {
    render() {
        return (

          <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={3}
        >
        <Slider>
          <Slide index={0}><img src={logoAbril} width="100" height="100"  alt="" />I am the first Slide.</Slide>
          <Slide index={1}><img src={logoAbril} width="100" height="100"  alt="" />I am the second Slide.</Slide>
          <Slide index={2}><img src={logoAbril} width="100" height="100"  alt="" />I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
        
        )
    }
}

export default MoreBuyCarousel