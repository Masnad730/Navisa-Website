const ServicesFeatures = () => {
  return (
    <div className='py-8'>
      <h2 className='text-lg sm:text-xl lg:text-2xl mb-4'>Our Best Features</h2>
      <p className='leading-8 text-sm md:text-medium lg:text-base'>
        Navisa is well-known for its customers' satisfaction. Generally, our priority is to get
        customers not for a day, a week, or a month, but for a lifetime. In order to fulfil this
        task, we extremely focus on the following points:
      </p>
      <div className='mt-8'>
        <div className='row'>
          <div className='col-md-6 overflow-hidden'>
            <div className='relative border-t border-accents_2 p-4 mb-8'>
              <h5 className='text-sm sm:text-base lg:text-lg font-bold mb-4'>Excellent Quality</h5>
              <p className='leading-6 text-paragraph text-sm md:text-medium lg:text-base'>
                With the help of our professional and experienced translators, we ensure that your
                documents are translated at the best possible quality.
              </p>
              <div className='text-8xl text-black absolute font-montserrat font-extrabold right-2.5 -top-6 opacity-10'>
                01
              </div>
            </div>
          </div>
          <div className='col-md-6 hidden lg:flex items-center'>
            <div>
              <img src='/images/svc-feature.jpg' alt='' />
            </div>
          </div>
          <div className='col-md-6 overflow-hidden'>
            <div className='relative border-t border-accents_2 p-4 mb-8'>
              <h5 className='text-sm sm:text-base lg:text-lg font-bold mb-4'>Fast Translation</h5>
              <p className='leading-6 text-paragraph text-sm md:text-medium lg:text-base'>
                Don’t worry! We won’t make you wait for your translations any longer than what is
                necessary to maintain its quality. And if you are in a particular hurry, our team
                also goes extra miles to carry out your translations at the least possible time.
              </p>
              <div className='text-8xl text-black absolute font-montserrat font-extrabold right-2.5 -top-6 opacity-10'>
                02
              </div>
            </div>
          </div>
          <div className='col-md-6 overflow-hidden'>
            <div className='relative border-t border-accents_2 p-4 mb-8'>
              <h5 className='text-sm sm:text-base lg:text-lg font-bold mb-4'>Reasonable Prices</h5>
              <p className='leading-6 text-paragraph text-sm md:text-medium lg:text-base'>
                We provide our translation services at the fair and competitive rates that are
                affordable to our customers, and we don’t compromise the quality and timeliness of
                service for it!
              </p>
              <div className='text-8xl text-black absolute font-montserrat font-extrabold right-2.5 -top-6 opacity-10'>
                03
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ServicesFeatures
