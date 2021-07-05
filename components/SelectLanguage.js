import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const SelectLanguage = () => {
  const [language, setLanguage] = useState('english')
  const router = useRouter()

  const handleChange = (e) => {
    setLanguage(e.target.value)
    // if (e.target.value === 'dari') {
    //   router.push('/dr')
    // } else router.push('/')
  }

  useEffect(() => {
    if (language === 'dari') {
      router.push('/dr')
    } else router.push('/')
    console.log('from useEffect::::' + language)
  }, [language])

  console.log(language)
  return (
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
        onChange={handleChange}
        className='border border-accents_6 rounded-full text-gray-600 h-10 pl-5 pr-10 mb-0 bg-white hover:border-gray-400 focus:outline-none appearance-none'
      >
        <option value='english'>English</option>
        <option value='dari'>Dari</option>
      </select>
    </div>
  )
}
export default SelectLanguage
