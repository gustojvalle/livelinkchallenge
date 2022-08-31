import React from 'react'
import css from './Logo.module.scss'
import logo from '../../Assets/logo.svg'

export const Logo = () => {
  return (
    <div className={css.root}>
       <img src={logo} alt="Logo from livelink"/>
        <h1 className={css.logoText}>LiveLink</h1> 
    </div>
  )
}
