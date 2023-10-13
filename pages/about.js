import Link from 'next/link'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout/Layout'
import WhyUs from '../components/WhyUs'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <Layout
      title='About Us - Navisa Translation Services'
      canonical='https://navisa.af/about/'
      descriptionContent='Navisa Translation Services (Navisa) is a local company in Afghanistan that mainly operates in the areas of translation, website localization, transcription, and proofreading.'
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
            "@id": "https://navisa.af/about/#webpage",
            "url": "https://navisa.af/about/",
            "name": "About",
            "description": "Navisa Translation Services (Navisa) is a local company in Afghanistan that mainly operates in the areas of translation, website localization, transcription, and proofreading.",
            "inLanguage": "en-US",
            "isPartOf": { "@id": "https://navisa.af/#website" },
            "breadcrumb": { "@id": "https://navisa.af/#breadcrumblist" },
            "datePublished":"2021-1-27T10:03:55+00:00",
            "dateModified":"2021-13-16T07:23:07+00:00"
          }
        ]
      }'
      activePage='about'
    >
      <section className='text-white svc-bg-image'>
        <div className='pt-20 pb-10'>
          <div className='container'>
            <Fade up>
              <div>
                <h6 className='text-sm sm:text-sm lg:text-base text-white uppercase pl-16 mb-4 relative title-decorated'>
                  about us
                </h6>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold pl-12 mb-8'>
                  About Us
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
                <li className='px-4 relative breadcrumb-arr'>About Us</li>
              </ul>
            </Fade>
          </div>
        </div>
      </section>
      <div className='bg-accents_0'>
        <div className='container'>
          <div className='row py-12 md:py-16 lg:py-20'>
            <div className='col-xl-6 col-lg-6'>
              <div className='mb-12 lg:mb-0'>
                <Fade up>
                  <h2 className='text-xl sm:text-3xl lg:text-4xl mb-4 py-4 tracking-wider uppercase'>
                    A few words about us
                  </h2>
                  <div>
                    <p className='mb-7 last:mb-0 text-paragraph'>
                      Navisa Translation Services (Navisa) is a local company in Afghanistan that
                      mainly operates in the area of translation services. The company started its
                      journey with a team of professional and experienced translators and experts in
                      the areas of translation, website localization, transcription, and
                      proofreading who are highly committed to offer high-quality services. The
                      services are offered for the following languages: Dari, English, Pashto,
                      Persian, Arabic and Turkish.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6'>
              <Fade right>
                <div className='flex flex-col items-center'>
                  <div className='bg-map'>
                    <div className='row justify-center'>
                      <div className='col-md-4'>
                        <div className='bg-accents_2 w-24 h-24 flex items-center justify-center rounded-full mx-auto mt-0 mb-7'>
                          <img src='/images/flags/afghanistan.png' alt='Pashto/Dari' />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='bg-accents_2 w-24 h-24 flex items-center justify-center rounded-full mx-auto mt-0 mb-7'>
                          <img src='/images/flags/united-kingdom.png' alt='English' />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='bg-accents_2 w-24 h-24 flex items-center justify-center rounded-full mx-auto mt-0 mb-7'>
                          <img src='/images/flags/saudi-arabia.png' alt='Arabic' />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='bg-accents_2 w-24 h-24 flex items-center justify-center rounded-full mx-auto mt-0 mb-7'>
                          <img src='/images/flags/turkey.png' alt='Turkish' />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='bg-accents_2 w-24 h-24 flex items-center justify-center rounded-full mx-auto mt-0 mb-7'>
                          <img src='/images/flags/iran.png' alt='Persian' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='border border-accents_4 rounded-lg flex items-center justify-center w-80 h-16 relative'>
                    <div className='bg-accents_0 custom-box-shadow rounded-lg w-full h-full flex items-center justify-center absolute -top-3 -right-3'>
                      <h3 className='text-base sm:lg lg:text-xl text-accents_7 font-montserrat tracking-wider uppercase'>
                        We are Multilingual
                      </h3>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <WhyUs />
        <CTA />
      </div>
      <div className='py-20'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <Fade left>
                <div className='mb-12 lg:mb-0'>
                  <img src='/images/industry.jpg' alt='Industries cover by navisa' />
                </div>
              </Fade>
            </div>
            <div className='col-md-7 offset-md-1'>
              <div>
                <div className='mb-10'>
                  <Fade up>
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl mb-6'>Industries</h2>
                    <p className='text-paragraph'>
                      Navisa provides translation and other related services that cover industries
                      such as business and finance, medical and healthcare, legal services,
                      marketing and advertising, and technical and engineering.
                    </p>
                  </Fade>
                </div>
                <div>
                  <Fade up>
                    <Accordion allowZeroExpanded preExpanded={['0']}>
                      <AccordionItem uuid='0'>
                        <AccordionItemHeading>
                          <AccordionItemButton className='bg-accents_0 p-4 flex items-center justify-between acc_btn'>
                            Business and Finance
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className='bg-tertiary p-4 lg:p-8'>
                            <p>
                              Navisa Translation Services provides a comprehensive support for
                              translation of all your business and finance content, including but
                              not limited to:
                            </p>
                            <ul className='row mt-4'>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Financial statements
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Financial assessments
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Auditor reports
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Business plans
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Financial spreadsheets
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Business policies
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Company press releases
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Finance reports
                              </li>
                            </ul>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton className='bg-accents_0 p-4 flex items-center justify-between acc_btn'>
                            Medical and Healthcare
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className='bg-tertiary p-4 lg:p-8'>
                            <p>
                              Navisa Translation Services provides medical and healthcare related
                              translation services, which covers from patient case reports to
                              packaging labels for medicines at an affordable rate. Our services in
                              this industry, includes:
                            </p>
                            <ul className='row mt-4'>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Patients reports
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Clinical trials
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Healthcare surveys
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Drug packaging and labels
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Physical examination reports
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Medical researches
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Pharmacological studies
                              </li>
                            </ul>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton className='bg-accents_0 p-4 flex items-center justify-between acc_btn'>
                            Legal
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className='bg-tertiary p-4 lg:p-8'>
                            <p>
                              Our team of professionals with a deep knowledge of legal practices and
                              issues, specially the Afghanistan Laws, makes sure that all your legal
                              documents are translated on time at the highest quality, to avoid
                              potential legal issues and disputes in future. Our legal translation
                              services include:
                            </p>
                            <ul className='row mt-4'>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Legal procedures
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Due diligence documents
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Affidavit translations
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Criminal case files
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Court proceedings
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Litigation documents
                                translation
                              </li>
                            </ul>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton className='bg-accents_0 p-4 flex items-center justify-between acc_btn'>
                            Marketing and Advertising
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className='bg-tertiary p-4 lg:p-8'>
                            <p>
                              We ensure that your marketing materials are translated in a way to
                              keep their original impact with no effectiveness loss in the
                              translation. We can assist you in translation of all types of
                              marketing and advertising materials, which includes, but not limited
                              to:
                            </p>
                            <ul className='row mt-4'>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Brochures
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Newsletters
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Marketing plan
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Websites
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Marketing researches
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Press releases
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Business cards
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Public relations documents
                              </li>
                            </ul>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton className='bg-accents_0 p-4 flex items-center justify-between acc_btn'>
                            Technical and Engineering
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className='bg-tertiary p-4 lg:p-8'>
                            <p>
                              Our team of linguists are fully capable to translate a wide range of
                              content related to technical and engineering industry, which includes:
                            </p>
                            <ul className='row mt-4'>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Engineering specifications
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Operation manuals
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Safety manuals
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Technical proposals
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Installation manuals
                              </li>
                              <li className='col-md-6 flex items-center mb-3'>
                                <i className='flaticon-tick mr-3'></i>Engineering proposals
                              </li>
                            </ul>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
