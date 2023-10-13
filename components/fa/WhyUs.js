import Fade from 'react-reveal/Fade'

const WhyUs = () => {
  return (
    <section className='pb-8 pt-16'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6 order-2 order-lg-1'>
            <Fade up>
              <div className='flex items-center justify-center'>
                <img src='/images/why-us.png' alt='چرا نویسا را انتخاب کنید' />
              </div>
            </Fade>
          </div>
          <div className='col-12 col-lg-6 order-1 order-lg-2'>
            <div className='text-accents_8 text-sm md:text-medium lg:text-base text-right'>
              <div>
                <span
                  className='block text-paragraph text-sm md:text-medium lg:text-base
                   mb-2'
                >
                  این است نویسا
                </span>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl mb-8'>چرا ما را انتخاب کنید؟</h2>
              </div>
              <p className='text-paragraph text-sm md:text-medium lg:text-base text-right'>
                نویسا مصروف به رضایت مشتریانش است. بطور عموم، اولویت ما جذت نمودن مشتریان نه برای یک
                روز، نه برای یک هفته و نه برای یک ماه؛ بلکه برای یک عمر است. برای این منظور، ما
                بالای موارد ذیل تمرکز داریم
              </p>
              <div className='mt-10 mb-16'>
                <ul>
                  <Fade left>
                    <li className='flex justify-end items-center mb-4'>
                      <div>
                        <h4 className='text-base sm:text-lg lg:text-xl'>کیفیت</h4>
                        <div className='text-paragraph text-sm md:text-medium lg:text-base'>
                          پا فرا گذاشتن از انتظارات شما با ارایه خدمات با کیفیت عالی توسط یک تیم
                          مسلکی
                        </div>
                      </div>
                      <div className='text-4xl bg-accents_2 ml-8 flex items-center justify-center w-20 h-20 rounded-1/2'>
                        <i className='flaticon-quality'></i>
                      </div>
                    </li>
                    <li className='flex justify-end items-center mb-4'>
                      <div>
                        <h4 className='text-base sm:text-lg lg:text-xl'>به موقع بودن</h4>
                        <div className='text-paragraph text-sm md:text-medium lg:text-base'>
                          متعهد جهت ارایه و انجام خدمات در زمان از قبل تعیین شده
                        </div>
                      </div>
                      <div className='text-4xl bg-accents_2 ml-8 flex items-center justify-center w-20 h-20 rounded-1/2'>
                        <i className='flaticon-timeline'></i>
                      </div>
                    </li>
                    <li className='flex justify-end items-center mb-4'>
                      <div>
                        <h4 className='text-base sm:text-lg lg:text-xl'>قیمت گذاری عادلانه</h4>
                        <div className='text-paragraph text-sm md:text-medium lg:text-base'>
                          نرخ های عادلانه و قابل حصول برای همه خدمات ما
                        </div>
                      </div>
                      <div className='text-4xl bg-accents_2 ml-8 flex items-center justify-center w-20 h-20 rounded-1/2'>
                        <i className='flaticon-save-money'></i>
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
