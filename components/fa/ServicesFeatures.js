const ServicesFeatures = () => {
  return (
    <div className='py-8 text-right'>
      <h2 className='text-lg sm:text-xl lg:text-2xl mb-4'>چرا ما را انتخاب کنید</h2>
      <p className='leading-8 text-sm md:text-medium lg:text-base'>
        نویسا مصروف به رضایت مشتریانش است. بطور عموم، اولویت ما جذت نمودن مشتریان نه برای یک روز، نه
        برای یک هفته و نه برای یک ماه؛ بلکه برای یک عمر است. برای این منظور، ما بالای موارد ذیل
        تمرکز داریم
      </p>
      <div className='mt-8'>
        <div className='row'>
          <div className='col-md-6 hidden lg:flex items-center'>
            <div>
              <img src='/images/svc-feature.jpg' alt='' />
            </div>
          </div>
          <div className='col-md-6 overflow-hidden'>
            <div className='relative border-t border-accents_2 p-4 mb-8'>
              <h5 className='text-sm sm:text-base lg:text-lg font-bold mb-4'>کیفیت عالی</h5>
              <p className='leading-6 text-paragraph text-sm md:text-medium lg:text-base'>
                با کمک تیمی از مترجمان مسلکی و مجرب، ما تضمین می نماییم که اسناد شما با بهترین کیفیت
                ممکن ترجمه می شود
              </p>
              <div className='text-8xl text-black absolute font-montserrat font-extrabold left-2.5 -top-6 opacity-10'>
                ۱
              </div>
            </div>
          </div>
          <div className='col-md-6 overflow-hidden'>
            <div className='relative border-t border-accents_2 p-4 mb-8'>
              <h5 className='text-sm sm:text-base lg:text-lg font-bold mb-4'>ترجمه سریع</h5>
              <p className='leading-6 text-paragraph text-sm md:text-medium lg:text-base'>
                نگران نباشید! ما شما را بیشتر از زمان مورد نیاز برای حفظ کیفیت کار ترجمه تان منتظر
                نمی گذاریم. حتا اگر شما در عجله قرار دارید، تیم ما اضافه کاری نموده تا ترجمه های شما
                را در حداقل زمان ممکن انجام دهد
              </p>
              <div className='text-8xl text-black absolute font-montserrat font-extrabold left-2.5 -top-6 opacity-10'>
                ۳
              </div>
            </div>
          </div>
          <div className='col-md-6 overflow-hidden'>
            <div className='relative border-t border-accents_2 p-4 mb-8'>
              <h5 className='text-sm sm:text-base lg:text-lg font-bold mb-4'>قیمت گذاری عادلانه</h5>
              <p className='leading-6 text-paragraph text-sm md:text-medium lg:text-base'>
                ما خدمات ترجمه خود را با نرخ های عادلانه و رقابتی ارایه می دهیم که مشتریان ما توان
                پرداخت آن را داشته باشند، و به خاطر داشته باشید که ما کیفیت و انجام به موقع کار را
                برای این منظور تخفیف نمی دهیم.
              </p>
              <div className='text-8xl text-black absolute font-montserrat font-extrabold left-2.5 -top-6 opacity-10'>
                ۲
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ServicesFeatures
