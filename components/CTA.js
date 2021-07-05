import Link from 'next/link'
import Fade from 'react-reveal/Fade'

const CTA = () => {
  return (
    <section className='bg-secondary text-white pt-16 pb-20'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-10 col-md-12'>
            <div className='flex justify-center items-center'>
              <Fade left>
                <h3 className='text-4xl text-white font-medium'>
                  Professional <span className='font-extrabold'>Translation Services</span>
                </h3>
              </Fade>
              <Fade right>
                <div className='ml-8'>
                  <Link href='/contact'>
                    <a className='bg-primary hover:bg-primary-2 hover:text-secondary px-6 py-4 uppercase transition-all'>
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
