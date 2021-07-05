import Fade from 'react-reveal/Fade'

const Languages = () => {
  return (
    <section className='pt-12 pb-20'>
      <div className='container'>
        <div className='row justify-center'>
          <div className='col-md-8 text-center'>
            <div className='mb-16'>
              <Fade up>
                <h2 className='text-xl sm:text-3xl lg:text-4xl mb-6'>
                  Language <span className='text-black'>Coverage</span>
                </h2>
                <p className='text-accents_6'>
                  Our translation and other related services are offered for the following languages
                  and pairs of them with one another.
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <div className='row justify-center'>
          <div className='col-lg-3 col-sm-12'>
            <Fade left>
              <div className='flex justify-center items-center p-6 mb-4 border border-accents_2'>
                <a href='#' className='text-center'>
                  <div className='mb-4'>
                    <img src='/images/flags/afghanistan.png' alt='' />
                  </div>
                  <h4 className='text-base sm:text-lg lg:text-xl mb-2'>Pashto</h4>
                </a>
              </div>
            </Fade>
            <Fade left>
              <div className='flex justify-center items-center p-6 mb-4 border border-accents_2'>
                <a href='#' className='text-center'>
                  <div className='mb-4'>
                    <img src='/images/flags/united-kingdom.png' alt='' />
                  </div>
                  <h4 className='text-base sm:text-lg lg:text-xl mb-2'>English</h4>
                </a>
              </div>
            </Fade>
            <Fade left>
              <div className='flex justify-center items-center p-6 mb-4 border border-accents_2'>
                <a href='#' className='text-center'>
                  <div className='mb-4'>
                    <img src='/images/flags/turkey.png' alt='' />
                  </div>
                  <h4 className='text-base sm:text-lg lg:text-xl mb-2'>Turkish</h4>
                </a>
              </div>
            </Fade>
          </div>
          <div className='col-lg-4 col-sm-12 offset-lg-1 flex items-center'>
            <Fade up>
              <div>
                <img src='/images/img3.png' alt='' />
              </div>
            </Fade>
          </div>
          <div className='col-lg-3 col-sm-12 offset-lg-1'>
            <Fade right>
              <div className='flex justify-center items-center p-6 mb-4 border border-accents_2'>
                <a href='#' className='text-center'>
                  <div className='mb-4'>
                    <img src='/images/flags/afghanistan.png' alt='' />
                  </div>
                  <h4 className='text-base sm:text-lg lg:text-xl mb-2'>Dari</h4>
                </a>
              </div>
            </Fade>
            <Fade right>
              <div className='flex justify-center items-center p-6 mb-4 border border-accents_2'>
                <a href='#' className='text-center'>
                  <div className='mb-4'>
                    <img src='/images/flags/saudi-arabia.png' alt='' />
                  </div>
                  <h4 className='text-base sm:text-lg lg:text-xl mb-2'>Arabic</h4>
                </a>
              </div>
            </Fade>
            <Fade right>
              <div className='flex justify-center items-center p-6 mb-4 border border-accents_2'>
                <a href='#' className='text-center'>
                  <div className='mb-4'>
                    <img src='/images/flags/iran.png' alt='' />
                  </div>
                  <h4 className='text-base sm:text-lg lg:text-xl mb-2'>Persian</h4>
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Languages
