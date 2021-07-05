import Layout from '../components/layout/Layout'
import ServicesFeatures from '../components/ServicesFeatures'
import ServicesNavMenu from '../components/ServicesNavMenu'

export default function WebsiteLocalization() {
  return (
    <Layout>
      <section className='text-white svc-bg-image'>
        <div className='pt-20 pb-10'>
          <div className='container'>
            <div className=''>
              <h6 className='text-xs sm:text-sm lg:text-base text-white uppercase pl-16 mb-4 relative title-decorated'>
                Services
              </h6>
              <h1 className='text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold pl-12 mb-8'>
                Video Subtitling
              </h1>
            </div>
            <ul className='flex'>
              <li className='pl-0 px-4 relative breadcrumb-arr'>
                <Link href='/'>
                  <a className='hover:text-primary'>Home</a>
                </Link>
              </li>
              <li className='px-4 relative breadcrumb-arr'>Video Subtitling</li>
            </ul>
          </div>
        </div>
      </section>
      <div className='py-24 text-accents_7'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 order-2 order-lg-1'>
              <aside className='border-2 border-accents_2'>
                <div className='px-4 py-6'>
                  <ServicesNavMenu active='video-subtitling' />
                </div>
              </aside>
            </div>
            <div className='col-lg-8 order-1 order-lg-2'>
              <div>
                <img src='/images/services/' alt='' />
              </div>
              <div className='pt-10'>
                <p className='leading-8 mb-3 last:mb-0'>
                  Subtitling enables viewers of other nationalities to follow what is happening in
                  the video by writing out what is said in the video in another language, and we are
                  here to do it for you.
                </p>
              </div>
              <ServicesFeatures />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
