import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout/Layout'
import ServicesFeatures from '../components/ServicesFeatures'
import ServicesNavMenu from '../components/ServicesNavMenu'

export default function Translation() {
  return (
    <Layout
      title='Transcription Services - Navisa Translation Services'
      canonical='https://navisa.af/transcription/'
      descriptionContent='Our team of experts offer human-generated, fast, timely, and superb-quality transcription services for your audio and video contents. Timely transcription of your meetings, customers’ feedbacks, and visual content '
      activePage='transcription'
    >
      <section className='text-white svc-bg-image'>
        <div className='pt-20 pb-10'>
          <div className='container'>
            <Fade up>
              <div className=''>
                <h6 className='text-sm sm:text-sm lg:text-base text-white uppercase pl-16 mb-4 relative title-decorated'>
                  Services
                </h6>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold pl-12 mb-8'>
                  Transcription Services
                </h1>
              </div>
            </Fade>
            <Fade right>
              <ul className='flex items-center text-primary-2 text-sm sm:text-sm lg:text-base'>
                <li className='pl-0 px-4 relative breadcrumb-arr'>
                  <Link href='/'>
                    <a className='hover:text-primary'>Home</a>
                  </Link>
                </li>
                <li className='px-4 relative breadcrumb-arr'>Transcription Services</li>
              </ul>
            </Fade>
          </div>
        </div>
      </section>
      <div className='py-24 text-accents_7'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 order-2 order-lg-1'>
              <Fade right>
                <aside className='border-2 border-accents_2'>
                  <div className='px-8 lg:px-2 xl:px-6 py-6'>
                    <ServicesNavMenu active='transcription' />
                  </div>
                </aside>
              </Fade>
            </div>
            <div className='col-lg-8 order-1 order-lg-2'>
              <Fade right>
                <div>
                  <img src='/images/services/transcription.jpg' alt='Transcription Services' />
                </div>
              </Fade>
              <Fade up>
                <div className='pt-10'>
                  <p className='leading-8 mb-3 last:mb-0 text-sm md:text-medium lg:text-base'>
                    Our team of experts offer human-generated, fast, timely, and superb-quality
                    transcription services for your audio and video contents. Transcription is
                    basically writing down everything in the audio or video. It includes notes of
                    who is speaking and of any other significant sounds used during the audio and
                    video. Timely transcription of your meetings, customers’ feedbacks, and visual
                    content is essential to run your business smoothly and successfully, so let us
                    do it for you. Besides, we ensure full confidentiality for the contents such as
                    court hearings or investigation reports to leave no spot for you to worry about.
                  </p>
                </div>
                <div>
                  <span className='block my-4 text-sm md:text-medium lg:text-base'>
                    Here are some of the primary industries we provide transcription services to:
                  </span>
                  <div className='row'>
                    <div className='col-xl-4 col-md-12'>
                      <h4 className='text-base sm:text-lg lg:text-xl mb-4'>Legal</h4>
                      <ul className='text-sm md:text-medium lg:text-base'>
                        <li className='mb-2 flex items-center'>
                          <i className='flaticon-tick mr-3'></i>
                          Court hearings
                        </li>
                        <li className='mb-2 flex items-center'>
                          <i className='flaticon-tick mr-3'></i>
                          Recorded statements
                        </li>
                        <li className='mb-2 flex items-center'>
                          <i className='flaticon-tick mr-3'></i>
                          Insurance investigation
                        </li>
                      </ul>
                    </div>
                    <div className='col-xl-4 col-md-12'>
                      <h4 className='text-base sm:text-lg lg:text-xl mb-4'>Business</h4>
                      <ul className='text-sm md:text-medium lg:text-base'>
                        <li className='mb-2 flex items-center'>
                          <i className='flaticon-tick mr-3'></i> Conferences
                        </li>
                        <li className='mb-2 flex items-center'>
                          <i className='flaticon-tick mr-3'></i> Interviews
                        </li>
                        <li className='mb-2 flex items-center'>
                          <i className='flaticon-tick mr-3'></i>
                          Meetings
                        </li>
                      </ul>
                    </div>
                    <div className='col-xl-4 col-md-12'>
                      <h4 className='text-base sm:text-lg lg:text-xl mb-4'>
                        Media & Communication
                      </h4>
                      <ul className='text-sm md:text-medium lg:text-base'>
                        <li className='mb-2 flex items-center'>
                          <i className='flaticon-tick mr-3'></i> Movies
                        </li>
                        <li className='mb-2 flex items-center'>
                          <i className='flaticon-tick mr-3'></i> Podcasts
                        </li>
                        <li className='mb-2 flex items-center'>
                          <i className='flaticon-tick mr-3'></i> Seminars
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='py-8'>
                  <h3 className='text-lg sm:text-xl lg:text-2xl mb-4'>
                    Audio and Video Transcription
                  </h3>
                  <p className='leading-8 text-sm md:text-medium lg:text-base'>
                    Transcription is basically writing down everything in the audio or video. It
                    includes notes of who is speaking and of any other significant sounds used
                    during the audio and video.
                  </p>
                </div>
                <div className='py-8'>
                  <h3 className='text-lg sm:text-xl lg:text-2xl mb-4'>Video Subtitling</h3>
                  <p className='leading-8 text-sm md:text-medium lg:text-base'>
                    Subtitling enables viewers of other nationalities to follow what is happening in
                    the video by writing out what is said in the video in another language, and we
                    are here to do it for you.
                  </p>
                </div>
                <ServicesFeatures />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
