// NextJS
import Link from 'next/link'
import Image from 'next/image'

// Auth
import { signIn, signOut, useSession} from 'next-auth/react'

// Images
import logo from '../../../public/payLogo.svg'

export default function NavigationBar() {

    const { status } = useSession()

    function handleSignin(e) {
        e.preventDefault()
        signIn()
    }
    
    function handleSignout(e) {
        e.preventDefault()
        signOut()
    }

    return (
        <nav className='absolute top-0 left-0 w-full flex justify-around items-center z-10 pt-12 px-36'>

            {/* Navigation links */}
            <div className='basis-1/2 flex justify-around items-center '>
                <Image src={logo} width={'64'} />
                <Link href='/home'><a>Home</a></Link>
                <Link href='/features'><a>Features</a></Link>
                <Link href='/about'><a>About Pay</a></Link>
                <Link href='/howItWorks'><a>How it works</a></Link>
            </div>

            {/* Auth buttons */}
            <div className='basis-1/2 text-[14px] text-[#191D2A] flex justify-end'>
            {
                status === 'authenticated'
                    ? <Link href='#'><a onClick={handleSignout} className='px-4 py-2 rounded-xl font-semibold'>Sign out</a></Link>
                    : <Link href='#'><a onClick={handleSignin} className='px-4 py-2'>Sign in</a></Link>
            }
            </div>
        </nav>
    )
}