import { useState, useRef } from 'react'
import gsap from 'gsap'

import Menu from './Menu'
import { StyledNavbar, StyledNavbarItem } from './style'

const Navbar = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  const overlayRef = useRef(null)
  const menuRef = useRef(null)

  const handleMenuOpen = () => {
    if (isAnimating) return
    setIsAnimating(true)

    const menuItems = menuRef?.current?.childNodes[1]

    gsap
      .timeline({
        onComplete: () => setIsAnimating(false),
      })
      // Start - Overlay first half
      .set(overlayRef.current.firstChild, {
        attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' },
      })
      .to(
        overlayRef.current.firstChild,
        {
          duration: 0.8,
          ease: 'power4.in',
          attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' },
        },
        0
      )
      .to(overlayRef.current.firstChild, {
        duration: 0.3,
        ease: 'power2',
        attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
      })
      // Stop - Overlay first half
      // Start - Menu background
      .to(menuRef.current, {
        opacity: 1,
        visibility: 'visible',
      })
      // End - Menu background
      // Start - Overlay second half
      .set(overlayRef.current.firstChild, {
        attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
      })
      .to(overlayRef.current.firstChild, {
        duration: 0.3,
        ease: 'power2.in',
        attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' },
      })
      .to(overlayRef.current.firstChild, {
        duration: 0.8,
        ease: 'power4',
        attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
      })
      // End - Overlay second half
      // Start - Menu items
      .to(
        menuItems.childNodes,
        {
          duration: 1.1,
          ease: 'power4',
          startAt: { y: 200 },
          y: 0,
          opacity: 1,
          stagger: 0.05,
        },
        '>-=1.1'
      )

    // End - Menu items
  }

  const handleMenuClose = () => {
    if (isAnimating) return
    setIsAnimating(true)

    const menuItems = menuRef?.current?.childNodes[1]

    gsap
      .timeline({
        onComplete: () => setIsAnimating(false),
      })
      .set(overlayRef.current.firstChild, {
        attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
      })
      // Start - Overlay first half
      .to(
        overlayRef.current.firstChild,
        {
          duration: 0.8,
          ease: 'power4.in',
          attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' },
        },
        0
      )
      .to(overlayRef.current.firstChild, {
        duration: 0.3,
        ease: 'power2',
        attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
      })
      // End - Overlay first half
      // Start - Overlay second half
      .set(overlayRef.current.firstChild, {
        attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
      })
      .to(overlayRef.current.firstChild, {
        duration: 0.3,
        ease: 'power2.in',
        attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' },
      })
      .to(overlayRef.current.firstChild, {
        duration: 0.8,
        ease: 'power4',
        attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' },
      })
      // End - Overlay second half
      // Start - Menu items
      .to(
        menuItems.childNodes,
        {
          duration: 0.8,
          ease: 'power2.in',
          y: 200,
          opacity: 0,
          stagger: -0.05,
        },
        0
      )
      // End - Menu items
      // Start - Menu background
      .to(
        menuRef.current,
        {
          opacity: 0,
          visibility: 'hidden',
        },
        '-=1.1'
      )
    // End - Menu background
  }

  return (
    <StyledNavbar>
      <StyledNavbarItem onClick={handleMenuOpen}>MENU</StyledNavbarItem>
      <StyledNavbarItem>SEPET (0)</StyledNavbarItem>
      <Menu ref={menuRef} handleMenuClose={handleMenuClose} />

      <svg
        ref={overlayRef}
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          pointerEvents: 'none',
          fill: '#A70A65',
        }}
      >
        <path
          vectorEffect='non-scaling-stroke'
          d='M 0 100 V 100 Q 50 100 100 100 V 100 z'
        />
      </svg>
    </StyledNavbar>
  )
}

export default Navbar
