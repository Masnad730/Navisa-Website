import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout/Layout'
import ServicesFeatures from '../components/ServicesFeatures'
import ServicesNavMenu from '../components/ServicesNavMenu'

export default function WebsiteLocalization() {
  return (
    <Layout activePage='website-localization'>
      <section className='text-white svc-bg-image'>
        <div className='pt-20 pb-10'>
          <div className='container'>
            <Fade up>
              <div>
                <h6 className='text-xs sm:text-sm lg:text-base text-white uppercase pl-16 mb-4 relative title-decorated'>
                  Services
                </h6>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold pl-12 mb-8'>
                  Website Localization
                </h1>
              </div>
            </Fade>
            <Fade right>
              <ul className='flex items-center text-primary-2'>
                <li className='pl-0 px-4 relative breadcrumb-arr'>
                  <Link href='/'>
                    <a className='hover:text-primary'>Home</a>
                  </Link>
                </li>
                <li className='px-4 relative breadcrumb-arr'>Website Localization</li>
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
                  <div className='px-4 py-6'>
                    <ServicesNavMenu active='website-localization' />
                  </div>
                </aside>
              </Fade>
            </div>
            <div className='col-lg-8 order-1 order-lg-2'>
              <Fade right>
                <div>
                  <img src='/images/services/website-localization.jpg' alt='' />
                </div>
              </Fade>
              <Fade up>
                <div className='pt-10'>
                  <p className='leading-8 mb-3 last:mb-0'>
                    Website localization is the process of tailoring a website to a particular
                    audience. It addition to translation, a due attention is made to the contents of
                    website considering cultural, political, and economic differences in order to
                    make them fit in the target country. It includes changing images, color schemes
                    and other elements such as currencies and units of measurement.
                  </p>
                  <p className='leading-8 mb-3 last:mb-0'>
                    Your website communicates your entire business and products to your customers.
                    Make sure it communicates with them in their language with no hassle caused by
                    cross-cultural differences.
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
