import Layout from '../../components/dr/layout/Layout'
import ServicesNavMenu from '../../components/dr/ServicesNavMenu'
import ServicesFeatures from '../../components/dr/ServicesFeatures'

export default function VideoSubtitling() {
  return (
    <Layout>
      <section className='text-right text-white svc-bg-image'>
        <div className='pt-20 pb-10'>
          <div className='container'>
            <div className=''>
              <h6 className='text-xs sm:text-sm lg:text-base text-white uppercase pr-16 mb-4 relative title-decorated_right'>
                خدمات
              </h6>
              <h1 className='text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold pl-12 mb-8'>
                زیرنویسی ویدیو
              </h1>
            </div>
            <ul className='flex justify-end items-center'>
              <li className='px-4 relative breadcrumb-arr_right'>زیرنویسی ویدیو</li>
              <li className='pr-0 px-4 relative breadcrumb-arr_right'>
                <Link href='/'>
                  <a className='hover:text-primary'>خانه</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className='py-24 text-accents_7'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 order-1 order-lg-2'>
              <aside className='border-2 border-accents_2'>
                <div className='px-4 py-6'>
                  <ServicesNavMenu active='video-subtitling' />
                </div>
              </aside>
            </div>
            <div className='col-lg-8 order-2 order-lg-1'>
              <div className='text-right'>
                <div>
                  <img src='/images/services/' alt='' />
                </div>
                <div className='pt-10'>
                  <p className='leading-8 mb-3 last:mb-0'>
                    زیرنویسی با نوشتن موارد و حرف های یک ویدیو به یک زبان دیگر، بیننده گان سایر زبان
                    ها را قادر می سازد تا بفهمند که در ویدیو چه می گذرد، و ما برای ارایه چنین خدمات
                    اینجا استیم
                  </p>
                </div>
                <ServicesFeatures />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
