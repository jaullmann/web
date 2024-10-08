import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.main`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;  
  width: 100%;  
  min-height: 100dvh;  
  
  #banner-section {
    margin: min(17rem, 8vw + 9rem) auto 3rem;
    width: 100%;     
    
    height: 16.25rem;   

    @media (max-width: 93.5rem) {
      padding: 0 4rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      margin: 12rem auto 3.875rem;
      height: 12rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding-left: 1.75rem;
      padding-right: 1.75rem;      
      margin: 11rem auto 3.875rem;
      height: 7.5rem;
    }

    animation: fade-in 1.3s ease-out forwards;    

  }
  
  #banner-slogan {    
    margin: auto;    
    padding: 0 5% 0 10%;

    height: 100%; 
    max-width: 85.5rem;
    border-radius: .5rem;

    display: flex;
    flex-direction: column;   
    align-items: flex-end;  
    justify-content: center;
    gap: .5rem;    

    background: ${({ theme }) => theme.COLORS.GRADIENTS_100};    
    
    position: relative;       

    h1 {      
      width: max-content;        
      ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
      font-size: clamp(1.3rem, 1.2rem + 1.5vw, 3.5rem);
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_100}; 
      z-index:2;       
    }

    h3 {          
      text-align: center;
      ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}
      font-size: clamp(.5rem, .5rem + .6vw, 2rem);
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      z-index:2;      
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      height: 7.5rem;   
      padding: 0 10% 0 20%;      
    }

    #banner-image {
      height: min(25.375rem, 20vw + 8rem);      
      position: absolute;
      left: -2.5rem;
      bottom: 0;

      @media (max-width: ${DEVICE_BREAKPOINTS.LG}) { 
        height: min(15rem, 11vw + 8rem);
        left: -2.2rem;        
      }   
      
      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) { 
        height: min(9.3rem, 6vw + 6rem);
        left: max(-2.8rem, -1.8vw);
      }        
      
    }  
  }   

  // animation effects

  .card-section {    
    animation: fade-in 3s linear;
    animation-timeline: view();
    animation-range: entry 10% cover 20%;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding-left: 1.75rem;
        padding-right: 1.75rem;
    }
  }

`;