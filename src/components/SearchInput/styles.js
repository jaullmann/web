import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.88rem;

  height: 3rem;
  width: 40%;
  padding: 0.75rem 1.5rem;
  border-radius: 0.3rem;  

  font-size: 1.5rem;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  background-color: ${({ theme}) => theme.COLORS.DARK_900};
`

export const Input = styled.input`
  width: 100%;  

  ${({ theme}) => theme.FONTS.ROBOTO_REGULAR};
  font-size: 1rem;
  font-weight: 400;   

  background: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};  

  overflow: hidden;
    text-overflow: ellipsis;
  
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};     
  }

  &:hover {
    filter: brightness(1.2);    
  }
`