// NextJS
import Image from "next/image"

// Images
import iPhoneImageBack from '../../public/iPhone/iPhone-back.png'
import iPhoneImageFront from '../../public/iPhone/iPhone-front-createAccount.png'

export default function SetupSteps() {
    return(
        <section className='flex w-full justify-center mt-24'>

            <div className='flex gap-x-24 w-full max-w-7xl'>

                {/* Images */}
                <div className='basis-[55%] aspect-square bg-primary/[15%] rounded-full relative'>

                    {/* iPhones*/}
                    <div className='w-full absolute flex justify-center translate-x-12 -translate-y-9'><Image src={iPhoneImageBack} width={1000} height={1000} objectFit='contain' /></div>
                    <div className='w-full absolute flex justify-center -translate-x-12 translate-y-9'><Image src={iPhoneImageFront} width={1000} height={1000} objectFit='contain' /></div>
                </div>

                {/* Text */}
                <div className='basis-[45%]'>
                    <div className='flex flex-col gap-y-14 h-full justify-center'>

                        {/* Step 1 */}
                        <div className='flex gap-x-12'>
                            <div className='h-full flex items-center'><div className='w-16 min-w-[64px] h-16 rounded-full bg-secondary border border-secondary text-center text-white text-xl font-bold flex justify-center items-center'>01.</div></div>
                            <div className='flex flex-col gap-y-4'>
                                <h3 className='text-4xl font-bold'>Install <span className='text-secondary'>.Pay</span></h3>
                                <p className='text-xl opacity-70 grow'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea ornare blandit est, pellentesque orci.</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className='flex gap-x-12'>
                            <div className='h-full flex items-center'><div className='w-16 min-w-[64px] h-16 rounded-full border border-secondary text-center text-secondary text-xl font-bold flex justify-center items-center'>02.</div></div>
                            <div className='flex flex-col gap-y-4'>
                                <h3 className='text-4xl font-bold'>Create your account</h3>
                                <p className='text-xl opacity-70 grow'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea ornare blandit est, pellentesque orci.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className='flex gap-x-12'>
                            <div className='h-full flex items-center'><div className='w-16 min-w-[64px] h-16 rounded-full border border-secondary text-center text-secondary text-xl font-bold flex justify-center items-center'>03.</div></div>
                            <div className='flex flex-col gap-y-4'>
                                <h3 className='text-4xl font-bold'>Enjoy the features</h3>
                                <p className='text-xl opacity-70 grow'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea ornare blandit est, pellentesque orci.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}