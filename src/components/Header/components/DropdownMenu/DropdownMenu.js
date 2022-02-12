import { Wrapper } from './DropdownMenu.styles'

const DropdownMenu = () => {
  return (
    <Wrapper>
      <ul>
        <li>Home</li>
        <li>Eventos</li>
        <li>Usuários</li>
        <li>Relatórios</li>
        <li style={{color: '#f08a2a'}}>
          <img src="icons/user.png" alt="user-logo" />
          Desconectar
        </li>
      </ul>
    </Wrapper>
  )
}

export default DropdownMenu
