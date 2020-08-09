import React from "react";
import Whirligig from "react-whirligig";
import "../assets/styles/components/Carousel.scss";

const Carousel = ({ children, slideIndex }) => {
  let whirligig;
  const next = () => whirligig.next();
  const prev = () => whirligig.prev();
  return (
    <div className="carousel">
      <div className="container-buttons">
        <button onClick={prev} className="Button-Prev">
          <i className="fas fa-angle-left"></i>
        </button>
        <button onClick={next} className="Button-Next">
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
      <div className="carousel__container">
        <Whirligig
          visibleSlides={5}
          preventScroll={true}
          infinite={true}
          slideTo={slideIndex}
          ref={(_whirligigInstance) => {
            whirligig = _whirligigInstance;
          }}
        >
          {children}
        </Whirligig>
      </div>
    </div>
  );
};

export default Carousel;