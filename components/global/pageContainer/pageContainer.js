// Components
import NavigationBar from "./NavigationBar"
import Footer from "./footer"

export default function PageContainer({ children, color }) {
    return(
        <div className='flex flex-col justify-between w-screen min-h-screen'>
            <div style={{ backgroundColor: color }}>
                <NavigationBar />
                { children }
            </div>
            <Footer />
        </div>
    )
}