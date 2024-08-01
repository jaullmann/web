import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
    * {    
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        div, h1, h2, h3, h4 {
            border: .1px dotted cyan;
        }
        a {
            border: .1px dotted lightcoral;
        }
        section {
            border: 1px dashed white;
        }
        label {
            border: 1px dashed lightgreen;
        }
        input {
            border: 1px dashed lightseagreen;
        }
        img {
            border: .1px dotted yellow;
        }
        svg {
            border: .1px dotted orange;
        }
    }

    :root {        
        font-size: 16px;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            font-size: 12px;
        } 
    }

    body {  
        min-height: 100svh;
        position: relative;              
        
        background-color: ${({ theme }) => theme.COLORS.DARK_100};
        color: ${({ theme }) => theme.COLORS.LIGHT_100}; 
        
        -webkit-font-smoothing: antialiased; 
        overflow-y: scroll;        
        
        &::-webkit-scrollbar {
            width: 0;
            background: transparent;
            overflow: scroll;
            overflow: overlay;
            }
        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.COLORS.DARK_1000};
            border-radius: 0px;
        }

        @media(min-width: ${DEVICE_BREAKPOINTS.LG}) {            
            &::-webkit-scrollbar {
                width: 0;
            }
        }  
        
    }         

    body, input, button, textarea {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1rem;
        outline: none;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100}; 
    }

    button, a {
        background-color: initial; /* or 'transparent' */
        border: none;
        outline: none;
        box-shadow: none;

        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.8);
    }
`