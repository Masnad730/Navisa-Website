import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import Layout from '../../components/fa/layout/Layout'
import ServicesNavMenu from '../../components/fa/ServicesNavMenu'
import ServicesFeatures from '../../components/fa/ServicesFeatures'

export default function Transcription() {
  return (
    <Layout
      title='دارالترجمه نویسا - خدمات رونویسی'
      canonical='https://navisa.af/fa/transcription/'
      descriptionContent='تیم تخصصی ما خدمات رونویسی به موقع، سریع، حاصل کار انسانی و با کیفیت عالی را برای نوار های صوتی و تصویری شما ارایه می کند. رونویسی به موقع جلسات، نظریات مشتریان و محتوای دیداری'
      activePage='transcription'
    >
      <section className='text-right text-white svc-bg-image'>
        <div className='pt-20 pb-10'>
          <div className='container'>
            <Fade up>
              <div className=''>
                <h6 className='text-sm sm:text-sm lg:text-base text-white uppercase pr-16 mb-4 relative title-decorated_right'>
                  خدمات
                </h6>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold pl-12 mb-8'>
                  خدمات رونویسی
                </h1>
              </div>
            </Fade>
            <Fade left>
              <ul className='flex justify-end items-center text-primary-2 text-sm sm:text-sm lg:text-base'>
                <li className='px-4 relative breadcrumb-arr_right'>خدمات رونویسی</li>
                <li className='pr-0 px-4 relative breadcrumb-arr_right'>
                  <Link href='/fa'>
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
            <div className='col-lg-4 order-1 order-lg-2'>
              <Fade left>
                <aside className='border-2 border-accents_2'>
                  <div className='px-8 lg:px-2 xl:px-6 py-6'>
                    <ServicesNavMenu active='transcription' />
                  </div>
                </aside>
              </Fade>
            </div>
            <div className='col-lg-8 order-2 order-lg-1'>
              <div className='text-right'>
                <Fade left>
                  <div>
                    <img src='/images/services/transcription.jpg' alt='خدمات رونویسی' />
                  </div>
                </Fade>
                <Fade up>
                  <div className='pt-10'>
                    <p className='leading-8 mb-3 last:mb-0 text-sm md:text-medium lg:text-base'>
                      تیم تخصصی ما خدمات رونویسی به موقع، سریع، حاصل کار انسانی و با کیفیت عالی را
                      برای نوار های صوتی و تصویری شما ارایه می کند. رونویسی به موقع جلسات، نظریات
                      مشتریان و محتوای دیداری یک امر الزامی برای ادامه کسب و کار تان به صورت مداوم و
                      مؤفق آمیز می باشد، پس اجازه دهید ما برای شما انجام اش دهیم. علاوه بر این، ما
                      محرمیت کامل محتوای مانند جلسات دادگاه یا گزارشات تحقیقاتی را تضمین می کنیم
                      طوری که هیچ جای نگرانی به شما باقی نماند
                    </p>
                  </div>
                  <div>
                    <span className='block my-4 text-sm md:text-medium lg:text-base'>
                      در ذیل بعضی از ساحاتی اند که ما به آنها خدمات رونویسی را فراهم می کنیم
                    </span>
                    <div className='row'>
                      <div className='col-xl-4 col-md-12'>
                        <h4 className='text-base sm:text-lg lg:text-xl mb-4'>حقوقی</h4>
                        <ul className='text-sm md:text-medium lg:text-base'>
                          <li className='mb-2 flex items-center justify-end'>
                            جلسات دادگاه<i className='flaticon-tick ml-3'></i>
                          </li>
                          <li className='mb-2 flex items-center justify-end'>
                            اظهارات ضبط شده<i className='flaticon-tick ml-3'></i>
                          </li>
                          <li className='mb-2 flex items-center justify-end'>
                            تحقیقات بیمه<i className='flaticon-tick ml-3'></i>
                          </li>
                        </ul>
                      </div>
                      <div className='col-xl-4 col-md-12'>
                        <h4 className='text-base sm:text-lg lg:text-xl mb-4'>تجاری</h4>
                        <ul className='text-sm md:text-medium lg:text-base'>
                          <li className='mb-2 flex items-center justify-end'>
                            کنفرانس ها<i className='flaticon-tick ml-3'></i>
                          </li>
                          <li className='mb-2 flex items-center justify-end'>
                            مصاحبه ها<i className='flaticon-tick ml-3'></i>
                          </li>
                          <li className='mb-2 flex items-center justify-end'>
                            جلسات<i className='flaticon-tick ml-3'></i>
                          </li>
                        </ul>
                      </div>
                      <div className='col-xl-4 col-md-12'>
                        <h4 className='text-base sm:text-lg lg:text-xl mb-4'>رسانه و ارتباطات</h4>
                        <ul className='text-sm md:text-medium lg:text-base'>
                          <li className='mb-2 flex items-center justify-end'>
                            فلم ها<i className='flaticon-tick ml-3'></i>
                          </li>
                          <li className='mb-2 flex items-center justify-end'>
                            انتشارات<i className='flaticon-tick ml-3'></i>
                          </li>
                          <li className='mb-2 flex items-center justify-end'>
                            سیمینار ها<i className='flaticon-tick ml-3'></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='py-8'>
                    <h3 className='text-lg sm:text-xl lg:text-2xl mb-4'>رونویسی صوتی و تصویری</h3>
                    <p className='leading-8 text-sm md:text-medium lg:text-base'>
                      رونویسی اساساُ نوشتن همه چیز (حرف ها، محاوره ها،...) در ویدیو و یا صدا بوده که
                      شامل یادداشت نمودن حرف های فرد صحبت کننده و صداهای مهم دیگری است که در صدا و
                      یا ویدیو استفاده می شود
                    </p>
                  </div>
                  <div className='py-8'>
                    <h3 className='text-lg sm:text-xl lg:text-2xl mb-4'> زیرنویسی ویدیو</h3>
                    <p className='leading-8 text-sm md:text-medium lg:text-base'>
                      زیرنویسی با نوشتن موارد و حرف های یک ویدیو به یک زبان دیگر، بیننده گان سایر
                      زبان ها را قادر می سازد تا بفهمند که در ویدیو چه می گذرد، و ما برای ارایه چنین
                      خدمات اینجا استیم
                    </p>
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
