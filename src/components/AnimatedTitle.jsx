import React from 'react';
import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import 'tailwindcss/tailwind.css'; 


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 3;
  }
`;


const AnimatedH1 = styled.h1`
  @media (min-width: 640px) {
    font-size: 2.5rem;
  }
  @media (min-width: 768px) {
    font-size: 4xl;
  }
  @media (min-width: 1024px) {
    font-size: 2xl;
  }
  @media (min-width: 1280px) {
    font-size: 4xl;
  }
  @media (min-width: 1536px) {
    font-size: 4xl;
  }

  font-weight: extrabold;
  text-transform: capitalize;
  
  padding-top: 2rem;
  padding-bottom: 1rem;
  color: fuchsia-700;
  opacity: 0; /* Start with opacity 0 */
  animation: ${fadeIn} 1s ease-in-out forwards; /* Apply the fade-in animation */
`;

const AnimatedTitle = ({ title }) => {
  return (
    <CSSTransition
      in={true}
      timeout={1000} 
      classNames="fade"
      unmountOnExit
    >
      <AnimatedH1 className="text-4xl lg:text-4xl sm:text-2xl xs:text-xl xs:py-4 font-extrabold py-7 text-fuchsia-700">
        {title}
      </AnimatedH1>
    </CSSTransition>
  );
};

export default AnimatedTitle;

