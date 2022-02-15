import { useState } from 'react'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import Menu from '../Menu/Menu'
import { DropDownMenuWrapper, MenuWrapper, Wrapper } from './NavBar.styles'

const NavBar = () => {
  const [openNavBar, setOpenNavBar] = useState(false)

  return (
    <Wrapper>
      <button onClick={() => setOpenNavBar(!openNavBar)}>
        <img src="./icons/menu-suspenso.png" alt="menu" />
      </button>
      {openNavBar && (
        <DropDownMenuWrapper>
          <DropdownMenu close={() => setOpenNavBar(false)} />
        </DropDownMenuWrapper>
      )}
      <MenuWrapper>
        <Menu />
      </MenuWrapper>
    </Wrapper>
  )
}

export default NavBar
