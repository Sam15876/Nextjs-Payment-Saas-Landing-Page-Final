// NextJs
import Image from "next/image"
import Link from "next/link"

// Images
import logo from '../../../public/payLogo.svg'

// Components
import MobileStoreButton from "../mobileStoreButton/mobileStoreButton"

export default function Footer() {
    return(
        <footer className='flex flex-col justify-between w-full'>

            {/* Main content */}
            <div className='flex w-full justify-around pt-32 pb-24 text-[#191D2A]'>

                {/* Disclaimer */}
                <div className='flex flex-col items-start gap-y-2 max-w-[362px]'>
                    <Image src={logo} width={64} />
                    <p className='opacity-70 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi augue viverra ac vitae est commodo in urna.</p>
                </div>

                {/* Useful links */}
                <div className='flex flex-col items-start gap-y-2 max-w-[362px]'>
                    <p className='font-medium text-lg'>Useful links</p>
                    <div className='flex flex-col gap-y-1 opacity-70'>
                        <Link href='/home'><a>Home</a></Link>
                        <Link href='/about'><a>About Pay</a></Link>
                        <Link href='/howItWorks'><a>How it works</a></Link>
                        <Link href='/features'><a>Features</a></Link>
                    </div>
                </div>

                {/* Legal */}
                <div className='flex flex-col items-start gap-y-2 max-w-[362px]'>
                    <p className='font-medium text-lg'>Legal</p>
                    <div className='flex flex-col gap-y-1 opacity-70'>
                        <Link href='#'><a>Privacy Policy</a></Link>
                        <Link href='#'><a>Terms and Conditions</a></Link>
                    </div>
                </div>

                {/* Downloads */}
                <div className='flex flex-col items-start gap-y-2 max-w-[362px]'>
                    <p className='font-medium text-lg'>Downloads</p>
                    <div className='flex flex-col gap-y-3'>
                        <MobileStoreButton type='apple' />
                        <MobileStoreButton type='google' />
                    </div>
                </div>
            </div>

            {/* All rights reserved */}
            <div className='flex justify-center w-full text-[16px] text-[#191D2A]/60 pb-6'>©.Pay2022. All rights reserved.</div>
        </footer>
    )
}