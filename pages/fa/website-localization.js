import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import Layout from '../../components/fa/layout/Layout'
import ServicesNavMenu from '../../components/fa/ServicesNavMenu'
import ServicesFeatures from '../../components/fa/ServicesFeatures'

export default function WebsiteLocalization() {
  return (
    <Layout
      title='دارالترجمه نویسا - محلی سازی وب سایت'
      canonical='https://navisa.af/fa/website-localization/'
      descriptionContent=''
      activePage='website-localization'
    >
      <section className='text-right text-white svc-bg-image'>
        <div className='pt-20 pb-10'>
          <div className='container'>
            <Fade up>
              <div>
                <h6 className='text-sm sm:text-sm lg:text-base text-white uppercase pr-16 mb-4 relative title-decorated_right'>
                  خدمات
                </h6>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold pl-12 mb-8'>
                  محلی سازی وب سایت
                </h1>
              </div>
            </Fade>
            <Fade left>
              <ul className='flex justify-end items-center text-primary-2 text-sm sm:text-sm lg:text-base'>
                <li className='px-4 relative breadcrumb-arr_right'>محلی سازی وب سایت</li>
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
                    <ServicesNavMenu active='website-localization' />
                  </div>
                </aside>
              </Fade>
            </div>
            <div className='col-lg-8 order-2 order-lg-1'>
              <div className='text-right'>
                <Fade left>
                  <div>
                    <img src='/images/services/website-localization.jpg' alt='محلی سازی وب سایت' />
                  </div>
                </Fade>
                <Fade up>
                  <div className='pt-10'>
                    <p className='leading-8 mb-3 last:mb-0 text-sm md:text-medium lg:text-base'>
                      محلی سازی وب سایت پروسه مناسب سازی وب سایت به یک دسته مخاطبان مشخص می باشد.
                      علاوه بر ترجمه، یک توجه ژرف و جدی به روی محتویات وب سایت با در نظرداشت تفاوت
                      های فرهنگی، سیاسی و اقتصادی به منظور متناسب سازی آن با کشور مورد هدف صورت می
                      گیرد. این موارد شامل تغییرآوری در تصاویر، رنگ طرح ها و موارد دیگری چون واحدات
                      پولی و اندازه‌ گیری می باشد
                    </p>
                    <p className='leading-8 mb-3 last:mb-0 text-sm md:text-medium lg:text-base'>
                      وب سایت شما کُل کسب و کار و محصولات تان را با مشتریان تان در ارتباط قرار می
                      دهد. بنابراین، اطمینان حاصل کنید که وب سایت شما با آنها با زبان خودشان بدون
                      هیچ مشکلی پدید آمده از تفاوت های میان فرهنگی ارتباط برقرار می کند
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
