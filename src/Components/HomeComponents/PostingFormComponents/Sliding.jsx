import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'







function Sliding
() {
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      }






    return (
      <div>
  
        <Slider {...settings}>
        <div className='  h-[350px] sm:h-[500px] m-w-[700px] bg-gray-600 mt-4 mb-4'>
        <img src='/Images/close.png'  className='w-full h-full object-cover' alt='PostImg' />
      </div>
      <div className='  h-[350px] sm:h-[500px] m-w-[700px] bg-gray-600 mt-4 mb-4'>
        <img src='/Images/post.png'  className='w-full h-full object-cover' alt='PostImg' />
      </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  
}
export default Sliding;