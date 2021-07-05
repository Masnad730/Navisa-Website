import Fade from 'react-reveal/Fade'

import EnquiryFormDR from '../EnquiryFormDR'

const CoreValue = () => {
  return (
    <section className='py-24 bg-accents_0 text-right'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <Fade left>
              <div className='shadow-2xl relative'>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-bold mb-2 absolute top-0 right-0 bg-primary-2 text-secondary px-8 py-6'>
                  !از ما بپرسید
                </h3>
                <div className='px-8 pt-28 pb-8'>
                  <EnquiryFormDR />
                </div>
              </div>
            </Fade>
          </div>
          <div className='col-12 col-lg-6'>
            <div className='text-right'>
              <Fade right>
                <h2 className='text-xl sm:text-3xl lg:text-4xl leading-tight mb-5'>
                  آیا آماده هستید مشتری نویسا شوید؟
                </h2>
                <p className='mb-8 text-right'>
                  به منظور اینکه وعدهٔ خدمات عالی ما بر آورده شود، هر کار را به عهدهٔ مترجمین ما که
                  دارای تخصص در زبانهای مربوطه میباشند، قرار میدهیم
                </p>
              </Fade>
              <div>
                <ul className='row'>
                  <Fade up>
                    <li className='col-md-6 flex items-center justify-end mb-3'>
                      <span className='mr-4'>امانتداری</span>
                      <i className='flaticon-checkmark'></i>
                    </li>
                    <li className='col-md-6 flex items-center justify-end mb-3'>
                      <span className='mr-4'>سخت کوشی</span>
                      <i className='flaticon-checkmark'></i>
                    </li>
                    <li className='col-md-6 flex items-center justify-end mb-3'>
                      <span className='mr-4'>محرمیت</span>
                      <i className='flaticon-checkmark'></i>
                    </li>
                    <li className='col-md-6 flex items-center justify-end mb-3'>
                      <span className='mr-4'>حرفه یی بودن</span>
                      <i className='flaticon-checkmark'></i>
                    </li>
                    <li className='col-md-12 flex items-center justify-end mb-3'>
                      <span className='mr-4'>پاسخگویی مشتری</span>
                      <i className='flaticon-checkmark'></i>
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
export default CoreValue
