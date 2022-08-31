import classNames from 'classnames'
import React from 'react'
import { Avatar } from '../Avatar/Avatar'
import css from './ProfileStrip.module.scss'

type Props = {
    expanded?:boolean, 
    name:string, 
    description: string, 
    headline: string, 
    image? : string
}

export const ProfileStrip= ({expanded = false, name, description, headline, image}: Props) => {
  return (
    <div  className={css.root}><Avatar src={image}/>
        <span className={css.stripHeadings}>
            <h3 className={css.name}>
           {name}
            </h3>
            <h4 className={css.headline}>
            {headline}
            </h4>
            <p className={classNames(css.description, {[css.descriptionExpanded]:expanded})}>{description}</p>
        </span>
    </div>
  )
}
