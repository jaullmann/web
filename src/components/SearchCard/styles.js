import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    height: 6.5rem;
    min-width: 15rem;                
    width: 100%;          

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: .8125rem;

    > img {
        height: 4.5rem;
        border-radius: 50%;
        cursor: pointer;
    }

    > .default-image {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 4.5rem;
        width: 4.5rem;        
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
        border-radius: 50%;        
        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        > svg {
            width: 100%;
            height: 100%;
            padding: .8rem;

            fill: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    > div {        
        display: flex;
        flex-direction: column;
        justify-content: flex-start;                

        > h2 {
            width: fit-content;
            ${({ theme }) => theme.FONTS.POPPINS_MEDIUM}; 
            font-size: clamp(1.2rem, .5rem + .9vw, 1.5rem);
            color: ${({ theme }) => theme.COLORS.LIGHT_300};            
            line-height: 160%; 

            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
                    
            cursor: pointer;          
        }
    }

`
