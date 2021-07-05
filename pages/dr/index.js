import OurServices from '../../components/dr/OurServices'
import CTA from '../../components/dr/CTA'
import CoreValue from '../../components/dr/CoreValue'
import WhyUs from '../../components/dr/WhyUs'
import Languages from '../../components/dr/Languages'
import Layout from '../../components/dr/layout/Layout'
import Hero from '../../components/dr/Hero'

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
