import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  width: max-content;
  /* height: 2rem; */
  /* padding: 0.25rem 0; */
  
  align-items: center;
  justify-content: center;  
  gap: 0.9rem;

  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_300}; 

  > svg {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;

    fill: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  > h3 {      
    /* height: 2rem;     */
    text-align: center;      
    font-size: 1.6rem;
    ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}
    line-height: 160%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1rem;
    ${({ theme }) => theme.FONTS.ROBOTO_REGULAR}
  }
`

