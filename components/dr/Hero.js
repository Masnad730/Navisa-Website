import Link from 'next/link'
import Fade from 'react-reveal/Fade'

const Hero = () => {
  return (
    <div className='relative'>
      <div>
        <img src='/images/slide-1-2.jpg' alt='' />
      </div>
      <div className='absolute top-1/2 left-0 transform -translate-y-1/2 w-full'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 offset-md-4 text-left'>
              <div className='text-white text-right'>
                <Fade left>
                  <div className='flex items-center justify-end mb-6'>
                    <h6 className='text-xs sm:text-sm lg:text-base text-white'>
                      خوش آمدید به نویسا
                    </h6>
                    <span className='w-10 h-0.5 bg-primary-light-1 text-left ml-4'></span>
                  </div>
                </Fade>
                <Fade up>
                  <div>
                    <h1 className='text-3xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6'>
                      خدمات مسلکی ترجمه
                    </h1>
                  </div>

                  <div className='text-accents_4 mb-6'>
                    فراهم آوری خدمات مسلکی مرتبط با ترجمه در هر سطح برای مشتریان در سکتور های مختلف
                  </div>
                </Fade>
                <Fade up>
                  <div className='bg-primary hover:bg-primary-2 hover:text-secondary w-max px-8 py-3 rounded-full float-right transition-all'>
                    <Link href='/about'>
                      <a className='uppercase text-sm'>بیشتر در مورد ما</a>
                    </Link>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
