// NextJS
import Image from "next/image"

// React
import { useEffect, useState } from "react"

// Images
import iphoneImage from '../../public/iPhone/iphone-front-main.png'

// Data fetching
import { getAboutStats } from "../../api/apiFunctions"

export default function AboutComponent() {
    const [stats, setStats] = useState([])

    useEffect(() => {
        async function loadStats() {
            const data = await getAboutStats()
            setStats(data)
        }

        loadStats()
    }, [])

    return(
        <section className='w-full flex justify-center mb-16'>
            <div className='px-24 w-full flex justify-center items-center'>

                {/* Left section */}
                <div className='grid grid-cols-2 gap-y-12'>
                    <div className='mr-20'>
                        <div className='bg-[#F7F9F8] w-72 aspect-square rounded-full flex flex-col justify-center items-center'>
                            <div className='flex flex-col items-center -mt-6'>
                                <p className='text-[104px] font-bold'>{stats[0]?.heading}</p>
                                <p className='opacity-70 -mt-7'>{stats[0]?.subHeading}</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-24'>
                        <div className='bg-[#E8FFFD] w-64 aspect-square rounded-full flex flex-col justify-center items-center'>
                            <p className='text-7xl font-bold'>{stats[1]?.heading}</p>
                            <p className='opacity-70'>{stats[1]?.subHeading}</p>
                        </div>
                    </div>

                    <div className='mt-6 ml-auto pr-6'>
                        <div className='bg-[#FFFCF2] w-[210px] aspect-square rounded-full flex flex-col justify-center items-center'>
                            <p className='text-4xl font-bold'>{stats[2]?.heading}</p>
                            <p className='opacity-70'>{stats[2]?.subHeading}</p>
                        </div>
                    </div>

                    <div className='mt-24 ml-16'>
                        <div className='bg-[#F5FFEF] w-52 aspect-square rounded-full flex flex-col justify-center items-center'>
                            <p className='text-7xl font-bold'>{stats[3]?.heading}</p>
                            <p className='opacity-70'>{stats[3]?.subHeading}</p>
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