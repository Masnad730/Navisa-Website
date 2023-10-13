import Link from 'next/link'
import Fade from 'react-reveal/Fade'

const CTA = () => {
  return (
    <section className='bg-secondary text-white pt-16 pb-20'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-10 col-md-12'>
            <div className='flex flex-col lg:flex-row justify-center items-center'>
              <Fade left>
                <h3 className='flex flex-col md:flex-row items-center text-2xl md:text-3xl lg:text-4xl text-white text-center font-medium'>
                  Professional <span className='font-extrabold ml-2'>Translation Services</span>
                </h3>
              </Fade>
              <Fade right>
                <div className='mt-6 lg:mt-0 lg:ml-8 px-6 py-4 bg-primary hover:bg-primary-2 hover:text-secondary'>
                  <Link href='/contact'>
                    <a className='text-sm md:text-medium lg:text-base uppercase transition-all'>
                      Enquire Now
                    </a>
                  </Link>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CTA
