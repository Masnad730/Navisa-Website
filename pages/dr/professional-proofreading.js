import Fade from 'react-reveal/Fade'

import Layout from '../../components/dr/layout/Layout'
import ServicesNavMenu from '../../components/dr/ServicesNavMenu'
import ServicesFeatures from '../../components/dr/ServicesFeatures'

export default function ProfessionalProofreading() {
  return (
    <Layout activePage='professional-proofreading'>
      <section className='text-right text-white svc-bg-image'>
        <div className='pt-20 pb-10'>
          <div className='container'>
            <Fade up>
              <div className=''>
                <h6 className='text-xs sm:text-sm lg:text-base text-white uppercase pr-16 mb-4 relative title-decorated_right'>
                  خدمات
                </h6>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold pl-12 mb-8'>
                  تصحیح مسلکی
                </h1>
              </div>
            </Fade>
            <Fade left>
              <ul className='flex justify-end items-center text-primary-2'>
                <li className='px-4 relative breadcrumb-arr_right'>تصحیح مسلکی</li>
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
      <div className='py-24 text-accents_7'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 order-2 order-lg-2'>
              <Fade left>
                <aside className='border-2 border-accents_2'>
                  <div className='px-4 py-6'>
                    <ServicesNavMenu active='professional-proofreading' />
                  </div>
                </aside>
              </Fade>
            </div>
            <div className='col-lg-8 order-2 order-lg-1'>
              <div className='text-right'>
                <Fade left>
                  <div>
                    <img src='/images/services/proofreading.jpg' alt='' />
                  </div>
                </Fade>
                <Fade up>
                  <div className='pt-10'>
                    <p className='leading-8 mb-3 last:mb-0'>
                      دارایی های دیجیتلی و فزیکی شما از جمله وب سایت، وبلاگ، اسناد رسمی، ایمیل های
                      مسلکی، مواد بازاریابی، مقالات علمی، داستان، دستنوشت و مقالات منعکس کننده معیار
                      و کیفیت کارتان و همچنان مسلکی بودن شما می باشد. بنابراین، خیلی مهم است که متن
                      شما عاری از هر گونه خطا باشد، طوری که شایسته است. تصحیح کننده گان مسلکی و
                      ویرایشگران ما متن شما را به گونه ژرف از لحاظ دستور زبان، علامات نگارشی و لحن
                      بررسی کرده و بهبود می بخشد تا تضمین کند که شما بر اساس دانش و نظریات خویش مورد
                      قضاوت قرار می گیرید، نه این موارد
                    </p>
                  </div>
                  <div>
                    <span className='block my-4'>:خدمات تصحیح ما شامل تصحیح موارد ذیل می باشد</span>
                    <div className='row'>
                      <div className='col-xl-4 col-md-12'>
                        <h4 className='text-base sm:text-lg lg:text-xl mb-4'>تجارتی</h4>
                        <ul>
                          <li className='mb-2 flex items-center justify-end'>
                            اسناد رسمی<i className='flaticon-tick ml-3'></i>
                          </li>
                          <li className='mb-2 flex items-center justify-end'>
                            گزارشات <i className='flaticon-tick ml-3'></i>
                          </li>
                          <li className='mb-2 flex items-center justify-end'>
                            مواد بازاریابی<i className='flaticon-tick ml-3'></i>
                          </li>
                        </ul>
                      </div>
                      <div className='col-xl-4 col-md-12'>
                        <h4 className='text-base sm:text-lg lg:text-xl mb-4'>استفاده علمی</h4>
                        <ul>
                          <li className='mb-2 flex items-center justify-end'>
                            کتاب ها<i className='flaticon-tick ml-3'></i>
                          </li>
                          <li className='mb-2 flex items-center justify-end'>
                            پایان نامه<i className='flaticon-tick ml-3'></i>
                          </li>
                          <li className='mb-2 flex items-center justify-end'>
                            مقالات علمی<i className='flaticon-tick ml-3'></i>
                          </li>
                        </ul>
                      </div>
                      <div className='col-xl-4 col-md-12'>
                        <h4 className='text-base sm:text-lg lg:text-xl mb-4'>تألیفات</h4>
                        <ul>
                          <li className='mb-2 flex items-center justify-end'>
                            داستان<i className='flaticon-tick ml-3'></i>
                          </li>
                          <li className='mb-2 flex items-center justify-end'>
                            دستنوشت<i className='flaticon-tick ml-3'></i>
                          </li>
                          <li className='mb-2 flex items-center justify-end'>
                            مقالات<i className='flaticon-tick ml-3'></i>
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
      </div>
    </Layout>
  )
}
