import Link from 'next/link'
import Fade from 'react-reveal/Fade'

const Footer = () => {
  return (
    <footer className='bg-secondary text-white py-16'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div>
              <Link href='/dr'>
                <a>
                  <img className='w-36' src='/images/navisa-logo-white.png' alt='' />
                </a>
              </Link>
            </div>
          </div>
          <div className='col-md-3 flex flex-col items-end'>
            <div className='text-right'>
              <Fade up>
                <h4 className='text-base sm:text-lg lg:text-xl text-current mb-5'>ارتباط با ما</h4>
              </Fade>
              <address className='not-italic'>
                <ul className='text-medium'>
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
                      <span>info@rahrawan.af</span>
                      <div className='text-lg text-primary-2 ml-4'>
                        <i className='flaticon-envelope'></i>
                      </div>
                    </li>
                  </Fade>
                </ul>
              </address>
            </div>
          </div>
          <div className='col-md-3 flex flex-col items-end'>
            <div className='text-right'>
              <Fade up>
                <h4 className='text-base sm:text-lg lg:text-xl text-current mb-5'>کمپنی</h4>
              </Fade>

              <ul className='text-medium'>
                <Fade up>
                  <li className='mb-3'>
                    <Link href='/dr/about'>
                      <a>در باره ما</a>
                    </Link>
                  </li>
                  <li className='mb-3'>
                    <Link href='/dr/contact'>
                      <a>تماس با ما</a>
                    </Link>
                  </li>
                </Fade>
              </ul>
            </div>
          </div>
          <div className='col-md-3 flex flex-col items-end'>
            <div className='text-right'>
              <Fade>
                <h4 className='text-base sm:text-lg lg:text-xl text-current mb-5 ml-6'>خدمات</h4>
              </Fade>
              <ul className='text-medium'>
                <Fade up>
                  <li className='ml-6 mb-3'>
                    <Link href='#'>
                      <a>خدمات ترجمه</a>
                    </Link>
                  </li>
                  <li className='ml-6 mb-3'>
                    <Link href='#'>
                      <a>محلی سازی وب سایت</a>
                    </Link>
                  </li>
                  <li className='ml-6 mb-3'>
                    <Link href='#'>
                      <a>خدمات رونویسی</a>
                    </Link>
                  </li>
                  <li className='ml-6 mb-3'>
                    <Link href='#'>
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
