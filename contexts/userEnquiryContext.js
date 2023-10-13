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
const UserEnquiryContext = createContext()

const UserEnquiryContextProvider = ({ children }) => {
  const [openSnackbar, closeSnackbar] = useSnackbar(options)
  const [loading, setLoading] = useState(false)
  const [userInquiry, setUserInquiry] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  })

  const handleFormChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserInquiry({ ...userInquiry, [name]: value })
  }

  async function createInquiry(lang) {
    setLoading(true)
    const res = await axios
      .post('https://wpbackend.navisa.af/wp-json/jwt-auth/v1/token', {
        username: 'admin',
        password: 'I6FR%0^hD@Z[@',
      })
      .then(async (res) => {
        await axios
          .post(
            'https://wpbackend.navisa.af/wp-json/wp/v2/navisa-enquiry',
            {
              title: 'User Enquiry - Navisa Translation Services',
              status: 'publish',
              fields: {
                name: userInquiry.name,
                phone: userInquiry.phone,
                email: userInquiry.email,
                company: userInquiry.company,
                message: userInquiry.message,
              },
            },
            {
              headers: {
                Authorization: `Bearer ${res.data.token}`,
              },
            }
          )
          .then((res) => {
            setLoading(false)
            if (res.status === 201) {
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
            return res.data
          })
          .catch((err) => {
            console.log(err)
            openSnackbar(
              'There was an error trying to send your message, Please check your network connection and try again.'
            )
            setLoading(false)
          })
      })
      .catch((err) => {
        console.log(err)
      })
    setUserInquiry({
      name: '',
      phone: '',
      email: '',
      company: '',
      message: '',
    })
    {
      /*await axios
      .post('https://abr-backend.herokuapp.com/navisa-enquiries', {
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
      })*/
    }
  }
  return (
    <UserEnquiryContext.Provider
      value={{
        handleFormChange,
        createInquiry,
        userInquiry,
        loading,
      }}
    >
      {children}
    </UserEnquiryContext.Provider>
  )
}
export const useUserEnquiryContext = () => {
  return useContext(UserEnquiryContext)
}

export default UserEnquiryContextProvider
