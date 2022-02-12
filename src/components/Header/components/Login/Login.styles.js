import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: none;

    @media (min-width: 842px) {
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-left: 10px;
      }

      button {
        border: none;
        background-color: transparent;
        color: #f08a2a;
        text-decoration: underline;
      }
    }
  `}
`
