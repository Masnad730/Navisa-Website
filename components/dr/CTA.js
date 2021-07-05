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
                <div className='mr-16'>
                  <Link href='/dr/contact'>
                    <a className='bg-primary hover:bg-primary-2 hover:text-secondary px-6 py-4 uppercase transition-all'>
                      !از ما بپرسید
                    </a>
                  </Link>
                </div>
              </Fade>
              <Fade right>
                <h3 className='text-4xl tracking-wider text-white font-medium'>
                  <span className='font-extrabold'>خدمات حرفوی </span>ترجمه
                </h3>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CTA
