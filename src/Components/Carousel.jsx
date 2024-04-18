import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
    const [index, setIndex] = useState(0);

    const handlePrevClick = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const handleNextClick = () => {
        if (index < images.length - 1) {
            setIndex(index + 1);
        }
    };

    return (
        <div>
            <div className="bg" style={{backgroundImage: `url(${images[index].img})`}}>
                <div className="left" onClick={handlePrevClick}>
                    <ArrowBackIosIcon />
                </div>
                <div className="titles">
                    <h1 className="title">{images[index].title}</h1>
                    <h2 className="sub">{images[index].subtitle}</h2>
                </div>
                <div className="right" onClick={handleNextClick}>
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </div>
    );
};

export default Carousel;