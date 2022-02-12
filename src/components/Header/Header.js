import Login from './components/Login/Login'
import NavBar from './components/NavBar/NavBar'
import { Wrapper } from './Header.styles'

const Header = () => {
  return (
    <Wrapper>
      <img src="./icons/logo.png" alt="logo" />
      <NavBar />
      <Login />
    </Wrapper>
  )
}

export default Header
