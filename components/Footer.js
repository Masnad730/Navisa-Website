import Link from 'next/link'
import Fade from 'react-reveal/Fade'

const Footer = () => {
  return (
    <footer className='bg-secondary text-white py-16'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 flex flex-col justify-between'>
            <div>
              <Link href='/'>
                <a>
                  <img className='w-36' src='/images/navisa-logo-white.png' alt='' />
                </a>
              </Link>
            </div>
          </div>
          <div className='col-md-3'>
            <div>
              <h4 className='text-base sm:text-lg lg:text-xl text-current mb-5 ml-6'>Services</h4>
              <ul className='text-medium'>
                <Fade up>
                  <li className='ml-6 mb-3'>
                    <Link href='#'>
                      <a>Translation Services</a>
                    </Link>
                  </li>
                </Fade>
                <Fade up>
                  <li className='ml-6 mb-3'>
                    <Link href='#'>
                      <a>Website Localization</a>
                    </Link>
                  </li>
                </Fade>
                <Fade up>
                  <li className='ml-6 mb-3'>
                    <Link href='#'>
                      <a>Transcription Services</a>
                    </Link>
                  </li>
                </Fade>
                <Fade up>
                  <li className='ml-6 mb-3'>
                    <Link href='#'>
                      <a>Professional Proofreading</a>
                    </Link>
                  </li>
                </Fade>
              </ul>
            </div>
          </div>
          <div className='col-md-3'>
            <div>
              <h4 className='text-base sm:text-lg lg:text-xl text-current mb-5'>Company</h4>
              <ul className='text-medium'>
                <Fade up>
                  <li className='mb-3'>
                    <Link href='#'>
                      <a>About Us</a>
                    </Link>
                  </li>
                </Fade>
                <Fade up>
                  <li className='mb-3'>
                    <Link href='#'>
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </Fade>
              </ul>
            </div>
          </div>
          <div className='col-md-3'>
            <div>
              <h4 className='text-base sm:text-lg lg:text-xl text-current mb-5'>Get in Touch</h4>
              <address className='not-italic'>
                <ul className='text-medium'>
                  <Fade up>
                    <li className='flex items-start mb-3'>
                      <div className='text-lg text-primary-2 mr-4'>
                        <i className='flaticon-pin'></i>
                      </div>
                      <span>Ansori Street, Shahri Now, Kabul, Afghanistan</span>
                    </li>
                  </Fade>
                  <Fade up>
                    <li className='flex items-start mb-3'>
                      <div className='text-lg text-primary-2 mr-4'>
                        <i className='flaticon-phone-call'></i>
                      </div>
                      <span>+93 780 87 57 87</span>
                    </li>
                  </Fade>
                  <Fade up>
                    <li className='flex items-start mb-3'>
                      <div className='text-lg text-primary-2 mr-4'>
                        <i className='flaticon-envelope'></i>
                      </div>
                      <span>info@rahrawan.af</span>
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
