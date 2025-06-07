import React from 'react'
import AuthGuard from '@/components/Auth/auth-guard';
export default function DashBoardLayout({
    children
  }: {
    children: React.ReactNode;
  }){
    return (
        <AuthGuard>
            <React.Fragment>{children}</React.Fragment>
        </AuthGuard>
        

    )
}