import { Link as NavLink } from 'react-router-dom'
import { Wrapper } from './Menu.styles'
import { useLocation } from 'react-router-dom'

const Menu = (props) => {
  const location = useLocation()

  const { pathname } = location

  const splitLocation = pathname.split('/')

  return (
    <Wrapper>
      <li>
        <NavLink
          className={splitLocation[1] === '' ? 'active' : ''}
          to="/"
          onClick={props.close}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={splitLocation[1] === 'eventos' ? 'active' : ''}
          to="eventos"
          onClick={props.close}
        >
          Eventos
        </NavLink>
      </li>
      <li>
        <NavLink
          className={splitLocation[1] === 'usuarios' ? 'active' : ''}
          to="usuarios"
          onClick={props.close}
        >
          Usuários
        </NavLink>
      </li>
      <li>
        <NavLink
          className={splitLocation[1] === 'relatorios' ? 'active' : ''}
          to="relatorios"
          onClick={props.close}
        >
          Relatórios
        </NavLink>
      </li>
    </Wrapper>
  )
}

export default Menu
