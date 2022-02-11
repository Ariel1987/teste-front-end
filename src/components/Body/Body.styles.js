import styled, { css } from 'styled-components'

export const Line = styled.section`
  ${({ theme }) => css`
    background-color: #f08a2a;
    height: 20vh;
  `}
`

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16vh;
    margin-top: -10vh;
    margin-left: 10vw;
    z-index: 10;
    background-color: white;
    width: 80%;
    
    div {
      display: flex;
    }
  `}
`

export const OptionsWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 5vh;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 80px;
      border-radius: 32px;
      background-image: linear-gradient(#ffffff, #ebebeb);
      margin-right: 5vh;
      justify-content: space-between;
      gap: 20px;

      p {
        font-weight: ${theme.font.weight.bold};
        color: #4b4b4b;
      }
    }
    
  `}
`