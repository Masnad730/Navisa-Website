import Link from 'next/link'
import Fade from 'react-reveal/Fade'

const CTA = () => {
  return (
    <section className='bg-secondary text-white pt-16 pb-20'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-10 col-md-12'>
            <div className='flex flex-col lg:flex-row justify-center items-center'>
              <div className='order-2 order-lg-1'>
                <Fade left>
                  <div className='mt-6 lg:mt-0 lg:mr-16 px-6 py-4 bg-primary hover:bg-primary-2 hover:text-secondary'>
                    <Link href='/fa/contact'>
                      <a className='text-sm md:text-medium lg:text-base px-6 py-4 uppercase transition-all'>
                        !از ما بپرسید
                      </a>
                    </Link>
                  </div>
                </Fade>
              </div>
              <div className='order-1 order-lg-2'>
                <Fade right>
                  <h3 className='text-2xl md:text-3xl lg:text-4xl tracking-wider text-white text-center font-medium'>
                    خدمات حرفوی <b className='font-extrabold'>ترجمه</b>
                  </h3>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CTA
