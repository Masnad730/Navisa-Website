import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout/Layout'
import ServicesNavMenu from '../components/ServicesNavMenu'
import ServicesFeatures from '../components/ServicesFeatures'

export default function Translation() {
  return (
    <Layout
      title='Professional Proofreading - Navisa Translation Services'
      canonical='https://navisa.af/professional-proofreading/'
      descriptionContent='Our professional proofreaders and editors deeply check and improve your text in terms of grammar, punctuation and tone to ensure that you are judged based on your knowledge and ideas'
      activePage='professional-proofreading'
    >
      <section className='text-white svc-bg-image'>
        <div className='pt-20 pb-10'>
          <div className='container'>
            <Fade up>
              <div className=''>
                <h6 className='text-sm sm:text-sm lg:text-base text-white uppercase pl-16 mb-4 relative title-decorated'>
                  Services
                </h6>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold pl-12 mb-8'>
                  Professional Proofreading
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
                <li className='px-4 relative breadcrumb-arr'>Professional Proofreading</li>
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
                    <ServicesNavMenu active='professional-proofreading' />
                  </div>
                </aside>
              </Fade>
            </div>
            <div className='col-lg-8 order-1 order-lg-2'>
              <Fade right>
                <div>
                  <img src='/images/services/proofreading.jpg' alt='Professional Proofreading' />
                </div>
              </Fade>
              <Fade up>
                <div className='pt-10'>
                  <p className='leading-8 mb-3 last:mb-0 text-sm md:text-medium lg:text-base'>
                    Your digital and physical assets including your website, blogs, official
                    documents, professional emails, marketing material, academic papers, novel,
                    manuscript, and articles reflect the standard and quality of your work as well
                    as your professionalism. Therefore, it is crucial for your text to be as
                    error-free as it deserves. Our professional proofreaders and editors deeply
                    check and improve your text in terms of grammar, punctuation and tone to ensure
                    that you are judged based on your knowledge and ideas, not these matters!
                  </p>
                </div>
                <div>
                  <span className='block my-4 text-sm md:text-medium lg:text-base'>
                    Our proofreading services include proofreading of:
                  </span>
                  <div className='row'>
                    <div className='col-xl-4 col-md-12'>
                      <h4 className='text-base sm:text-lg lg:text-xl mb-4'>Businesses</h4>
                      <ul className='text-sm md:text-medium lg:text-base'>
                        <li className='mb-2 flex items-center'>
                          <i className='flaticon-tick mr-3'></i>
                          Official documents
                        </li>
                        <li className='mb-2 flex items-center'>
                          <i className='flaticon-tick mr-3'></i>
                          Reports
                        </li>
                        <li className='mb-2 flex items-center'>
                          <i className='flaticon-tick mr-3'></i>
                          Marketing material
                        </li>
                      </ul>
                    </div>
                    <div className='col-xl-4 col-md-12'>
                      <h4 className='text-base sm:text-lg lg:text-xl mb-4'>Academic Use</h4>
                      <ul className='text-sm md:text-medium lg:text-base'>
                        <li className='mb-2 flex items-center'>
                          <i className='flaticon-tick mr-3'></i>
                          Books
                        </li>
                        <li className='mb-2 flex items-center'>
                          <i className='flaticon-tick mr-3'></i>
                          Thesis
                        </li>
                        <li className='mb-2 flex items-center'>
                          <i className='flaticon-tick mr-3'></i>
                          Academic papers
                        </li>
                      </ul>
                    </div>
                    <div className='col-xl-4 col-md-12'>
                      <h4 className='text-base sm:text-lg lg:text-xl mb-4'>Authors</h4>
                      <ul className='text-sm md:text-medium lg:text-base'>
                        <li className='mb-2 flex items-center'>
                          <i className='flaticon-tick mr-3'></i>
                          Novel
                        </li>
                        <li className='mb-2 flex items-center'>
                          <i className='flaticon-tick mr-3'></i>
                          Manuscript
                        </li>
                        <li className='mb-2 flex items-center'>
                          <i className='flaticon-tick mr-3'></i>
                          Articles
                        </li>
                      </ul>
                    </div>
                  </div>
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
