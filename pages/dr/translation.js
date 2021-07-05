import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import Layout from '../../components/dr/layout/Layout'
import ServicesNavMenu from '../../components/dr/ServicesNavMenu'
import ServicesFeatures from '../../components/dr/ServicesFeatures'

export default function Translation() {
  return (
    <Layout activePage='translation'>
      <section className='text-right text-white svc-bg-image'>
        <div className='pt-20 pb-10'>
          <div className='container'>
            <Fade up>
              <div>
                <h6 className='text-xs sm:text-sm lg:text-base text-white uppercase pr-16 mb-4 relative title-decorated_right'>
                  خدمات
                </h6>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold pl-12 mb-8'>
                  خدمات ترجمه
                </h1>
              </div>
            </Fade>
            <Fade left>
              <ul className='flex justify-end items-center text-primary-2'>
                <li className='px-4 relative breadcrumb-arr_right'>خدمات ترجمه</li>
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
            <div className='col-lg-4 order-1 order-lg-2'>
              <Fade left>
                <aside className='border-2 border-accents_2'>
                  <div className='px-4 py-6'>
                    <ServicesNavMenu active='translation' />
                  </div>
                </aside>
              </Fade>
            </div>
            <div className='col-lg-8 order-2 order-lg-1'>
              <div className='text-right'>
                <Fade left>
                  <div>
                    <img src='/images/services/translation.jpg' alt='' />
                  </div>
                </Fade>
                <Fade up>
                  <div className='pt-10'>
                    <p className='leading-8 mb-3 last:mb-0'>
                      دارالترجمه نویسا خدمات سریع و دقیق ترجمه را در زبان های پشیبانی شده ارایه می
                      کند. خدمات ترجمه ما ساحات تجاری و مالی، طبی و بهداشتی، حقوقی، بازاریابی و
                      تبلیغاتی، فنی و موارد تخصصی مهندسی را پوشش می دهد. به منظور ترجمه دقیق اسناد
                      شما و تضمین دقت و کیفیت آن، ما اینجا آماده فراهم آوری چنین خدمات استیم
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
