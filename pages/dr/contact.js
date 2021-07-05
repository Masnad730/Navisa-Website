import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import Layout from '../../components/dr/layout/Layout'
import EnquiryFormDR from '../../components/EnquiryFormDR'

export default function Contact() {
  return (
    <Layout activePage='contact'>
      <section className='text-right text-white svc-bg-image'>
        <div className='pt-20 pb-10'>
          <div className='container'>
            <Fade up>
              <div className=''>
                <h6 className='text-xs sm:text-sm lg:text-base text-white uppercase pr-16 mb-4 relative title-decorated_right'>
                  ارتباط با ما
                </h6>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold pl-12 mb-8'>
                  ارتباط با ما
                </h1>
              </div>
            </Fade>
            <Fade left>
              <ul className='flex justify-end items-center text-primary-2'>
                <li className='px-4 relative breadcrumb-arr_right'>ارتباط با ما</li>
                <li className='pr-0 px-4 relative breadcrumb-arr_right'>
                  <Link href='/'>
                    <a className='hover:text-primary'>خانه</a>
                  </Link>
                </li>
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
          <div className='col-12 col-md-7'>
            <Fade left>
              <div className='custom-box-shadow relative'>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-bold mb-2 absolute top-0 right-0 bg-primary-2 text-secondary px-8 py-6'>
                  !از ما بپرسید
                </h3>
                <div className='px-8 pt-28 pb-8'>
                  <EnquiryFormDR />
                </div>
              </div>
            </Fade>
          </div>
          <div className='col-12 col-md-5'>
            <Fade left>
              <div className='pt-28 p-8 custom-box-shadow border-t border-accents_0 relative text-right'>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-bold mb-2 absolute top-0 right-0 bg-secondary text-white px-8 py-6'>
                  با ما در ارتباط شوید
                </h3>
                <Fade left>
                  <div className='flex items-start justify-end border-b last:border-b-0 border-accents_2 pb-4 mb-4'>
                    <div className='mr-4'>
                      <h5 className='text-current'>
                        <b>آدرس</b>
                      </h5>
                      <address className='not-italic'>سرک انصاری، شهر نو، کابل، افغانستان</address>
                    </div>
                    <div className='text-2xl text-primary-2 pt-1'>
                      <i className='flaticon-pin'></i>
                    </div>
                  </div>
                </Fade>
                <Fade left>
                  <div className='flex items-start justify-end border-b last:border-b-0 border-accents_2 pb-4 mb-4'>
                    <div className='mr-4'>
                      <h5 className='text-current'>
                        <b>شماره تماس</b>
                      </h5>
                      <p>+۹۳ ۷۸۰ ۸۷ ۵۷ ۸۷</p>
                    </div>
                    <div className='text-2xl text-primary-2 pt-1'>
                      <i className='flaticon-phone-call'></i>
                    </div>
                  </div>
                </Fade>
                <Fade left>
                  <div className='flex items-start justify-end border-b last:border-b-0 border-accents_2 pb-4 mb-4'>
                    <div className='mr-4'>
                      <h5 className='text-current'>
                        <b>ایمیل آدرس</b>
                      </h5>
                      <p>info@rahrawan.af</p>
                    </div>
                    <div className='text-2xl text-primary-2 pt-1'>
                      <i className='flaticon-envelope'></i>
                    </div>
                  </div>
                </Fade>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Layout>
  )
}
