import Link from 'next/link'
import Fade from 'react-reveal/Fade'

const Footer = () => {
  return (
    <footer className='bg-secondary text-white py-16'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 lg:flex lg:justify-center mb-12 last:mb-0'>
            <div className=''>
              <Link href='/'>
                <a>
                  <img
                    className='w-20 md:w-28 lg:w-36'
                    src='/images/navisa-logo-white.png'
                    alt='Navisa Translation Services'
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 lg:flex lg:justify-center mb-12 last:mb-0'>
            <div className=''>
              <h4 className='text-base sm:text-lg lg:text-xl text-current mb-5 ml-0 lg:ml-6'>
                Services
              </h4>
              <ul className='text-medium text-accents_4'>
                <Fade up>
                  <li className='ml-0 lg:ml-6 mb-3'>
                    <Link href='/translation'>
                      <a>Translation Services</a>
                    </Link>
                  </li>
                </Fade>
                <Fade up>
                  <li className='ml-0 lg:ml-6 mb-3'>
                    <Link href='/website-localization'>
                      <a>Website Localization</a>
                    </Link>
                  </li>
                </Fade>
                <Fade up>
                  <li className='ml-0 lg:ml-6 mb-3'>
                    <Link href='/transcription'>
                      <a>Transcription Services</a>
                    </Link>
                  </li>
                </Fade>
                <Fade up>
                  <li className='ml-0 lg:ml-6 mb-3'>
                    <Link href='/professional-proofreading'>
                      <a>Professional Proofreading</a>
                    </Link>
                  </li>
                </Fade>
              </ul>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 lg:flex lg:justify-center mb-12 last:mb-0'>
            <div className=''>
              <h4 className='text-base sm:text-lg lg:text-xl text-current mb-5'>Company</h4>
              <ul className='text-medium text-accents_4'>
                <Fade up>
                  <li className='mb-3'>
                    <Link href='/about'>
                      <a>About Us</a>
                    </Link>
                  </li>
                </Fade>
                <Fade up>
                  <li className='mb-3'>
                    <Link href='/contact'>
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </Fade>
              </ul>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 lg:flex lg:justify-center mb-12 last:mb-0'>
            <div className=''>
              <h4 className='text-base sm:text-lg lg:text-xl text-current mb-5'>Get in Touch</h4>
              <address className='not-italic'>
                <ul className='text-medium text-accents_4'>
                  <Fade up>
                    <li className='flex items-start mb-3'>
                      <div className='text-lg text-primary-2 mr-4'>
                        <i className='flaticon-pin mt-1.5'></i>
                      </div>
                      <span>Ansori Street, Shahri Now, Kabul, Afghanistan</span>
                    </li>
                  </Fade>
                  <Fade up>
                    <li className='flex items-start mb-3'>
                      <div className='text-lg text-primary-2 mr-4'>
                        <i className='flaticon-phone-call'></i>
                      </div>
                      <span>+93 781 938 546</span>
                    </li>
                  </Fade>
                  <Fade up>
                    <li className='flex items-start mb-3'>
                      <div className='text-lg text-primary-2 mr-4'>
                        <i className='flaticon-envelope'></i>
                      </div>
                      <span>info@navisa.af</span>
                    </li>
                  </Fade>
                </ul>
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
