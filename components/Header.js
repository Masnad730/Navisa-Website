import Link from 'next/link'

import MobileHeader from './MobileHeader'
import { useLanguageContext } from '../contexts/languageContext'

const Header = ({ activePage }) => {
  const { handleLanguageChange, language } = useLanguageContext()

  return (
    <>
      <div className='block lg:hidden'>
        <MobileHeader
          activePage={activePage}
          language={language}
          handleChange={handleLanguageChange}
        />
      </div>
      <div className='hidden lg:block'>
        <header className='w-full'>
          <div className='py-4'>
            <div className='container'>
              <div className='row items-center'>
                <div className='col-md-3'>
                  <div>
                    <Link href='/'>
                      <a>
                        <img
                          className='w-36'
                          src='/images/navisa-logo.png'
                          alt='Navisa Translation Services'
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className='col-md-6'>
                  <nav className='flex items-center'>
                    <ul className='flex'>
                      <li className='mr-8 last:mr-0 py-4'>
                        <Link href='/'>
                          <a
                            className={
                              activePage === 'home' ? 'text-primary' : 'hover:text-primary'
                            }
                          >
                            Home
                          </a>
                        </Link>
                      </li>
                      <li className='mr-8 last:mr-0 py-4'>
                        <Link href='/about'>
                          <a
                            className={
                              activePage === 'about' ? 'text-primary' : 'hover:text-primary'
                            }
                          >
                            About
                          </a>
                        </Link>
                      </li>
                      <li className='mr-8 last:mr-0 py-4 group'>
                        <Link href='#'>
                          <a className='relative'>
                            Services
                            <svg
                              className='w-2.5 h-2.5 ml-2 inline pointer-events-none'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 412 232'
                            >
                              <path
                                d='M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z'
                                fill='#648299'
                                fillRule='nonzero'
                              />
                            </svg>
                            <ul className='hidden opacity-0 absolute left-0 top-0 z-50 mt-8 py-5 w-64 max bg-white shadow-lg border border-accents_2 group-hover:block group-hover:opacity-100'>
                              <li className='px-7 py-1.5 flex'>
                                <Link href='/translation'>
                                  <a
                                    className={
                                      activePage === 'translation'
                                        ? 'text-primary'
                                        : 'hover:text-primary w-full'
                                    }
                                  >
                                    Translation Services
                                  </a>
                                </Link>
                              </li>
                              <li className='px-7 py-1.5 flex'>
                                <Link href='/website-localization'>
                                  <a
                                    className={
                                      activePage === 'website-localization'
                                        ? 'text-primary'
                                        : 'hover:text-primary w-full'
                                    }
                                  >
                                    Website Localization
                                  </a>
                                </Link>
                              </li>
                              <li className='px-7 py-1.5 flex'>
                                <Link href='/transcription'>
                                  <a
                                    className={
                                      activePage === 'transcription'
                                        ? 'text-primary'
                                        : 'hover:text-primary w-full'
                                    }
                                  >
                                    Transcription Services
                                  </a>
                                </Link>
                              </li>
                              <li className='px-7 py-1.5 flex'>
                                <Link href='/professional-proofreading'>
                                  <a
                                    className={
                                      activePage === 'professional-proofreading'
                                        ? 'text-primary'
                                        : 'hover:text-primary w-full'
                                    }
                                  >
                                    Professional Proofreading
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </a>
                        </Link>
                      </li>
                      <li className='mr-8 last:mr-0 py-4'>
                        <Link href='/resources'>
                          <a
                            className={
                              activePage === 'resources' ? 'text-primary' : 'hover:text-primary'
                            }
                          >
                            Resources
                          </a>
                        </Link>
                      </li>
                      <li className='mr-8 last:mr-0 py-4'>
                        <Link href='/contact'>
                          <a
                            className={
                              activePage === 'contact' ? 'text-primary' : 'hover:text-primary'
                            }
                          >
                            Contact Us
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className='col-md-3'>
                  <div className='flex items-center justify-end'>
                    <ul className='flex items-center'>
                      <li className='flex items-center mr-2 last:mr-0'>
                        <a
                          className='w-10 h-10 rounded-1/2 flex items-center justify-center bg-tertiary hover:text-primary'
                          href='https://www.facebook.com/navisa.translations/?ref=page_internal'
                        >
                          <i className='flaticon-facebook'></i>
                        </a>
                      </li>
                      <li className='flex items-center mr-2 last:mr-0'>
                        <a
                          className='w-10 h-10 rounded-1/2 flex items-center justify-center bg-tertiary hover:text-primary'
                          href='#'
                        >
                          <i className='flaticon-linkedin'></i>
                        </a>
                      </li>
                      <li className='flex items-center mr-2 last:mr-0'>
                        <a
                          className='w-10 h-10 rounded-1/2 flex items-center justify-center bg-tertiary hover:text-primary'
                          href='#'
                        >
                          <i className='flaticon-twitter'></i>
                        </a>
                      </li>
                    </ul>
                    <div className='relative inline-flex ml-4'>
                      <svg
                        className='w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 412 232'
                      >
                        <path
                          d='M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z'
                          fill='#648299'
                          fillRule='nonzero'
                        />
                      </svg>
                      <select
                        value={language}
                        onChange={handleLanguageChange}
                        className='rounded-full text-gray-600 pl-4 pr-8 mb-0 bg-white hover:border-gray-400 focus:outline-none appearance-none'
                      >
                        <option value='english'>English</option>
                        <option value='dari'>دری</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
export default Header
