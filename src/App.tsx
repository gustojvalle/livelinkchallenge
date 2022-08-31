
import { createContext, useEffect, useState } from "react";
import { Header } from "./Components/Header/Header";
import { routeConfiguration } from "./Router/route.configuration";
import {RoutesFromConfig} from "./Router/RoutesFromConfig";
import { fetchUsers } from "./services/fetchUsers";

export const UsersContext = createContext({users:[], isLoading: false})


  function App() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    
    
    const getUsers = async () => {
      setIsLoading(true)
        
        const usersRes:any = await fetchUsers()

        setUsers(usersRes)
        setIsLoading(false)
    }
    useEffect(()=> {
        getUsers()
    }, [])



  return (
    <div className="App">
      <UsersContext.Provider value={{users, isLoading}}>
      <Header/>
      <RoutesFromConfig  routes={routeConfiguration}/>
      </UsersContext.Provider>
    </div>
  );
}

export default App;
