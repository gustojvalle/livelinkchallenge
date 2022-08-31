import { ProfileDetail } from "../Containers/ProfileDetail/ProfileDetails"
import { ProfileListPage } from "../Containers/ProfileListPage/ProfileListPage"
import { RouteConfig } from "./types"



export const routeConfiguration : RouteConfig[] =  [ {
      path: '/',
      name: "ProfileList",
      Component:ProfileListPage,
      exact: true, 
    }, 
    {
      path: 'profile/:id', 
      name: "ProfileDetail", 
      Component: ProfileDetail, 
      
    }
  ]