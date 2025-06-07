'use client'
import React from "react"
import { UserContext } from "../context/user-context"


export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const context = React.useContext(UserContext)

    if (context?.IsLoggedIn) {
        return <React.Fragment>{children}</React.Fragment>
    } else if (context?.IsLoading) {
        return
    } else {
        return (<div>
            <h1>Login first</h1>
        </div>)
    }
}