import { useState } from 'react'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import { Wrapper } from './NavBar.styles'

const NavBar = () => {
  const [openNavBar, setOpenNavBar] = useState(false)
  
  return (
    <Wrapper>
      <ul>
        <button onClick={() => setOpenNavBar(!openNavBar)} >
          <img src="./icons/menu-suspenso.png" alt='menu' />
        </button>
        {openNavBar && <DropdownMenu />}
        <li
          style={{
            color: '#0b0b0b',
            textDecoration: 'underline',
            textDecorationColor: '#f08a2a',
            textDecorationThickness: '0.2em',
            textUnderlinePosition: 'under',
          }}
        >
          Home
        </li>
        <li>Eventos</li>
        <li>Usuários</li>
        <li>Relatórios</li>
      </ul>
    </Wrapper>
  )
}

export default NavBar
