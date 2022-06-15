export default function NotFoundComponent() {
    return(
        <section className='mt-24 flex w-full justify-center items-center'>
            <div className='max-w-xl flex flex-col justify-center items-center h-[400px]'>
                <h1 className='text-5xl font-bold py-6'>404 - Page not found</h1>
                <p className='opacity-70 text-xl text-center'>This page does not exist. Please use the navigation bar at the top to visit existing pages.</p>
            </div>
        </section>
    )
}