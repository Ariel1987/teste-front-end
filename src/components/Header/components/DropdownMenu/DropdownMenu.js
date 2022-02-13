import Menu from '../Menu/Menu'
import { LogoutWrapper, Wrapper } from './DropdownMenu.styles'

const DropdownMenu = () => {
  return (
    <Wrapper>
      <Menu />
      <LogoutWrapper>
        <img src="icons/user.png" alt="user-logo" />
        <div>
          <p>Igor Gonçalves</p>
          <button>Desconectar</button>
        </div>
      </LogoutWrapper>
    </Wrapper>
  )
}

export default DropdownMenu
