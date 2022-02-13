import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`

    @media (min-width: 842px) {
      ul {
        display: flex;
        list-style: none;
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
