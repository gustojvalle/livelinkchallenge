import React from 'react'
import css from './PageWrapper.module.scss'

type Props = {children: JSX.Element}

export const PageWrapper = ({children}:Props) => {
  return (
     <div className={css.root}>{children}</div>
  )
}
