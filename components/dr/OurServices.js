import Fade from 'react-reveal/Fade'
import Link from 'next/link'

const OurServices = () => {
  return (
    <section className='bg-secondary text-white'>
      <div className='container py-20'>
        <div className='row'>
          <div className='col-md-8 offset-md-2 text-center'>
            <Fade up>
              <div className='mb-14'>
                <h2 className='text-xl sm:text-3xl lg:text-4xl text-white mb-7'>خدمات ما</h2>
                <span className='text-accents_6'>
                  ما دامنهٔ وسیعی از خدمات ترجمه را فراهم نموده و رضایت مشتری را بطور کامل تأمین می
                  نماییم
                </span>
              </div>
            </Fade>
          </div>
        </div>
        <Fade left>
          <div className='bg-white text-black text-center w-full'>
            <div className='row margin-l-0 margin-r-0'>
              <div className='col-lg-3 col-md-3 border border-accents_4 border-r-0 last:border-r-0'>
                <article className='pt-8 pb-12 px-2'>
                  <div className='text-primary svc-icon'>
                    <i className='flaticon-proofreading'></i>
                  </div>
                  <h4 className='text-base sm:text-lg lg:text-xl mb-8 uppercase font-bold'>
                    تصحیح مسلکی
                  </h4>
                  <p className='text-base text-accents_6 font-medium leading-relaxed mt-3'>
                    دارایی های دیجیتلی و فزیکی شما از جمله وب سایت، وبلاگ، اسناد رسمی، ایمیل های
                    مسلکی
                  </p>
                  <div className='mt-10'>
                    <Link href='/dr/professional-proofreading'>
                      <a className='bg-accents_3 px-5 py-3'>بیشتر</a>
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
                    خدمات رونویسی
                  </h4>
                  <p className='text-base text-accents_6 font-medium leading-relaxed mt-3'>
                    تیم تخصصی ما خدمات رونویسی به موقع، سریع، حاصل کار انسانی و با کیفیت عالی
                  </p>
                  <div className='mt-10'>
                    <Link href='/dr/transcription'>
                      <a className='bg-accents_3 px-5 py-3'>بیشتر</a>
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
                    محلی سازی وب سایت
                  </h4>
                  <p className='text-base text-accents_6 font-medium leading-relaxed mt-3'>
                    محلی سازی وب سایت پروسه مناسب سازی وب سایت به یک دسته مخاطبان مشخص می باشد.
                  </p>
                  <div className='mt-10'>
                    <Link href='/dr/website-localization'>
                      <a className='bg-accents_3 px-5 py-3'>بیشتر</a>
                    </Link>
                  </div>
                </article>
              </div>
              <div className='col-lg-3 col-md-3 border border-accents_4 border-r-0 last:border-r-0'>
                <article className='pt-8 pb-12 px-2'>
                  <div className='text-primary svc-icon'>
                    <i className='flaticon-translation'></i>
                  </div>
                  <h4 className='text-base sm:text-lg lg:text-xl mb-8 uppercase font-bold'>
                    خدمات ترجمه
                  </h4>
                  <p className='text-base text-accents_6 font-medium leading-relaxed mt-3'>
                    دارالترجمه نویسا خدمات سریع و دقیق ترجمه را در زبان های پشیبانی شده ارایه می کند
                  </p>

                  <div className='mt-10'>
                    <Link href='/dr/translation'>
                      <a className='bg-accents_3 px-5 py-3'>بیشتر</a>
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
