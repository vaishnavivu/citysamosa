import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled-components for Container and Image Wrapper

const GalleryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  transition: background-color 1s ease;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 287px;
  height: 346px;
  overflow: hidden;
  border-radius: 20px;
  border: thick double ${(props) => props.bgColor};
  box-shadow: ${(props) => props.bgColor} 0px 30px 60px -12px,
    ${(props) => props.bgColor} 0px 18px 36px -18px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s ease;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const images = [
  {
    src: "../ASB_4911.png",
    color: "rgb(255, 204, 4,0.2)",
    text:
      "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,",
  },
  {
    src: "../lwl6c7.jpg",
    color: "#C0D6DF",
    text:
      " Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32",
  },
  {
    src: "../ASB_4911.png",
    color: " rgba(212, 33, 33, 0.1)",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, rem",
  },
];

export default function AnimatedGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid">
      <GalleryContainer
        bgColor={images[currentIndex].color}
        className="pt-5 pb-5 mt-0 row"
      >
        <div className="centerheading"><h3 className="text-center mb-4">
      Our Founder Team
    </h3>
          </div>
        <ImageWrapper className="col-sm-6">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Slide ${index}`}
              class="responsive"
              style={{ opacity: index === currentIndex ? 1 : 0 }}
            />
          ))}
        </ImageWrapper>
        <div className="col-sm-1"></div>

        <div className="col-sm-5 mt-5">
          <h2 className="text-center mb-4 mainheading">
            Chandrashkhar sir
          </h2>
          <p className="subheading justify">
          {images[currentIndex].text}
          </p>
          
        </div>
      </GalleryContainer>
    </div>
  );
}
