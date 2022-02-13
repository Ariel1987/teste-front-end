import Login from './components/Login/Login'
import NavBar from './components/NavBar/NavBar'
import { LoginWrapper, Wrapper } from './Header.styles'

const Header = () => {
  return (
    <Wrapper>
      <img src="./icons/logo.png" alt="logo" />
      <NavBar />
      <LoginWrapper>
        <Login />
      </LoginWrapper>
    </Wrapper>
  )
}

export default Header
