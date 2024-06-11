import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Section = styled.div`    
    margin: auto;
    padding: 0 4rem;
    width: 100%;

    position: relative;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};   
    
    > .desktop {
        margin: auto;
        max-width: 85.5rem;
        height: 6.5rem;

        display: flex;
        align-items: center;    
        justify-content: space-between;
        gap: 2rem;

        padding: 0;
    
        #sign-out {
            display: flex;
            justify-content: center;  
            width: 2rem;                        
        }

        > button {
            width: 13.5rem;
            padding: 0;
        }        
    }
    
    > .mobile {
        margin: auto;
        display: none;
        align-items: center;    
        justify-content: space-between;            
        
        margin-top: 3.75rem;
        margin-bottom: 2rem;
        padding: 0 2rem;
        
        display: none;

        #side-menu {
            display: flex;
            justify-content: center;            
        }

        > img {
            width: 1.5rem;
        }

        > div {
            width: 2rem;
            height: 2rem;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        > .desktop {
            display: none;
        } 

        > .mobile {
            display: flex;
        } 
    }

`