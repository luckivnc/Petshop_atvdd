import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import Banner01 from '../imagens/banner.jpg';
import Banner02 from '../imagens/Banner-01.jpg';
import Banner03 from '../imagens/banho-tosa.jpg';


function Banner(){
    return(
    <Carousel>
    <Carousel.Item>
      <img class = 'bane' src= { Banner01 } />
    </Carousel.Item>

    <Carousel.Item>
      <img class = 'bane' src= { Banner02 } />
    </Carousel.Item>

    <Carousel.Item>
      <img class = 'bane' src= { Banner03 } />
    </Carousel.Item>

    </Carousel>
    )
}

export default Banner