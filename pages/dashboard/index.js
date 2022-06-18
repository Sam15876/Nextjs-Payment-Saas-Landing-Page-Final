// React
import { useEffect, useState } from 'react'

// Auth
import { useSession } from 'next-auth/react'

// Components
import PageContainer from '../../components/global/pageContainer/pageContainer'

export default function Dashboard() {
    const { status } = useSession()

    return(
        <PageContainer>
            <div className='w-full flex flex-col items-center mt-64'>
            {
                status === 'authenticated' ? (
                    <>
                        <h1 className='text-3xl font-bold text py-1'>Welcome</h1>
                        <p className='text-lg opacity-70'>You are viewing the dashboard</p>
                    </>
                )
                : (
                    <>
                        <h1 className='text-3xl font-bold text py-1'>Unauthenticated</h1>
                        <p className='text-lg opacity-70'>You must sign in to view this page</p>
                    </>
                )
            }
            </div>
        </PageContainer>
    )
}