import Fade from 'react-reveal/Fade'

const WhyUs = () => {
  return (
    <section className='pb-8 pt-16'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6 order-2 order-lg-1'>
            <Fade up>
              <div className='flex items-center justify-center'>
                <img src='/images/why-us.png' alt='Why choose navisa' />
              </div>
            </Fade>
          </div>
          <div className='col-12 col-lg-6 order-1 order-lg-2'>
            <div className='text-accents_8'>
              <Fade up>
                <div>
                  <span className='block text-accents_8 text-sm md:text-medium lg:text-base mb-2'>
                    This is Navisa
                  </span>
                  <h2 className='text-2xl sm:text-3xl lg:text-4xl mb-8'>Why Choose Us?</h2>
                </div>
                <p className='text-paragraph text-sm md:text-medium lg:text-base'>
                  Navisa is well-known for its customers' satisfaction. Generally, our priority is
                  to get customers not for a day, a week, or a month, but for a lifetime. In order
                  to fulfill this task, we extremely focus on the following points:
                </p>
              </Fade>
              <div className='mt-10 mb-16'>
                <ul>
                  <Fade right>
                    <li className='flex items-center mb-4'>
                      <div className='text-2xl lg:text-4xl bg-accents_2 mr-8 flex items-center justify-center w-16 h-14 lg:w-20 lg:h-20 rounded-1/2'>
                        <i className='flaticon-quality'></i>
                      </div>
                      <div>
                        <h4 className='text-base sm:text-lg lg:text-xl'>Quality</h4>
                        <div className='text-paragraph text-sm md:text-medium lg:text-base'>
                          Committed to provide services at the pre-specified time
                        </div>
                      </div>
                    </li>
                    <li className='flex items-center mb-4'>
                      <div className='text-2xl lg:text-4xl bg-accents_2 mr-8 flex items-center justify-center w-16 h-14 lg:w-20 lg:h-20 rounded-1/2'>
                        <i className='flaticon-timeline'></i>
                      </div>
                      <div>
                        <h4 className='text-base sm:text-lg lg:text-xl'>Timeliness</h4>
                        <div
                          className='text-paragraph text-sm md:text-medium lg:text-base
                          '
                        >
                          Committed to provide services at the pre-specified time
                        </div>
                      </div>
                    </li>
                    <li className='flex items-center mb-4'>
                      <div className='text-2xl lg:text-4xl bg-accents_2 mr-8 flex items-center justify-center w-16 h-14 lg:w-20 lg:h-20 rounded-1/2'>
                        <i className='flaticon-save-money'></i>
                      </div>
                      <div>
                        <h4 className='text-base sm:text-lg lg:text-xl'>Fair Pricing</h4>
                        <div
                          className='text-paragraph text-sm md:text-medium lg:text-base
                          '
                        >
                          Fair and affordable rates for all our services
                        </div>
                      </div>
                    </li>
                  </Fade>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WhyUs
