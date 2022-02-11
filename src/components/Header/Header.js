import { NavBarWrapper, UserWrapper, Wrapper } from './Header.styles'

const Header = () => {
  return (
    <Wrapper>
      <img src="./icons/logo.png" alt="logo" />
      <NavBarWrapper>
        <p
          style={{
            color: '#0b0b0b',
            textDecoration: 'underline',
            textDecorationColor: '#f08a2a',
            textDecorationThickness: '0.2em',
            textUnderlinePosition: 'under'
          }}
        >
          Home
        </p>
        <p>Eventos</p>
        <p>Usuários</p>
        <p>Relatórios</p>
      </NavBarWrapper>
      <UserWrapper>
        <img src="icons/user.png" alt="user-logo" />
        <div>
          <p>Igor Gonçalves</p>
          <button>Desconectar</button>
        </div>
      </UserWrapper>
    </Wrapper>
  )
}

export default Header
