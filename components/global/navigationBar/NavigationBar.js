// NextJS
import Link from 'next/link'

// CSS
import styles from './styles.module.css'

export default function NavigationBar() {
    return (
        <div className={styles.navBar}>

            {/* Navigation links */}
            <div className={styles.linksSection}>
                <Link href='/home'><a>Home</a></Link>
                <Link href='/features'><a>Features</a></Link>
                <Link href='/about'><a>About Pay</a></Link>
                <Link href='/howItWorks'><a>How it works</a></Link>
            </div>

            {/* Download button */}
            <div className={styles.downloadButtonSection}>
                <Link href='#'><a>DOWNLOAD</a></Link>
            </div>
        </div>
    )
}