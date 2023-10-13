import Link from 'next/link'

const ServicesNavMenu = ({ active }) => {
  return (
    <div>
      <ul>
        <li
          className={
            active === 'translation'
              ? 'border border-accents_2 py-3 rounded-md mb-4 last:mb-0 text-secondary bg-primary-2 transition-all'
              : 'border border-accents_2 py-3 rounded-md mb-4 last:mb-0 hover:bg-primary-2 hover:text-secondary transition-all'
          }
        >
          <Link href='/fa/translation'>
            <a className='relative flex items-center justify-end z-1 overflow-hidden'>
              <span className='font-medium menu-svc-arrow_right'>خدمات ترجمه</span>
              <div className='text-3xl ml-4 mr-2'>
                <i className='flaticon-translation'></i>
              </div>
            </a>
          </Link>
        </li>
        <li
          className={
            active === 'website-localization'
              ? 'border border-accents_2 py-3 rounded-md mb-4 last:mb-0 text-secondary bg-primary-2 transition-all'
              : 'border border-accents_2 py-3 rounded-md mb-4 last:mb-0 hover:bg-primary-2 hover:text-secondary transition-all'
          }
        >
          <Link href='/fa/website-localization'>
            <a className='relative flex items-center justify-end z-1 overflow-hidden'>
              <span className='font-medium menu-svc-arrow_right'>محلی سازی وب سایت</span>
              <div className='text-3xl ml-4 mr-2'>
                <i className='flaticon-website'></i>
              </div>
            </a>
          </Link>
        </li>

        <li
          className={
            active === 'transcription'
              ? 'border border-accents_2 py-3 rounded-md mb-4 last:mb-0 text-secondary bg-primary-2 transition-all'
              : 'border border-accents_2 py-3 rounded-md mb-4 last:mb-0 hover:bg-primary-2 hover:text-secondary transition-all'
          }
        >
          <Link href='/fa/transcription'>
            <a className='relative flex items-center justify-end z-1 overflow-hidden'>
              <span className='font-medium menu-svc-arrow_right'>خدمات رونویسی</span>
              <div className='text-3xl ml-4 mr-2'>
                <i className='flaticon-transcript'></i>
              </div>
            </a>
          </Link>
        </li>
        <li
          className={
            active === 'professional-proofreading'
              ? 'border border-accents_2 py-3 rounded-md mb-4 last:mb-0 text-secondary bg-primary-2 transition-all'
              : 'border border-accents_2 py-3 rounded-md mb-4 last:mb-0 hover:bg-primary-2 hover:text-secondary transition-all'
          }
        >
          <Link href='/fa/professional-proofreading'>
            <a className='relative flex items-center justify-end z-1 overflow-hidden'>
              <span className='font-medium menu-svc-arrow_right'>تصحیح مسلکی</span>
              <div className='text-3xl ml-4 mr-2'>
                <i className='flaticon-proofreading'></i>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default ServicesNavMenu
