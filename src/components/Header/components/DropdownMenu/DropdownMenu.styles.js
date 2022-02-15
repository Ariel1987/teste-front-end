import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: absolute;
    top: 12vh;
    right: 10vw;
    background-color: ${theme.colors.background};
    padding: 20px;
    border-top: solid ${theme.colors.main};
    border-radius: 2px;
    box-shadow: 2px 2px #ebebeb;

    li {
      display: flex;
      justify-content: flex-start;
      padding-top: 10px;
      padding-bottom: 5px;
      border-bottom: solid #ebebeb 1px;
      align-items: center;

      a {
        text-decoration: none;
        color: #9b9b9b;
      }

    }
  `}
`

export const LogoutWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    text-align: end;
    align-items: center;
    padding-top: 10px;

    button {
      color: ${theme.colors.main};
    }

    img {
      padding-right: 5px;
    }
  `}
`
