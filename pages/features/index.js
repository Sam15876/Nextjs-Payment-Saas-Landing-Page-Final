// Components
import PageContainer from "../../components/global/pageContainer/pageContainer"
import Heading from '../../components/features/heading'
import FeaturesComponent from "../../components/features/featuresComponent"

// Data fetching
import { getFeatures } from "../../api/apiFunctions"

export default function Features({ features }) {
    return(
        <PageContainer>
            <Heading />
            <FeaturesComponent features={features} />
        </PageContainer>
    )
}

export async function getStaticProps() {
    const data = await getFeatures()
    return {
        props: {
            features: data
        }
    }
}