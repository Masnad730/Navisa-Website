import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import EnquiryFormEN from '../components/EnquiryFormEN'
import Layout from '../components/layout/Layout'

export default function Contact() {
  return (
    <Layout activePage='contact'>
      <section className='text-white svc-bg-image'>
        <div className='pt-20 pb-10'>
          <div className='container'>
            <Fade up>
              <div className=''>
                <h6 className='text-xs sm:text-sm lg:text-base text-white uppercase pl-16 mb-4 relative title-decorated'>
                  Contact Us
                </h6>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold pl-12 mb-8'>
                  Contact Us
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
                <li className='px-4 relative breadcrumb-arr'>Contact Us</li>
              </ul>
            </Fade>
          </div>
        </div>
      </section>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Fade left>
              <div className='my-24'>
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
        </div>
        <div className='row mb-14'>
          <div className='col-12 col-md-5'>
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
                      <p>+93 780 87 57 87</p>
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
                      <p>info@rahrawan.af</p>
                    </div>
                  </div>
                </Fade>
              </div>
            </Fade>
          </div>
          <div className='col-12 col-md-7'>
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
