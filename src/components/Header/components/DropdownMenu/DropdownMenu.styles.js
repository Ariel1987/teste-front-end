import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: absolute;
    top: 12vh;
    right: 10vw;
    background-color: white;
    padding: 20px;
    border-top: solid #f08a2a;
    border-radius: 2px;
    box-shadow: 2px 2px #ebebeb;

    li {
      display: flex;
      justify-content: flex-end;
      padding-top: 10px;
      padding-bottom: 5px;
      border-bottom: solid #ebebeb 1px;
      align-items: center;

      :hover {
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
      color: #f08a2a;
    }

    img {
      padding-right: 5px;
    }

    }
  `}
`
