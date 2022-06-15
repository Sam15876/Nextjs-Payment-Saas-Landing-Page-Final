// Components
import NavigationBar from "./NavigationBar"
import Footer from "./footer"

export default function PageContainer({ children }) {
    return(
        <div className='flex flex-col justify-between w-screen min-h-screen'>
            <div>
                <NavigationBar />
                { children }
            </div>
            <Footer />
        </div>
    )
}