import { forwardRef } from 'react'
import Link from 'next/link'

import { NavLinks } from '@data/links'

import {
  StyledMenu,
  StyledMenuCloseButton,
  StyledMenuItems,
  StyledMenuItem,
} from './style'

const Menu = forwardRef(({ handleMenuClose }, ref) => (
  <StyledMenu ref={ref}>
    <StyledMenuCloseButton ref={ref} onClick={handleMenuClose}>
      KAPAT
    </StyledMenuCloseButton>
    <StyledMenuItems>
      {NavLinks.map(({ title, link }) => (
        <StyledMenuItem onClick={handleMenuClose} key={title}>
          <Link href={link}>{title}</Link>
        </StyledMenuItem>
      ))}
    </StyledMenuItems>
  </StyledMenu>
))

Menu.displayName = 'Menu'

export default Menu
