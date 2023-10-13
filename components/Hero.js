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
            <div className='col-md-8 text-left'>
              <div className='text-white'>
                <Fade left>
                  <div className='flex items-center xs:mb-2 mb-4 lg:mb-6'>
                    <h6 className='text-xs sm:text-sm lg:text-base text-white'>
                      Welcome to Navisa
                    </h6>
                    <span className='w-10 h-0.5 bg-primary-light-1 text-left ml-4'></span>
                  </div>
                </Fade>
                <Fade up>
                  <div>
                    <h1 className='xs:text-xl text-2xl md:text-3xl lg:text-6xl text-white leading-tight capitalize mb-3 lg:mb-6'>
                      Professional Translation Services You Can Trust
                    </h1>
                  </div>
                  <div className='text-accents_4 mb-3 lg:mb-6 text-sm md:text-medium lg:text-base'>
                    Providing professional translation-related services of any complexity for
                    clients in various sectors
                  </div>
                </Fade>
                <Fade up>
                  <div className='bg-primary hover:bg-primary-2 hover:text-secondary w-max px-8 py-3 lg:rounded-full transition-all'>
                    <Link href='/about'>
                      <a className='uppercase xs:text-xs text-sm md:text-medium lg:text-base'>
                        more about us
                      </a>
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
