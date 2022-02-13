import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    img {
      width: 32px;
      height: auto;
    }

    button {
      border: none;
      background-color: transparent;
    }

    @media (min-width: 842px) {
      button {
        display: none;
      }

  `}
`

export const MenuWrapper = styled.section`
  ${({ theme }) => css`
    display: none;

    @media (min-width: 842px) {
      display: block;

  `}
`

export const DropDownMenuWrapper = styled.section`
  ${({ theme }) => css`
    display: block;

    @media (min-width: 842px) {
      display: none;

  `}
`