// NextJS
import Image from "next/image"

// Images
import iphoneImage from '../../public/iPhone/iphone-front-main.png'

export default function AboutComponent() {
    return(
        <section className='w-full flex justify-center mb-16'>
            <div className='px-24 w-full flex justify-center items-center'>

                {/* Left section */}
                <div className='grid grid-cols-2 gap-y-12'>
                    <div className='mr-20'>
                        <div className='bg-[#F7F9F8] w-72 aspect-square rounded-full flex flex-col justify-center items-center'>
                            <div className='flex flex-col items-center -mt-6'>
                                <p className='text-[104px] font-bold'>5k</p>
                                <p className='opacity-70 -mt-7'>Active Users</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-24'>
                        <div className='bg-[#E8FFFD] w-64 aspect-square rounded-full flex flex-col justify-center items-center'>
                            <p className='text-7xl font-bold'>10k</p>
                            <p className='opacity-70'>Downloads</p>
                        </div>
                    </div>

                    <div className='mt-6 ml-auto pr-6'>
                        <div className='bg-[#FFFCF2] w-[210px] aspect-square rounded-full flex flex-col justify-center items-center'>
                            <p className='text-4xl font-bold'>12k+</p>
                            <p className='opacity-70'>Reviews</p>
                        </div>
                    </div>

                    <div className='mt-24 ml-16'>
                        <div className='bg-[#F5FFEF] w-52 aspect-square rounded-full flex flex-col justify-center items-center'>
                            <p className='text-7xl font-bold'>09</p>
                            <p className='opacity-70'>Users</p>
                        </div>
                    </div>
                </div>

                {/* Right section */}
                <div className='basis-2/5'>
                    <Image src={iphoneImage} width={800} height={800} objectFit='contain' />
                </div>
            </div>
        </section>
    )
}