import OurServices from '../../components/fa/OurServices'
import CTA from '../../components/fa/CTA'
import CoreValue from '../../components/fa/CoreValue'
import WhyUs from '../../components/fa/WhyUs'
import Languages from '../../components/fa/Languages'
import Layout from '../../components/fa/layout/Layout'
import Hero from '../../components/fa/Hero'

export default function Home() {
  return (
    <Layout
      title='دارالترجمه نویسا'
      canonical='https://navisa.af/fa/'
      descriptionContent='دارالترجمه نویسا یک شرکت خدماتی واقع در افغانستان بوده که عمدتاً در زمینه خدمات ترجمه فعالیت دارد'
      jsonLD='{
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://navisa.af/fa/#website",
          "url": "https://navisa.af/fa/",
          "name": "دارالترجمه نویسا",
          "description": "یک شرکت خدماتی واقع در افغانستان که عمدتاً در زمینه خدمات ترجمه فعالیت دارد",
          "publisher": { "@id": "https://navisa.af/fa/#organization" }
        },
        {
          "@type": "Organization",
          "@id": "https://navisa.af/fa/#organization",
          "legalName": "دارالترجمه نویسا",
          "url": "https://navisa.af/fa/",
          "logo": "https://navisa.af/images/navisa-logo.png"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://navisa.af/fa/#breadcrumblist",
          "itemListElement": [
            {
              "@type": "ListItem",
              "@id": "https://navisa.af/fa/#listItem",
              "position": 1,
              "item": {
                "@type": "WebPage",
                "@id": "https://navisa.af/fa/#item",
                "name": "خانه",
                "description": "دارالترجمه نویسا یک شرکت خدماتی واقع در افغانستان بوده که عمدتاً در زمینه خدمات ترجمه فعالیت دارد",
                "url": "https://navisa.af/fa/"
              }
            }
          ]
        },
        {
          "@type": "WebPage",
          "@id": "https://navisa.af/fa/#webpage",
          "url": "https://navisa.af/fa/",
          "name": "دارالترجمه نویسا",
          "description": "این شرکت با تیمی از مترجمان مسلکی و با تجربه و کارشناسان در ساحه ترجمه، محلی سازی وب سایت، رونویسی و تصحیح که متعهد به ارایه خدمات با کیفیت عالی استند",
          "inLanguage": "fa-AF",
          "isPartOf": { "@id": "https://navisa.af/fa/#website" },
          "breadcrumb": { "@id": "https://navisa.af/fa/#breadcrumblist" },
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
