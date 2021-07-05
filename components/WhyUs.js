import Fade from 'react-reveal/Fade'

const WhyUs = () => {
  return (
    <section className='pb-8 pt-16'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <Fade up>
              <div className=''>
                <img src='/images/why-us.png' alt='' />
              </div>
            </Fade>
          </div>
          <div className='col-12 col-lg-6'>
            <div className='text-accents_8'>
              <Fade up>
                <div>
                  <span
                    className='block text-paragraph
                     mb-2'
                  >
                    This is Navisa
                  </span>
                  <h2 className='text-xl sm:text-3xl lg:text-4xl mb-8'>Why Choose Us?</h2>
                </div>
                <p className='text-paragraph'>
                  Navisa is well-known for its customers' satisfaction. Generally, our priority is
                  to get customers not for a day, a week, or a month, but for a lifetime. In order
                  to fulfil this task, we extremely focus on the following points:
                </p>
              </Fade>
              <div className='mt-10 mb-16'>
                <ul>
                  <Fade right>
                    <li className='flex items-center mb-4'>
                      <div className='text-4xl bg-accents_2 mr-8 flex items-center justify-center w-20 h-20 rounded-1/2'>
                        <i className='flaticon-quality'></i>
                      </div>
                      <div>
                        <h4 className='text-base sm:text-lg lg:text-xl'>Quality</h4>
                        <div
                          className='text-paragraph
                      '
                        >
                          Committed to provide services at the pre-specified time
                        </div>
                      </div>
                    </li>
                    <li className='flex items-center mb-4'>
                      <div className='text-4xl bg-accents_2 mr-8 flex items-center justify-center w-20 h-20 rounded-1/2'>
                        <i className='flaticon-timeline'></i>
                      </div>
                      <div>
                        <h4 className='text-base sm:text-lg lg:text-xl'>Timeliness</h4>
                        <div
                          className='text-paragraph
                          '
                        >
                          Committed to provide services at the pre-specified time
                        </div>
                      </div>
                    </li>
                    <li className='flex items-center mb-4'>
                      <div className='text-4xl bg-accents_2 mr-8 flex items-center justify-center w-20 h-20 rounded-1/2'>
                        <i className='flaticon-save-money'></i>
                      </div>
                      <div>
                        <h4 className='text-base sm:text-lg lg:text-xl'>Fair Pricing</h4>
                        <div
                          className='text-paragraph
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
