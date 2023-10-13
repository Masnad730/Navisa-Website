import { useState } from 'react'
import Link from 'next/link'

const MobileHeader = ({ activePage, language, handleChange }) => {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='w-full'>
      <div className='container'>
        <div className='flex items-center justify-between py-4'>
          {/*<div className='col-4 flex items-center justify-end'>

  </div>*/}
          <div className='flex items-center justify-center'>
            <div>
              <Link href='/'>
                <a>
                  <img
                    className='w-20 md:w-28'
                    src='/images/navisa-logo.png'
                    alt='Navisa Translation Services'
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className='flex items-center justify-end'>
            <button className='px-0 py-0 transition-all' onClick={() => setShowMenu(!showMenu)}>
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
              >
                <title>menu-toggle</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
              </svg>
            </button>
            <div
              className={
                showMenu
                  ? 'fixed top-0 right-0/4 bg-white w-80 md:w-96 h-screen z-50 transition-all duration-75'
                  : 'fixed top-0 -right-full transition-all duration-75'
              }
            >
              <div className='w-full flex flex-col text-right'>
                <div className='flex items-center justify-between px-8 py-6 border-b border-accents_4'>
                  <label
                    htmlFor='menu-toggle'
                    className='cursor-pointer transition-all'
                    onClick={() => setShowMenu(false)}
                  >
                    <svg className='fill-current' width='30' height='30' viewBox='0 0 20 20'>
                      <title>cancel-menu</title>
                      <path d='M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z'></path>
                    </svg>
                  </label>
                  <span>مینوی اصلی</span>
                </div>
                <nav className='flex items-center'>
                  <ul className='flex flex-col w-full'>
                    <li className='py-4 w-full border-b border-accents_4 px-5'>
                      <Link href='/fa/'>
                        <a
                          className={activePage === 'home' ? 'text-primary' : 'hover:text-primary'}
                        >
                          خانه
                        </a>
                      </Link>
                    </li>
                    <li className='py-4 w-full border-b border-accents_4 px-5'>
                      <Link href='/fa/about'>
                        <a
                          className={activePage === 'about' ? 'text-primary' : 'hover:text-primary'}
                        >
                          در باره ما
                        </a>
                      </Link>
                    </li>
                    <li className='py-4 w-full border-b border-accents_4 pr-5'>
                      <Link href='#'>
                        <a className='relative'>
                          <div
                            className='flex items-center justify-between pl-5'
                            onClick={() => setShowSubMenu(!showSubMenu)}
                          >
                            <span
                              className={`flex items-center justify-center ${
                                showSubMenu
                                  ? 'transform rotate-180 transition-all duration-300 ease-in-out'
                                  : ''
                              }`}
                            >
                              <svg
                                className='w-2.5 h-2.5 pointer-events-none'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 412 232'
                              >
                                <path
                                  d='M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z'
                                  fill='#648299'
                                  fillRule='nonzero'
                                />
                              </svg>
                            </span>
                            <span>خدمات</span>
                          </div>
                          <ul className={showSubMenu ? 'block mt-2' : 'hidden'}>
                            <li className='px-5 py-4 flex border-b border-accents_4 last:border-b-0'>
                              <Link href='/fa/translation'>
                                <a
                                  className={
                                    activePage === 'translation'
                                      ? 'text-primary'
                                      : 'hover:text-primary w-full'
                                  }
                                >
                                  خدمات ترجمه
                                </a>
                              </Link>
                            </li>
                            <li className='px-5 py-4 flex border-b border-accents_4 last:border-b-0'>
                              <Link href='/fa/website-localization'>
                                <a
                                  className={
                                    activePage === 'website-localization'
                                      ? 'text-primary'
                                      : 'hover:text-primary w-full'
                                  }
                                >
                                  محلی سازی وب سایت
                                </a>
                              </Link>
                            </li>
                            <li className='px-5 py-4 flex border-b border-accents_4 last:border-b-0'>
                              <Link href='/fa/transcription'>
                                <a
                                  className={
                                    activePage === 'transcription'
                                      ? 'text-primary'
                                      : 'hover:text-primary w-full'
                                  }
                                >
                                  خدمات رونویسی
                                </a>
                              </Link>
                            </li>
                            <li className='px-5 py-4 flex border-b border-accents_4 last:border-b-0'>
                              <Link href='/fa/professional-proofreading'>
                                <a
                                  className={
                                    activePage === 'professional-proofreading'
                                      ? 'text-primary'
                                      : 'hover:text-primary w-full'
                                  }
                                >
                                  تصحیح مسلکی
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </a>
                      </Link>
                    </li>
                    <li className='py-4 w-full border-b border-accents_4 px-5'>
                      <Link href='/fa/resources'>
                        <a
                          className={
                            activePage === 'resources' ? 'text-primary' : 'hover:text-primary'
                          }
                        >
                          منابع
                        </a>
                      </Link>
                    </li>
                    <li className='py-4 w-full border-b border-accents_4 px-5'>
                      <Link href='/fa/contact'>
                        <a
                          className={
                            activePage === 'contact' ? 'text-primary' : 'hover:text-primary'
                          }
                        >
                          تماس با ما
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className='flex items-center justify-end mt-8 mr-5'>
                  <div className='relative inline-flex lg:ml-4'>
                    <svg
                      className='w-2 h-2 absolute top-0 right-0 mx-2 my-4 lg:m-4  pointer-events-none'
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
                      onChange={handleChange}
                      className='text-gray-600 pl-4 pr-8 mb-0 bg-white hover:border-gray-400 focus:outline-none appearance-none'
                    >
                      <option value='dari'>دری</option>
                      <option value='english'>English</option>
                    </select>
                  </div>
                </div>
                <div className='flex items-center justify-end mt-8 mr-5'>
                  <ul className='flex items-center'>
                    <li className='flex items-center mr-2 last:mr-0'>
                      <a
                        className='w-10 h-10 rounded-1/2 flex items-center justify-center bg-accents_3 hover:text-primary'
                        href='https://www.facebook.com/navisa.translations/?ref=page_internal'
                      >
                        <i className='flaticon-facebook'></i>
                      </a>
                    </li>
                    <li className='flex items-center mr-2 last:mr-0'>
                      <a
                        className='w-10 h-10 rounded-1/2 flex items-center justify-center bg-accents_3 hover:text-primary'
                        href='#'
                      >
                        <i className='flaticon-linkedin'></i>
                      </a>
                    </li>
                    <li className='flex items-center mr-2 last:mr-0'>
                      <a
                        className='w-10 h-10 rounded-1/2 flex items-center justify-center bg-accents_3 hover:text-primary'
                        href='#'
                      >
                        <i className='flaticon-twitter'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className={showMenu ? 'body-overlay' : 'hidden'}></span>
    </header>
  )
}
export default MobileHeader
