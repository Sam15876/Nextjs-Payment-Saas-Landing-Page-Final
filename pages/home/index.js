// Components
import PageContainer from "../../components/global/pageContainer/pageContainer"
import Hero from "../../components/home/hero"

// Data fetching
import { getMetrics } from '../../api/apiFunctions'

export default function Home({ metrics }) {
    return(
        <PageContainer>
            <Hero metrics={metrics} />
        </PageContainer>
    )
}

export async function getStaticProps() {
    const metrics = await getMetrics()
    return {
        props: {
            metrics: metrics
        }
    }
}