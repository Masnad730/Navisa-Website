import { useUserEnquiryContext } from '../../contexts/userEnquiryContext'
import Loader from '../../components/Loader'

const EnquiryFormDR = () => {
  const { handleFormChange, createInquiry, userInquiry, loading } = useUserEnquiryContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    createInquiry('dr')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-md-6'>
          <input
            name='phone'
            value={userInquiry.phone}
            onChange={handleFormChange}
            className='text-right'
            type='text'
            placeholder='شماره تماس'
          />
        </div>
        <div className='col-md-6'>
          <input
            name='name'
            value={userInquiry.name}
            onChange={handleFormChange}
            className='text-right'
            type='text'
            placeholder='اسم'
            required
          />
        </div>

        <div className='col-12'>
          <input
            name='email'
            value={userInquiry.email}
            onChange={handleFormChange}
            className='text-right'
            type='email'
            placeholder='ایمیل آدرس'
            required
          />
        </div>
        <div className='col-12'>
          <input
            name='company'
            value={userInquiry.company}
            onChange={handleFormChange}
            className='text-right'
            type='text'
            placeholder='شرکت'
          />
        </div>
        <div className='col-12'>
          <textarea
            name='message'
            value={userInquiry.message}
            onChange={handleFormChange}
            className='text-right'
            id=''
            cols='30'
            rows='5'
            placeholder='!بیشتر در مورد آنچه نیاز دارید به ما بگویید'
            required
          ></textarea>
        </div>
        <div className='col-12'>
          <button
            className='bg-secondary text-white flex items-center justify-center w-full'
            type='submit'
          >
            {loading ? <Loader color='#fff' height='25' width='25' /> : 'ارسال'}
          </button>
        </div>
      </div>
    </form>
  )
}
export default EnquiryFormDR
