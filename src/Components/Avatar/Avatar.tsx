import React from 'react'
import css from './Avatar.module.scss'

type Props = {
    src: string
}

export const Avatar = ({src}:Props) => {
  return (
    <span className={css.avatarImageWrapper}>
        <img className={css.avatarImage} src={src} alt="Avatar with profile face" />
    </span>

  )
}
