import React, { ReactElement } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UsersContext } from '../../App'
import { ProfileStrip } from '../../Components/ProfileStrip/ProfileStrip'
import { PageWrapper } from '../PageWrapper/PageWrapper'
import css from './ProfileListPage.module.scss'


export const ProfileListPage = (): ReactElement => {


    const {users, isLoading} = useContext(UsersContext)


  return (
   <PageWrapper>
        <div className={css.root}>
        {
        users?.length < 0 && isLoading  ?
        <>loading element</>:users.map((item) => <Link className={css.linkMargin} to={`/profile/${item.id}`} key={item.id}><ProfileStrip image={item.profileImage} name={item.name} headline={item.headline} description={item.description} /></Link>)}
        </div >
    </PageWrapper>
  )
}
