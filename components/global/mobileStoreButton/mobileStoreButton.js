// NextJS
import Image from 'next/image'

// Images
import appleLogo from '../../../public/appleLogo.svg'
import googleLogo from '../../../public/googleLogo.svg'

export default function MobileStoreButton({ type }) {
    const logo = type === 'apple' ? appleLogo : googleLogo
    const storeName = type === 'apple' ? 'App Store' : 'Play Store'
    const url = type === 'apple' ? 'https://apple.com' : 'https://google.com'

    return(
        <a href={url} className='bg-primary px-8 py-3 flex justify-center items-center gap-x-4 rounded-xl'>
           <Image src={logo} width={20} />
            <div className='flex flex-col items-start'>
                <p className='text-xs'>Available on</p>
                <p className='text-[18px] font-bold'>{storeName}</p>
            </div>
        </a>
    )
}