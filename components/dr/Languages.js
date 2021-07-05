import Fade from 'react-reveal/Fade'

const Languages = () => {
  return (
    <section className='pt-12 pb-20'>
      <div className='container'>
        <div className='row justify-center'>
          <div className='col-md-8 text-center'>
            <Fade up>
              <div className='mb-16'>
                <h2 className='text-2xl sm:text-4xl lg:text-5xl mb-6'>زبان های پشتیبانی شده</h2>
                <p className='text-accents_6'>
                  .ترجمه و سایر خدمات مرتبط ما برای زبان های ذیل و جفت آنها با یکدیگر ارایه می شود
                </p>
              </div>
            </Fade>
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
                  <h4 className='text-base sm:text-lg lg:text-xl mb-2'>پشتو</h4>
                </a>
              </div>
            </Fade>
            <Fade left>
              <div className='flex justify-center items-center p-6 mb-4 border border-accents_2'>
                <a href='#' className='text-center'>
                  <div className='mb-4'>
                    <img src='/images/flags/united-kingdom.png' alt='' />
                  </div>
                  <h4 className='text-base sm:text-lg lg:text-xl mb-2'>انگلیسی</h4>
                </a>
              </div>
            </Fade>
            <Fade left>
              <div className='flex justify-center items-center p-6 mb-4 border border-accents_2'>
                <a href='#' className='text-center'>
                  <div className='mb-4'>
                    <img src='/images/flags/turkey.png' alt='' />
                  </div>
                  <h4 className='text-base sm:text-lg lg:text-xl mb-2'>ترکی</h4>
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
            <Fade left>
              <div className='flex justify-center items-center p-6 mb-4 border border-accents_2'>
                <a href='#' className='text-center'>
                  <div className='mb-4'>
                    <img src='/images/flags/afghanistan.png' alt='' />
                  </div>
                  <h4 className='text-base sm:text-lg lg:text-xl mb-2'>دری</h4>
                </a>
              </div>
            </Fade>
            <Fade left>
              <div className='flex justify-center items-center p-6 mb-4 border border-accents_2'>
                <a href='#' className='text-center'>
                  <div className='mb-4'>
                    <img src='/images/flags/saudi-arabia.png' alt='' />
                  </div>
                  <h4 className='text-base sm:text-lg lg:text-xl mb-2'>عربی</h4>
                </a>
              </div>
            </Fade>
            <Fade left>
              <div className='flex justify-center items-center p-6 mb-4 border border-accents_2'>
                <a href='#' className='text-center'>
                  <div className='mb-4'>
                    <img src='/images/flags/iran.png' alt='' />
                  </div>
                  <h4 className='text-base sm:text-lg lg:text-xl mb-2'>فارسی</h4>
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
