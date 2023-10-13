import Link from 'next/link'
import Fade from 'react-reveal/Fade'

const Footer = () => {
  return (
    <footer className='bg-secondary text-white py-16'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 mb-12 last:mb-0'>
            <div>
              <Link href='/fa'>
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
          <div className='col-lg-3 col-md-6 mb-12 last:mb-0 flex flex-col items-end'>
            <div className='text-right'>
              <Fade up>
                <h4 className='text-base sm:text-lg lg:text-xl text-current mb-5'>ارتباط با ما</h4>
              </Fade>
              <address className='not-italic'>
                <ul className='text-medium text-accents_4'>
                  <Fade up>
                    <li className='flex items-center justify-end mb-3'>
                      <span>سرک انصاری، شهر نو، کابل، افغانستان</span>
                      <div className='text-lg text-primary-2 ml-4'>
                        <i className='flaticon-pin'></i>
                      </div>
                    </li>
                    <li className='flex items-center justify-end mb-3'>
                      <span>+۹۳ ۷۸۰ ۸۷ ۵۷ ۸۷</span>
                      <div className='text-lg text-primary-2 ml-4'>
                        <i className='flaticon-phone-call'></i>
                      </div>
                    </li>
                    <li className='flex items-center justify-end mb-3'>
                      <span>info@navisa.af</span>
                      <div className='text-lg text-primary-2 ml-4'>
                        <i className='flaticon-envelope'></i>
                      </div>
                    </li>
                  </Fade>
                </ul>
              </address>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 mb-12 last:mb-0 flex flex-col items-end'>
            <div className='text-right'>
              <Fade up>
                <h4 className='text-base sm:text-lg lg:text-xl text-current mb-5'>کمپنی</h4>
              </Fade>

              <ul className='text-medium text-accents_4'>
                <Fade up>
                  <li className='mb-3'>
                    <Link href='/fa/about'>
                      <a>در باره ما</a>
                    </Link>
                  </li>
                  <li className='mb-3'>
                    <Link href='/fa/contact'>
                      <a>تماس با ما</a>
                    </Link>
                  </li>
                </Fade>
              </ul>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 mb-12 last:mb-0 flex flex-col items-end'>
            <div className='text-right'>
              <Fade>
                <h4 className='text-base sm:text-lg lg:text-xl text-current mb-5 ml-0 lg:ml-6'>
                  خدمات
                </h4>
              </Fade>
              <ul className='text-medium text-accents_4'>
                <Fade up>
                  <li className='ml-0 lg:ml-6 mb-3'>
                    <Link href='/fa/translation'>
                      <a>خدمات ترجمه</a>
                    </Link>
                  </li>
                  <li className='ml-0 lg:ml-6 mb-3'>
                    <Link href='/fa/website-localization'>
                      <a>محلی سازی وب سایت</a>
                    </Link>
                  </li>
                  <li className='ml-0 lg:ml-6 mb-3'>
                    <Link href='/fa/transcription'>
                      <a>خدمات رونویسی</a>
                    </Link>
                  </li>
                  <li className='ml-0 lg:ml-6 mb-3'>
                    <Link href='/fa/professional-proofreading'>
                      <a>تصحیح مسلکی</a>
                    </Link>
                  </li>
                </Fade>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
