import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout/Layout'
import WhyUs from '../components/WhyUs'
import CTA from '../components/CTA'

export default function Resources() {
  return (
    <Layout
      title='Afghan Official Documents - Templates | Navisa Translation Services'
      canonical='https://navisa.af/resources/'
      descriptionContent='afghan tazkira old paper format english.docx free download, afghan tazkira new paper format english.docx free download, afghan tazkira booklet format english.docx free download, afghan marriage certificate.docx free download, afghan inheritance certificate.docx free download, afghan death report english.docx free download, afghan covid-19 vaccination card english.docx free downlod, afghan birth certificate child english.docx free download, afghan birth certificates adult english.docx free download.'
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
            "@id": "https://navisa.af/resources/#webpage",
            "url": "https://navisa.af/resources/",
            "name": "About",
            "description": "afghan tazkira old paper format english.docx free download, afghan tazkira new paper format english.docx free download, afghan tazkira booklet format english.docx free download, afghan marriage certificate.docx free download, afghan inheritance certificate.docx free download, afghan death report english.docx free download, afghan covid-19 vaccination card english.docx free downlod, afghan birth certificate child english.docx free download, afghan birth certificates adult english.docx free download.",
            "inLanguage": "en-US",
            "isPartOf": { "@id": "https://navisa.af/#website" },
            "breadcrumb": { "@id": "https://navisa.af/#breadcrumblist" },
            "datePublished":"2021-1-27T10:03:55+00:00",
            "dateModified":"2021-13-16T07:23:07+00:00"
          }
        ]
      }'
      activePage='resources'
    >
      <section className='text-white svc-bg-image'>
        <div className='pt-20 pb-10'>
          <div className='container'>
            <Fade up>
              <div>
                <h6 className='text-sm sm:text-sm lg:text-base text-white uppercase pl-16 mb-4 relative title-decorated'>
                  resources
                </h6>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold pl-12 mb-8'>
                  Official Documents - Templates
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
                <li className='px-4 relative breadcrumb-arr'>Resources</li>
              </ul>
            </Fade>
          </div>
        </div>
      </section>
      <section className='py-24 text-accents_7'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='border-b border-accents_4 pb-4'>
                <h1 className='text-base md:text-xl'>Templates</h1>
              </div>
            </div>
          </div>
          <div className='row mt-8'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='mb-8'>
                <figure>
                  <img
                    className='object-cover'
                    src='/images/templates/Tazkira-Old Paper Format-EN.jpg'
                    alt=''
                  />
                  <figcaption className='text-sm uppercase leading-relaxed tracking-wide pt-8 pb-4 h-20'>
                    tazkira old paper format english
                  </figcaption>
                </figure>
                <div className=''>
                  <a
                    className='text-primary-2'
                    href='/templates/Tazkira-Old Paper Format-EN.docx'
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='mb-8'>
                <figure>
                  <img
                    className='object-cover'
                    src='/images/templates/Tazkira-New Paper Format-EN.jpg'
                    alt=''
                  />
                  <figcaption className='text-sm uppercase leading-relaxed tracking-wide pt-8 pb-4 h-20'>
                    tazkira new paper format english
                  </figcaption>
                </figure>
                <div className=''>
                  <a
                    className='text-primary-2'
                    href='/templates/Tazkira-New Paper Format-EN.docx'
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='mb-8'>
                <figure>
                  <img
                    className='object-cover'
                    src='/images/templates/Tazkira-Booklet Format-EN.jpg'
                    alt=''
                  />
                  <figcaption className='text-sm uppercase leading-relaxed tracking-wide pt-8 pb-4 h-20'>
                    tazkira booklet format english
                  </figcaption>
                </figure>

                <div className=''>
                  <a
                    className='text-primary-2'
                    href='/templates/Tazkira-Booklet Format-EN.docx'
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='mb-8'>
                <figure>
                  <img
                    className='object-cover'
                    src='/images/templates/Marrige Certificate.jpg'
                    alt=''
                  />
                  <figcaption className='text-sm uppercase leading-relaxed tracking-wide pt-8 pb-4 h-20'>
                    marriage certificate
                  </figcaption>
                </figure>
                <div className=''>
                  <a className='text-primary-2' href='/templates/Marrige Certificate.docx' download>
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='mb-8'>
                <figure className='max-h-min'>
                  <img
                    className='object-cover'
                    src='/images/templates/Inheritance Certificate.jpg'
                    alt=''
                  />
                  <figcaption className='text-sm uppercase leading-relaxed tracking-wide pt-8 pb-4 h-20'>
                    inheritance certificate
                  </figcaption>
                </figure>
                <div className=''>
                  <a
                    className='text-primary-2'
                    href='/templates/Inheritance Certificate.docx'
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='mb-8'>
                <figure>
                  <img
                    className='object-cover'
                    src='/images/templates/Death Report-EN.jpg'
                    alt=''
                  />
                  <figcaption className='text-sm uppercase leading-relaxed tracking-wide pt-8 pb-4 h-20'>
                    death report english
                  </figcaption>
                </figure>

                <div className=''>
                  <a className='text-primary-2' href='/templates/Death Report-EN.docx' download>
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='mb-8'>
                <figure>
                  <img
                    className='object-cover'
                    src='/images/templates/COVID-19 Vaccination Card-EN.jpg'
                    alt=''
                  />
                  <figcaption className='text-sm uppercase leading-relaxed tracking-wide pt-8 pb-4 h-20'>
                    {' '}
                    covid-19 vaccination card english
                  </figcaption>
                </figure>

                <div className=''>
                  <a
                    className='text-primary-2'
                    href='/templates/COVID-19 Vaccination Card-EN.docx'
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='mb-8'>
                <figure>
                  <img
                    className='object-cover'
                    src='/images/templates/Birth Certificates-Child-EN.jpg'
                    alt=''
                  />
                  <figcaption className='text-sm uppercase leading-relaxed tracking-wide pt-8 pb-4 h-20'>
                    birth certificate child english
                  </figcaption>
                </figure>

                <div className=''>
                  <a
                    className='text-primary-2'
                    href='/templates/Birth Certificates-Child-EN.docx'
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='mb-8'>
                <figure>
                  <img
                    className='object-cover'
                    src='/images/templates/Birth Certificates-Adult-EN.jpg'
                    alt=''
                  />
                  <figcaption className='text-sm uppercase leading-relaxed tracking-wide pt-8 pb-4 h-20'>
                    birth certificates adult english
                  </figcaption>
                </figure>

                <div className=''>
                  <a
                    className='text-primary-2'
                    href='/templates/Birth Certificates-Adult-EN.docx'
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
