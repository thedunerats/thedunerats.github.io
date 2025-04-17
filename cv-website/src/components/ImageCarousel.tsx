import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/ImageCarousel.css';


import { Graphic } from '../models/Graphic';

// THIS INTERFACE PASSES INTO THE GRAPHIC LIST COMPONENT
// IT ACTS AS A LIST OF GRAPHICS
// REMEMBER, YOU CAN'T INSTANTIATE IT IF YOU CALL IT AS AN INTERFACE.
// THIS IS MERELY A PASS THROUGH TO MIMIC A STRUCTURAL DIRECTIVE
interface IProps {
   graphics: Graphic[]
}

// THIS IS THE INTERFACE FOR THE BASE GRAPHIC COMPONENT
// THIS IS NEEDED TO PASS AN OBJECT INTO A COMPONENT THROUGH TYPESCRIPT

function ImageCarousel({ graphics }: IProps) {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", maxHeight: "35vh" }}>
      <div style={{ width: "80%", maxWidth: "700px", maxHeight: "35vh" }}>
        <Slider {...settings}>
          {graphics.map((src, index) => (
            <div key={index}>
              <img src={src.source} alt={`Slide ${index + 1}`} style={{ width: "100%", borderRadius: "12px", padding: "0.25rem", maxHeight: "35vh" }} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;