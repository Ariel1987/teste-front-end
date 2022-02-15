import Login from './components/Login/Login'
import NavBar from './components/NavBar/NavBar'
import { LoginWrapper, Wrapper } from './Header.styles'

const Header = () => {
  return (
    <Wrapper>
      <a href='/'><img src="./icons/logo.png" alt="logo" /></a>
      <NavBar />
      <LoginWrapper>
        <Login />
      </LoginWrapper>
    </Wrapper>
  )
}

export default Header
