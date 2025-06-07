'use client'
import React from 'react'

export interface ContextType {
    FirstName: string,
    LastName: string,
    IsLoading: boolean,
    IsLoggedIn: boolean,
    Setter: (FirstName: string, LastName: string, IsLoading: boolean, IsLoggedIn: boolean) => void
}
export type userType = Pick<ContextType, 'FirstName' | 'LastName' | 'IsLoading' | 'IsLoggedIn'>
export const UserContext = React.createContext<ContextType | undefined>(undefined)
export function userContextProvider({ children }: { children: React.ReactNode }): React.JSX.Element {

    const [user, SetUser] = React.useState<userType>({
        FirstName: '',
        LastName: '',
        IsLoading: false,
        IsLoggedIn: false

    })


    function Setter(FirstName: string, LastName: string, IsLoading: boolean, IsLoggedIn: boolean): void {
        SetUser({
            FirstName: FirstName,
            LastName: LastName,
            IsLoading: IsLoading,
            IsLoggedIn: IsLoggedIn,

        })

    }


    return (
        <UserContext.Provider value={{ ...user, Setter }}>{children}</UserContext.Provider>
    )

}

