import React from 'react'
import { Logo } from '../Logo/Logo'
import css from './Header.module.scss'

export const Header = () => {
  return (
    <header className={css.header}>
        <Logo/>
    </header>
  )
}
