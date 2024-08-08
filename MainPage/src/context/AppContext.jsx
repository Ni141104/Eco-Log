import { createContext, useState } from "react";

export const AppContext=createContext();

function AppContextProvider({children})
{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const value={
        isLoggedIn
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;