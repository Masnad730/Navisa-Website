import Fade from 'react-reveal/Fade'

import EnquiryFormEN from './../components/EnquiryFormEN'

const CoreValue = () => {
  return (
    <section className='py-24 bg-accents_0'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <div className='mb-8 lg:mb-0'>
              <Fade up>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl leading-tight mb-5'>
                  <span>Ready to Translate</span> With Navisa?
                </h2>
                <p className='mb-8 text-sm md:text-medium lg:text-base'>
                  In order for us to live up to our promise of an outstanding service, each job is
                  assigned to linguists with specializations in various languages who work for our
                  company on a full-time basis.
                </p>
              </Fade>
              <div>
                <ul className='row'>
                  <Fade up>
                    <li className='col-md-6 flex items-center mb-3'>
                      <i className='flaticon-checkmark'></i>
                      <span className='ml-4'>Integrity</span>
                    </li>
                  </Fade>
                  <Fade up>
                    <li className='col-md-6 flex items-center mb-3'>
                      <i className='flaticon-checkmark'></i>
                      <span className='ml-4'>Diligence</span>
                    </li>
                  </Fade>
                  <Fade up>
                    <li className='col-md-6 flex items-center mb-3'>
                      <i className='flaticon-checkmark'></i>
                      <span className='ml-4'>Confidentiality</span>
                    </li>
                  </Fade>
                  <Fade up>
                    <li className='col-md-6 flex items-center mb-3'>
                      <i className='flaticon-checkmark'></i>
                      <span className='ml-4'>Professionalism</span>
                    </li>
                  </Fade>
                  <Fade up>
                    <li className='col-md-12 flex items-center mb-3'>
                      <i className='flaticon-checkmark'></i>
                      <span className='ml-4'>Customer Responsiveness</span>
                    </li>
                  </Fade>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <Fade right>
              <div className='shadow-2xl relative'>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-bold mb-2 absolute top-0 left-0 bg-primary-2 text-secondary px-8 py-6'>
                  Make an Enquiry?
                </h3>
                <div className='px-8 pt-28 pb-8'>
                  <EnquiryFormEN />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CoreValue
