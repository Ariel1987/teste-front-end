import Login from '../Login/Login'
import Menu from '../Menu/Menu'
import { LogoutWrapper, Wrapper } from './DropdownMenu.styles'

const DropdownMenu = () => {
  return (
    <Wrapper>
      <Menu />
      <LogoutWrapper>
        <Login />
      </LogoutWrapper>
    </Wrapper>
  )
}

export default DropdownMenu
