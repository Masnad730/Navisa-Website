import Link from 'next/link'
import Fade from 'react-reveal/Fade'

const OurServices = () => {
  return (
    <section className='bg-secondary text-white'>
      <div className='container py-20'>
        <div className='row'>
          <div className='col-md-8 offset-md-2 text-center'>
            <Fade up>
              <div className='mb-14'>
                <h2 className='text-xl sm:text-3xl lg:text-4xl text-white mb-7'>What We Offer</h2>
                <span className='text-accents_6'>
                  We offer a wide range of translation services and provide complete client
                  satisfaction
                </span>
              </div>
            </Fade>
          </div>
        </div>
        <Fade right>
          <div className='bg-white text-black text-center w-full'>
            <div className='row margin-l-0 margin-r-0'>
              <div className='col-lg-3 col-md-3 border border-accents_4 border-r-0 last:border-r-0'>
                <article className='pt-8 pb-12 px-2'>
                  <div className='text-primary svc-icon'>
                    <i className='flaticon-translation'></i>
                  </div>
                  <h4 className='text-base sm:text-lg lg:text-xl mb-8 uppercase font-bold'>
                    Translation Services
                  </h4>
                  <p className='text-base text-accents_6 font-medium leading-relaxed mt-3'>
                    Navisa provides fast and accurate translation services for the supported
                    languages.
                  </p>

                  <div className='mt-10'>
                    <Link href='/translation'>
                      <a className='bg-accents_3 px-5 py-3'>Read More</a>
                    </Link>
                  </div>
                </article>
              </div>
              <div className='col-lg-3 col-md-3 border border-accents_4 border-r-0 last:border-r-0'>
                <article className='pt-8 pb-12 px-2'>
                  <div className='text-primary svc-icon'>
                    <i className='flaticon-website'></i>
                  </div>
                  <h4 className='text-base sm:text-lg lg:text-xl mb-8 uppercase font-bold'>
                    Website Localization
                  </h4>
                  <p className='text-base text-accents_6 font-medium leading-relaxed mt-3'>
                    Website localization is the process of tailoring a website to a particular
                    audience.
                  </p>
                  <div className='mt-10'>
                    <Link href='/website-localization'>
                      <a className='bg-accents_3 px-5 py-3'>Read More</a>
                    </Link>
                  </div>
                </article>
              </div>
              <div className='col-lg-3 col-md-3 border border-accents_4 border-r-0 last:border-r-0'>
                <article className='pt-8 pb-12 px-2'>
                  <div className='text-primary svc-icon'>
                    <i className='flaticon-transcript'></i>
                  </div>
                  <h4 className='text-base sm:text-lg lg:text-xl mb-8 uppercase font-bold'>
                    Transcription Services
                  </h4>
                  <p className='text-base text-accents_6 font-medium leading-relaxed mt-3'>
                    Our team of experts offer human-generated, fast, timely, and superb-quality
                  </p>
                  <div className='mt-10'>
                    <Link href='/transcription'>
                      <a className='bg-accents_3 px-5 py-3'>Read More</a>
                    </Link>
                  </div>
                </article>
              </div>
              <div className='col-lg-3 col-md-3 border border-accents_4 border-r-0 last:border-r-0'>
                <article className='pt-8 pb-12 px-2'>
                  <div className='text-primary svc-icon'>
                    <i className='flaticon-proofreading'></i>
                  </div>
                  <h4 className='text-base sm:text-lg lg:text-xl mb-8 uppercase font-bold'>
                    Professional Proofreading
                  </h4>
                  <p className='text-base text-accents_6 font-medium leading-relaxed mt-3'>
                    Your digital and physical assets including your website, blogs, official
                    documents
                  </p>
                  <div className='mt-10'>
                    <Link href='/professional-proofreading'>
                      <a className='bg-accents_3 px-5 py-3'>Read More</a>
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}
export default OurServices
