import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout/Layout'
import ServicesFeatures from '../components/ServicesFeatures'
import ServicesNavMenu from '../components/ServicesNavMenu'

export default function Translation() {
  return (
    <Layout
      title='Translation Services - Navisa Translation Services'
      canonical='https://navisa.af/translation/'
      descriptionContent='Navisa provides fast and accurate translation services which covers business and finance, medical and healthcare, legal services, marketing and advertising, and technical and engineering specialisms.'
      activePage='translation'
    >
      <section className='text-white svc-bg-image'>
        <div className='pt-20 pb-10'>
          <div className='container'>
            <Fade up>
              <div>
                <h6 className='text-sm sm:text-sm lg:text-base text-white uppercase pl-16 mb-4 relative title-decorated'>
                  Services
                </h6>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold pl-12 mb-8'>
                  Translation Services
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
                <li className='px-4 relative breadcrumb-arr'>Translation Services</li>
              </ul>
            </Fade>
          </div>
        </div>
      </section>
      <div className='py-24 text-accents_7'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 order-2 order-lg-1'>
              <Fade right>
                <aside className='border-2 border-accents_2'>
                  <div className='px-8 lg:px-2 xl:px-6 py-6'>
                    <ServicesNavMenu active='translation' />
                  </div>
                </aside>
              </Fade>
            </div>
            <div className='col-lg-8 order-1 order-lg-2'>
              <Fade right>
                <div>
                  <img src='/images/services/translation.jpg' alt='Translation services' />
                </div>
              </Fade>
              <Fade up>
                <div className='pt-10'>
                  <p className='leading-8 mb-3 last:mb-0 text-sm md:text-medium lg:text-base'>
                    Navisa provides fast and accurate translation services for the supported
                    languages. Our translation services cover business and finance, medical and
                    healthcare, legal services, marketing and advertising, and technical and
                    engineering specialisms. In order to get your documents translated with due
                    diligence; to ensure high accuracy and quality, we are here to do it for you.
                  </p>
                </div>
                <ServicesFeatures />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
