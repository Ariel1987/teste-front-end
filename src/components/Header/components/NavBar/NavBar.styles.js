import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    li {
      display: none;
    }

    img {
      width: 32px;
      height: auto;
    }

    button {
      border: none;
      background-color: transparent;
    }

    @media (min-width: 842px) {
      ul {
        display: flex;
        list-style: none;

        button {
          display: none;
        }
      }

      li {
        display: block;
        padding-right: 40px;
        color: #9b9b9b;

        :hover {
          color: #0b0b0b;
          cursor: pointer;
        }
      }
    }
  `}
`
