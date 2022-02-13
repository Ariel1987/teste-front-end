import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 5vh;
    padding-bottom: 5vh;
    background-color: white;
  `}
`

