import Login from '../Login/Login'
import Menu from '../Menu/Menu'
import { LogoutWrapper, Wrapper } from './DropdownMenu.styles'

const DropdownMenu = (props) => {
  return (
    <Wrapper>
      <Menu close={props.close}/>
      <LogoutWrapper>
        <Login />
      </LogoutWrapper>
    </Wrapper>
  )
}

export default DropdownMenu
