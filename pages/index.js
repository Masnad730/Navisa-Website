import OurServices from '../components/OurServices'
import CTA from '../components/CTA'
import CoreValue from '../components/CoreValue'
import WhyUs from '../components/WhyUs'
import Languages from '../components/Languages'
import Layout from '../components/layout/Layout'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <Layout
      title='Navisa Translation Services'
      canonical='https://navisa.af/'
      descriptionContent='Navisa Translation Services (Navisa) is a local company in Afghanistan that mainly operates in the area of translation services.'
      jsonLD='{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://navisa.af/#website",
            "url": "https://navisa.af/",
            "name": "Navisa Translation Services",
            "description": "a local company in Afghanistan that mainly operates in the area of translation services",
            "publisher": { "@id": "https://navisa.af/#organization" }
          },
          {
            "@type": "Organization",
            "@id": "https://navisa.af/#organization",
            "legalName": "Navisa Translation Services",
            "url": "https://navisa.af/",
            "logo": "https://navisa.af/images/navisa-logo.png"
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://navisa.af/#breadcrumblist",
            "itemListElement": [
              {
                "@type": "ListItem",
                "@id": "https://navisa.af/#listItem",
                "position": 1,
                "item": {
                  "@type": "WebPage",
                  "@id": "https://navisa.af/#item",
                  "name": "Home",
                  "description": "Navisa Translation Services (Navisa) is a local company in Afghanistan that mainly operates in the area of translation services.",
                  "url": "https://navisa.af/"
                }
              }
            ]
          },
          {
            "@type": "WebPage",
            "@id": "https://navisa.af/#webpage",
            "url": "https://navisa.af/",
            "name": "Navisa Translation Services",
            "description": "The company started its journey with a team of professional and experienced translators and experts in the areas of translation, website localization, transcription, and proofreading who are highly committed to offer high-quality services.",
            "inLanguage": "en-US",
            "isPartOf": { "@id": "https://navisa.af/#website" },
            "breadcrumb": { "@id": "https://navisa.af/#breadcrumblist" },
            "datePublished":"2021-1-27T10:03:55+00:00",
            "dateModified":"2021-13-16T07:23:07+00:00"
          }
        ]
      }'
      activePage='home'
    >
      <Hero />
      <OurServices />
      <WhyUs />
      <CTA />
      <Languages />
      <CoreValue />
    </Layout>
  )
}
