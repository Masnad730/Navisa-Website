import OurServices from '../components/OurServices'
import CTA from '../components/CTA'
import CoreValue from '../components/CoreValue'
import WhyUs from '../components/WhyUs'
import Languages from '../components/Languages'
import Layout from '../components/layout/Layout'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <Layout activePage='home'>
      <Hero />
      <OurServices />
      <WhyUs />
      <CTA />
      <Languages />
      <CoreValue />
    </Layout>
  )
}
