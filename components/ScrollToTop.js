import React, { useState, useEffect } from 'react'

const ScrollToTop = ({ showBelow }) => {
  const [show, setShow] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }
  return (
    <>
      {show && (
        <div className='z-50 fixed rounded-sm bottom-6 right-6 w-11 h-11 flex items-center justify-center cursor-pointer transition-all opacity-80 hover:opacity-100 bg-primary-2'>
          <div className='text-md text-secondary' onClick={handleClick}>
            <i className='flaticon-up-arrow'></i>
          </div>
        </div>
      )}
    </>
  )
}

export default ScrollToTop
