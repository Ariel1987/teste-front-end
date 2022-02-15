import styled, { css } from 'styled-components'

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    .active {
      text-decoration: underline #f08a2a;
      text-decoration-thickness: 15%;
      text-underline-offset: 6px;
      color: #3f3f3f;
      font-weight: ${theme.font.weight.bold}
    }

    @media (min-width: 842px) {
      display: flex;
      list-style: none;
      justify-content: space-between;

      li {
        display: block;
        margin-right: 40px;
      }

      li: last-of-type {
        margin-right: 0;
      }

      a {
        text-decoration: none;
        color: #9b9b9b;
      }

      a:hover {
        color: #3f3f3f;
        font-weight: ${theme.font.weight.bold};
        cursor: pointer;
      }
    }
  `}
`
