import styled from "styled-components";

export const Container = styled.div`    
    width: max-content;
    height: 2rem;
    padding: .625rem 1rem;
    border-radius: 0.4rem; 

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    opacity: 0;
    animation: grow .3s ease-out forwards;
        
    > p {
        ${({ theme }) => theme.FONTS.ROBOTO_REGULAR};
        font-size: .9rem; 
        width: max-content;
    }

    border: ${({ theme, $toAdd }) => $toAdd ? 
            '1px dashed' + theme.COLORS.LIGHT_600 : 
            theme.COLORS.LIGHT_600 
        };

    background-color: ${({ theme, $toAdd }) => $toAdd ? 
            'transparent' : 
            theme.COLORS.DARK_700 
        };
    color: ${({ theme, $toAdd }) => $toAdd ? 
            theme.COLORS.LIGHT_500 : 
            theme.COLORS.LIGHT_500 
        };
    
    button {
        width: min-content;
        height: min-content;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    svg {
        fill: ${({ theme, $toAdd }) => $toAdd ? 
            theme.COLORS.LIGHT_500 : 
            theme.COLORS.LIGHT_500 
        };
        cursor: pointer;
    }
`