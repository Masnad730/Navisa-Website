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
          <Link href='/translation'>
            <a className='relative flex items-center z-1 overflow-hidden'>
              <div className='text-3xl ml-4 mr-2'>
                <i className='flaticon-translation'></i>
              </div>
              <span className='font-medium menu-svc-arrow'>Translation Services</span>
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
          <Link href='/website-localization'>
            <a className='relative flex items-center z-1 overflow-hidden'>
              <div className='text-3xl ml-4 mr-2'>
                <i className='flaticon-website'></i>
              </div>
              <span className='font-medium menu-svc-arrow'>Website Localization</span>
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
          <Link href='/transcription'>
            <a className='relative flex items-center z-1 overflow-hidden'>
              <div className='text-3xl ml-4 mr-2'>
                <i className='flaticon-transcript'></i>
              </div>
              <span className='font-medium menu-svc-arrow'>Transcription Services</span>
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
          <Link href='/professional-proofreading'>
            <a className='relative flex items-center z-1 overflow-hidden'>
              <div className='text-3xl ml-4 mr-2'>
                <i className='flaticon-proofreading'></i>
              </div>
              <span className='font-medium menu-svc-arrow'>Professional Proofreading</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default ServicesNavMenu
