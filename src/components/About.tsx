import React from "react";

import "antd/dist/antd.css";
import { Carousel } from "antd";
import {
  GeneralWrapper,
  GeneralHeader,
  GeneralBody,
  Carouselh3,
  CarouselWrapper,
  StyledImage,
} from "../styles";

import silentBack from "../localImages/whiteSilent.png";
import monkeyBack from "../localImages/whiteMonkey.png";

const About = () => {
  return (
    <GeneralWrapper>
      <Carousel
        autoplay
        pauseOnHover={false}
        autoplaySpeed={4000}
        speed={1500}
        style={{ marginBottom: "3%", maxWidth: "100%" }}
      >
        <CarouselWrapper>
          <Carouselh3>
            <StyledImage src={silentBack} />
          </Carouselh3>
        </CarouselWrapper>
        <CarouselWrapper>
          <Carouselh3>
            <StyledImage src={monkeyBack} />
          </Carouselh3>
        </CarouselWrapper>
      </Carousel>
      <GeneralHeader>
        Bringing affordable, experimental cocktails for everyone.
      </GeneralHeader>
      <hr style={{ marginRight: "5%", marginLeft: "5%", marginBottom: "2%" }} />
      <h3 style={{ marginLeft: "2%", marginBottom: "2%", textAlign: "center" }}>
        This is a passion project from someone who likes their drinks.
      </h3>
      <GeneralBody>
        Cocktails are way too expensive, so here's an opportunity to get some at
        a cheaper price right in the comforts of your home.
      </GeneralBody>
      <GeneralBody>
        The goal are barkeep is to replicate some of our favorite cocktails from
        around Singapore for a considerably cheaper price, and from time to
        time, include some of our own concoctions.
      </GeneralBody>
      <h3 style={{ textAlign: "center" }}>
        We aren't bar professions - just a team of cocktail lovers
      </h3>
      <GeneralBody style={{ marginBottom: "10%" }}>
        Don't worry! Our consistent testing and sampling of cocktails with
        experiment and feedback sessions help to ensure that the cocktails you
        get are to our standards.
      </GeneralBody>
    </GeneralWrapper>
  );
};

export default About;
