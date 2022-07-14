import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import RevSlider, { Slide, Caption } from 'react-rev-slider';

const Hero = () => {
  const config = {
    delay: 9000,
    startwidth: 1170,
    startheight: 500,
    hideThumbs: 10,
    fullWidth: 'on',
    forceFullWidth: 'on',
  };

  return (
    <>
      <RevSlider config={config}>
        <Slide
          src="assets/images/slider/1.jpg"
          alt="slidebg1"
          data-bgfit="cover"
          data-bgposition="left top"
          data-bgrepeat="no-repeat"
          slideProperties={{
            'data-transition': 'fade',
            'data-slotamount': '7',
            'data-masterspeed': '1500',
          }}
        >
          <Caption
            class="tp-caption skewfromrightshort fadeout"
            data-x="85"
            data-y="224"
            data-speed="500"
            data-start="1200"
            data-easing="Power4.easeOut"
          >
            This is a caption
          </Caption>
        </Slide>
        <Slide
          src="assets/images/slider/2.jpg"
          alt="slidebg1"
          data-bgfit="cover"
          data-bgposition="left top"
          data-bgrepeat="no-repeat"
          slideProperties={{
            'data-transition': 'fade',
            'data-slotamount': '7',
            'data-masterspeed': '1500',
          }}
        >
          <Caption
            class="tp-caption skewfromrightshort fadeout"
            data-x="85"
            data-y="224"
            data-speed="500"
            data-start="1200"
            data-easing="Power4.easeOut"
          >
            This is a caption
          </Caption>
        </Slide>
      </RevSlider>
    </>
  );
};

export default Hero;
