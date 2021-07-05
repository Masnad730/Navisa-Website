import axios from 'axios'
import { createContext, useContext, useState } from 'react'
import { useSnackbar } from 'react-simple-snackbar'

const options = {
  position: 'top-right',
  style: {
    backgroundColor: '#212529',
    color: '#fff',
    fontSize: '14px',
    textAlign: 'center',
  },
  closeStyle: {
    color: '#fff',
    fontSize: '16px',
  },
}
const LanguageContext = createContext()

const LanguageContextProvider = ({ children }) => {
  const [openSnackbar, closeSnackbar] = useSnackbar(options)
  const [loading, setLoading] = useState(false)
  const [userInquiry, setUserInquiry] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  })
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserInquiry({ ...userInquiry, [name]: value })
  }

  async function createInquiry(lang) {
    setLoading(true)

    await axios
      .post('http://localhost:1337/user-inquiries', {
        name: userInquiry.name,
        phone: userInquiry.phone,
        email: userInquiry.email,
        company: userInquiry.company,
        message: userInquiry.message,
      })
      .then((res) => {
        if (res.statusText === 'OK') {
          if (lang === 'en') {
            openSnackbar('Your message has been submitted.')
          } else {
            openSnackbar('.پیام شما موفقانه ارسال گردید')
          }
          setLoading(false)
        } else {
          if (lang === 'dr') {
            openSnackbar('There was an error trying to send your message, Please try again.')
          } else {
            openSnackbar('.پیام شما موفقانه ارسال نگردید، لطفا دوباره کوشش کنید')
          }
          setLoading(false)
        }
        setUserInquiry({
          name: '',
          phone: '',
          email: '',
          company: '',
          message: '',
        })
      })
      .catch((err) => {
        openSnackbar(
          'There was an error trying to send your message, Please check your network connection and try again.'
        )
        setLoading(false)
        console.log(err)
      })
  }
  return (
    <LanguageContext.Provider
      value={{
        openSnackbar,
        handleChange,
        createInquiry,
        userInquiry,
        loading,
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
