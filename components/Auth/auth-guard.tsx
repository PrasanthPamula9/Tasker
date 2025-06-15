'use client'
import React from "react"
import { UserContext } from "../context/user-context"
import { redirect } from "next/navigation"


export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const context = React.useContext(UserContext)

    if (context?.IsLoggedIn) {
        
        return <React.Fragment>{children}</React.Fragment>
    } else if (context?.IsLoading) {
        return 
    } else {

        redirect('/login')
    }
}