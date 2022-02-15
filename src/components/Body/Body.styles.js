import styled, { css } from 'styled-components'

export const Line = styled.section`
  ${({ theme }) => css`
    background-color: #f08a2a;
    height: 155px;
    width: 100%;
  `}
`

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: -77px;
    background-color: white;
    width: 80%;
    padding: 24px;

    div {
      display: flex;
    }

    @media (min-width: 842px) {
      padding: 16vh;
    }
  `}
`

export const OptionsWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 40px;
    flex-wrap: nowrap;
    align-items: initial;
    gap: 40px;
    width: 70%;

    div {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      padding: 60px;
      border-radius: 32px;
      background-image: linear-gradient(#ffffff, #ebebeb);
      margin-right: 0;
      justify-content: space-between;
      text-decoration: none;

      :hover {
        cursor: pointer;
      }

      p {
        font-weight: ${theme.font.weight.bold};
        color: #4b4b4b;
        padding-top: 10px;
      }
    }

    @media (min-width: 842px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  `}
`
