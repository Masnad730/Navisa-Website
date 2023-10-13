import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router'

const LanguageContext = createContext()

const LanguageContextProvider = ({ children }) => {
  const router = useRouter()
  const [language, setLanguage] = useState('')

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value)
    switch (router.pathname) {
      case '/':
        router.push('/fa')
        break
      case '/about':
        router.push('/fa/about')
        break
      case '/contact':
        router.push('/fa/contact')
        break
      case '/translation':
        router.push('/fa/translation')
        break
      case '/transcription':
        router.push('/fa/transcription')
        break
      case '/website-localization':
        router.push('/fa/website-localization')
        break
      case '/professional-proofreading':
        router.push('/fa/professional-proofreading')
        break
      case '/fa':
        router.push('/')
        break
      case '/fa/about':
        router.push('/about')
        break
      case '/fa/contact':
        router.push('/contact')
        break
      case '/fa/translation':
        router.push('/translation')
        break
      case '/fa/transcription':
        router.push('/transcription')
        break
      case '/fa/website-localization':
        router.push('/website-localization')
        break
      case '/fa/professional-proofreading':
        router.push('/professional-proofreading')
        break
      default:
        router.push('/')
    }
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        handleLanguageChange,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
export const useLanguageContext = () => {
  return useContext(LanguageContext)
}

export default LanguageContextProvider
