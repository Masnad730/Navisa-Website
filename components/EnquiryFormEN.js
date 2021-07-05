import { useLanguageContext } from '../contexts/languageContext'
import Loader from '../components/Loader'

const EnquiryFormEN = () => {
  const { handleChange, createInquiry, userInquiry, loading } = useLanguageContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    createInquiry('en')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-md-6'>
          <input
            name='name'
            value={userInquiry.name}
            onChange={handleChange}
            type='text'
            placeholder='Name'
            required
          />
        </div>
        <div className='col-md-6'>
          <input
            name='phone'
            value={userInquiry.phone}
            onChange={handleChange}
            type='text'
            placeholder='Phone'
          />
        </div>
        <div className='col-12'>
          <input
            name='email'
            value={userInquiry.email}
            onChange={handleChange}
            type='email'
            placeholder='Email'
            required
          />
        </div>
        <div className='col-12'>
          <input
            name='company'
            value={userInquiry.company}
            onChange={handleChange}
            type='text'
            placeholder='Company'
          />
        </div>
        <div className='col-12'>
          <textarea
            name='message'
            value={userInquiry.message}
            onChange={handleChange}
            id=''
            cols='30'
            rows='5'
            placeholder='Tell us more about what you need?'
            required
          ></textarea>
        </div>
        <div className='col-12'>
          <button
            className='bg-secondary text-white flex items-center justify-center w-full'
            type='submit'
          >
            {loading ? <Loader color='#fff' height='25' width='25' /> : 'Submit'}
          </button>
        </div>
      </div>
    </form>
  )
}
export default EnquiryFormEN
