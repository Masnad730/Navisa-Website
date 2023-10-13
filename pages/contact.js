import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import EnquiryFormEN from '../components/EnquiryFormEN'
import Layout from '../components/layout/Layout'

export default function Contact() {
  return (
    <Layout
      title='Contact Us - Navisa Translation Services'
      canonical='https://navisa.af/contact/'
      descriptionContent='Contact Us.Ansori Street, Shahri Now, District 10, Kabul, Afghanistan . +93 780 87 57 87. info@navisa.af'
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
                  "@id": "https://navisa.af/#item",
                  "name": "Home",
                  "description": "Navisa Translation Services (Navisa) is a local company in Afghanistan that mainly operates in the area of translation services.",
                  "url": "https://navisa.af/"
                }
              },
              {
                "@type": "ListItem",
                "@id": "https://navisa.af/about/#listItem",
                "position": 2,
                "item": {
                  "@type": "WebPage",
                  "@id": "https://navisa.af/about/#item",
                  "name": "About",
                  "description": "Navisa Translation Services (Navisa) is a local company in Afghanistan that mainly operates in the areas of translation, website localization, transcription, and proofreading.",
                  "url": "https://navisa.af/about/"
                }
              }
            ]
          },
          {
            "@type": "WebPage",
            "@id": "https://navisa.af/contact/#webpage",
            "url": "https://navisa.af/contact/",
            "name": "Contact",
            "description": "Contact Us.Ansori Street, Shahri Now, District 10, Kabul, Afghanistan . +93 780 87 57 87. info@navisa.af",
            "inLanguage": "en-US",
            "isPartOf": { "@id": "https://navisa.af/#website" },
            "breadcrumb": { "@id": "https://navisa.af/#breadcrumblist" },
            "datePublished":"2021-1-27T10:03:55+00:00",
            "dateModified":"2021-13-16T07:23:07+00:00"
          }
        ]
      }'
      activePage='contact'
    >
      <section className='text-white svc-bg-image'>
        <div className='pt-20 pb-10'>
          <div className='container'>
            <Fade up>
              <div className=''>
                <h6 className='text-sm sm:text-sm lg:text-base text-white uppercase pl-16 mb-4 relative title-decorated'>
                  Contact Us
                </h6>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold pl-12 mb-8'>
                  Contact Us
                </h1>
              </div>
            </Fade>
            <Fade right>
              <ul className='flex items-center text-primary-2 text-sm sm:text-sm lg:text-base'>
                <li className='pl-0 px-4 relative breadcrumb-arr'>
                  <Link href='/'>
                    <a className='hover:text-primary'>Home</a>
                  </Link>
                </li>
                <li className='px-4 relative breadcrumb-arr'>Contact Us</li>
              </ul>
            </Fade>
          </div>
        </div>
      </section>
      <div className='container'>
        <div className='row pb-8 lg:pb-24'>
          <div className='col-12 order-3 order-lg-1'>
            <Fade left>
              <div className='my-12 md:my-16 lg:my-20'>
                <iframe
                  className='outline-none focus:outline-none'
                  src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6573.188889417662!2d69.17287680000003!3d34.538501600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1617276306046!5m2!1sen!2s'
                  width='100%'
                  height='480'
                  allowFullScreen
                  loading='lazy'
                ></iframe>
              </div>
            </Fade>
          </div>
          <div className='col-lg-5 col-md-12 order-1 order-lg-2 my-12 lg:my-0'>
            <Fade up>
              <div className='pt-28 p-8 custom-box-shadow border-t border-accents_0 relative'>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-bold mb-2 absolute top-0 left-0 bg-secondary text-white px-8 py-6'>
                  Get in Touch
                </h3>
                <Fade right>
                  <div className='flex items-start border-b last:border-b-0 border-accents_2 pb-4 mb-4'>
                    <div className='text-2xl text-primary-2 pt-1'>
                      <i className='flaticon-pin'></i>
                    </div>
                    <div className='ml-4'>
                      <h5 className='text-current'>Address</h5>
                      <address className='not-italic'>
                        Ansori Street, Shahri Now,
                        <br /> Kabul, Afghanistan
                      </address>
                    </div>
                  </div>
                </Fade>
                <Fade right>
                  <div className='flex items-start border-b last:border-b-0 border-accents_2 pb-4 mb-4'>
                    <div className='text-2xl text-primary-2 pt-1'>
                      <i className='flaticon-phone-call'></i>
                    </div>
                    <div className='ml-4'>
                      <h5 className='text-current'>Phone</h5>
                      <p>+93 781 938 546</p>
                    </div>
                  </div>
                </Fade>
                <Fade right>
                  <div className='flex items-start border-b last:border-b-0 border-accents_2 pb-4 mb-4'>
                    <div className='text-2xl text-primary-2 pt-1'>
                      <i className='flaticon-envelope'></i>
                    </div>
                    <div className='ml-4'>
                      <h5 className='text-current'>Email</h5>
                      <p>info@navisa.af</p>
                    </div>
                  </div>
                </Fade>
              </div>
            </Fade>
          </div>
          <div className='col-lg-7 col-md-12 order-2 order-lg-3'>
            <div className='row'>
              <div className='col-12'>
                <Fade up>
                  <div className='custom-box-shadow border-t border-accents_0 relative'>
                    <h3 className='text-lg sm:text-xl lg:text-2xl font-bold mb-2 absolute top-0 left-0 bg-primary-2 text-secondary px-8 py-6'>
                      Make an Enquiry?
                    </h3>
                    <div className='px-8 pt-28 pb-8'>
                      <EnquiryFormEN />
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
