import React, { useContext } from 'react'
import {  useParams } from 'react-router-dom'
import { UsersContext } from '../../App'
import { ProfileStrip } from '../../Components/ProfileStrip/ProfileStrip'
import { PageWrapper } from '../PageWrapper/PageWrapper'
import css from './ProfileDetails.module.scss'

export const ProfileDetail = () => {



  const {id} = useParams()
  const {users, isLoading} = useContext(UsersContext)
  
  const user = users.find(user=> user.id === id)


  return (
    <PageWrapper><div className={css.root}>

{!!isLoading? <>loading element</> :      <>
      {!!user ?<ProfileStrip image={user.profileImage} name={user.name} headline={user.headline} description={user.description} expanded/> : <>Error Strip</>}
      </>}
      </div></PageWrapper>
  )
}
