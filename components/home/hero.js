// Images
import holdingPhoneImage from '../../public/iPhone/holdingPhoneImage.png'

// Components
import MobileStoreButton from '../global/mobileStoreButton/mobileStoreButton'

export default function Hero({ metrics }) {
    return(
        <section className='flex justify-between'>

            {/* Text content */}
            <div className='grow bg-primary/10 flex flex-col justify-between pt-24'>

                {/* Main content */}
                <div className='flex flex-col justify-center ml-40 gap-y-4 h-full'>

                    {/* Title */}
                    <h1 className='font-bold text-8xl max-w-xl py-4 leading-[110px]'>Transact money easily</h1>

                    {/* Description */}
                    <p className='text-xl opacity-70 max-w-md leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui id lobortis pretium blandit. Mauris interdum enim ullamcorper consequat, nec sed.</p>

                    {/* Download section */}
                    <div>
                        <p className='font-bold leading-4 mt-10 mb-2'>DOWNLOAD NOW ON:</p>

                        {/* Download buttons */}
                        <div className='flex gap-x-4 py-4'>
                            <MobileStoreButton type='apple' />
                            <MobileStoreButton type='google' />
                        </div>
                    </div>

                </div>

                {/* Metrics */}
                <MetricsComponent
                    metrics={metrics}
                />
                    
            </div>

            {/* Graphic */}
            <div className='w-[636px] h-[921px] bg-primary flex items-end'>
                <img alt='Application screenshot' src={holdingPhoneImage.src} />
            </div>
        </section>
    )
}

function MetricsComponent({ metrics=[] }) {
    return(
        <div className='ml-40 flex items-center mb-10'>
        {
            metrics.map((metric, index) => {
                return(
                    <div key={metric.name} className='flex items-center'>

                        {/* Metric box */}
                        <div className={`flex flex-col ${!index ? 'pr-14' : 'px-14'}`}>
                            <p className='text-xs text-[#1D1D1C]/60'>{metric.name}</p>
                            <p className='font-bold text-2xl'>{metric.value}</p>
                        </div>

                        {
                            // Insert separator
                            index < metrics.length - 1 && <div className='w-[2px] h-[20px] rounded-full bg-[#1D1D1C]/20' />
                        }
                    </div>
                )
            })
        }
        </div>
    )
}