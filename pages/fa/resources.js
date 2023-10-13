import Link from 'next/link'
import Fade from 'react-reveal/Fade'
import Head from 'next/head'

import Layout from '../../components/fa/layout/Layout'

export default function Resources() {
  return (
    <Layout
      title='نمونه های ترجمه انگلیسی اسناد رسمی افغانستان - دارالترجمه نویسا'
      canonical='https://navisa.af/resources/'
      descriptionContent='تذکره کاغذی ساده - ترجمه انگلیسی دانلود رایگان, تذکره کاغذی جدید - ترجمه انگلیسی دانلود رایگان, تذکره کتابچه‌یی - ترجمه انگلیسی دانلود رایگان, نکاح خط - ترجمه انگلیسی دانلود رایگان, حصر وراثت - ترجمه انگلیسی دانلود رایگان, تصدیق فوتی - ترجمه انگلیسی دانلود رایگان, کارت واکسین کرونا - ترجمه انگلیسی دانلود رایگان, کارت تولد برای اطفال - ترجمه انگلیسی دانلود رایگان, کارت تولد برای افراد بالغ - ترجمه انگلیسی دانلود رایگان'
      jsonLD='{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://navisa.af/fa/#website",
            "url": "https://navisa.af/fa/",
            "name": "دارالترجمه نویسا",
            "description": "یک شرکت خدماتی واقع در افغانستان که عمدتاً در زمینه خدمات ترجمه فعالیت دارد",
            "publisher": { "@id": "https://navisa.af/fa/#organization" }
          },
          {
            "@type": "Organization",
            "@id": "https://navisa.af/fa/#organization",
            "legalName": "دارالترجمه نویسا",
            "url": "https://navisa.af/fa/",
            "logo": "https://navisa.af/images/navisa-logo.png"
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://navisa.af/fa/#breadcrumblist",
            "itemListElement": [
              {
                "@type": "ListItem",
                "@id": "https://navisa.af/fa/#listItem",
                "position": 1,
                "item": {
                  "@id": "https://navisa.af/fa/#item",
                  "name": "خانه",
                  "description": "دارالترجمه نویسا یک شرکت خدماتی واقع در افغانستان بوده که عمدتاً در زمینه خدمات ترجمه فعالیت دارد",
                  "url": "https://navisa.af/"
                }
              },
              {
                "@type": "ListItem",
                "@id": "https://navisa.af/fa/about/#listItem",
                "position": 2,
                "item": {
                  "@type": "WebPage",
                  "@id": "https://navisa.af/fa/about/#item",
                  "name": "در باره ما",
                  "description": ".دارالترجمه نویسا یک شرکت خدماتی واقع در افغانستان بوده که عمدتاً در ساحه ترجمه، محلی سازی وب سایت، رونویسی و تصحیح فعالیت دارد",
                  "url": "https://navisa.af/fa/about/"
                }
              }
            ]
          },
          {
            "@type": "WebPage",
            "@id": "https://navisa.af/fa/resources/#webpage",
            "url": "https://navisa.af/fa/resources/",
            "name": "منابع",
            "description": "تذکره کاغذی ساده - ترجمه انگلیسی دانلود رایگان, تذکره کاغذی جدید - ترجمه انگلیسی دانلود رایگان, تذکره کتابچه‌یی - ترجمه انگلیسی دانلود رایگان, نکاح خط - ترجمه انگلیسی دانلود رایگان, حصر وراثت - ترجمه انگلیسی دانلود رایگان, تصدیق فوتی - ترجمه انگلیسی دانلود رایگان, کارت واکسین کرونا - ترجمه انگلیسی دانلود رایگان, کارت تولد برای اطفال - ترجمه انگلیسی دانلود رایگان, کارت تولد برای افراد بالغ - ترجمه انگلیسی دانلود رایگان",
            "inLanguage": "fa-AF",
            "isPartOf": { "@id": "https://navisa.af/fa/#website" },
            "breadcrumb": { "@id": "https://navisa.af/fa/#breadcrumblist" },
            "datePublished":"2021-1-27T10:03:55+00:00",
            "dateModified":"2021-13-16T07:23:07+00:00"
          }
        ]
      }'
      activePage='resources'
    >
      <Head>
        <html lang='fa-IR' />
      </Head>
      <section className='text-right text-white svc-bg-image'>
        <div className='pt-20 pb-10'>
          <div className='container'>
            <Fade up>
              <div className=''>
                <h6 className='text-sm sm:text-sm lg:text-base text-white uppercase pr-16 mb-4 relative title-decorated_right'>
                  منابع
                </h6>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold pl-12 mb-8'>
                  نمونه های ترجمه انگلیسی اسناد رسمی افغانستان
                </h1>
              </div>
            </Fade>
            <Fade left>
              <ul className='flex justify-end items-center text-primary-2 text-sm sm:text-sm lg:text-base'>
                <li className='px-4 relative breadcrumb-arr_right'>منابع</li>
                <li className='pr-0 px-4 relative breadcrumb-arr_right'>
                  <Link href='/fa'>
                    <a className='hover:text-primary'>خانه</a>
                  </Link>
                </li>
              </ul>
            </Fade>
          </div>
        </div>
      </section>
      <section className='py-24 text-accents_7' dir='rtl'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='border-b border-accents_4 pb-4'>
                <h1 className='text-base md:text-xl'>نمونه ها</h1>
              </div>
            </div>
          </div>
          <div className='row mt-8'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='mb-8'>
                <figure>
                  <img
                    className='object-cover'
                    src='/images/templates/Tazkira-Old Paper Format-EN.jpg'
                    alt=''
                  />
                  <figcaption className='text-sm uppercase leading-relaxed tracking-wide pt-8 pb-4 h-20'>
                    تذکره کاغذی ساده - ترجمه انگلیسی
                  </figcaption>
                </figure>
                <div className=''>
                  <a
                    className='text-primary-2'
                    href='/templates/Tazkira-Old Paper Format-EN.docx'
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='mb-8'>
                <figure>
                  <img
                    className='object-cover'
                    src='/images/templates/Tazkira-New Paper Format-EN.jpg'
                    alt=''
                  />
                  <figcaption className='text-sm uppercase leading-relaxed tracking-wide pt-8 pb-4 h-20'>
                    تذکره کاغذی جدید - ترجمه انگلیسی
                  </figcaption>
                </figure>
                <div className=''>
                  <a
                    className='text-primary-2'
                    href='/templates/Tazkira-New Paper Format-EN.docx'
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='mb-8'>
                <figure>
                  <img
                    className='object-cover'
                    src='/images/templates/Tazkira-Booklet Format-EN.jpg'
                    alt=''
                  />
                  <figcaption className='text-sm uppercase leading-relaxed tracking-wide pt-8 pb-4 h-20'>
                    تذکره کتابچه‌یی - ترجمه انگلیسی
                  </figcaption>
                </figure>

                <div className=''>
                  <a
                    className='text-primary-2'
                    href='/templates/Tazkira-Booklet Format-EN.docx'
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='mb-8'>
                <figure>
                  <img
                    className='object-cover'
                    src='/images/templates/Marrige Certificate.jpg'
                    alt=''
                  />
                  <figcaption className='text-sm uppercase leading-relaxed tracking-wide pt-8 pb-4 h-20'>
                    نکاح خط - ترجمه انگلیسی
                  </figcaption>
                </figure>
                <div className=''>
                  <a className='text-primary-2' href='/templates/Marrige Certificate.docx' download>
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='mb-8'>
                <figure className='max-h-min'>
                  <img
                    className='object-cover'
                    src='/images/templates/Inheritance Certificate.jpg'
                    alt=''
                  />
                  <figcaption className='text-sm uppercase leading-relaxed tracking-wide pt-8 pb-4 h-20'>
                    حصر وراثت - ترجمه انگلیسی
                  </figcaption>
                </figure>
                <div className=''>
                  <a
                    className='text-primary-2'
                    href='/templates/Inheritance Certificate.docx'
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='mb-8'>
                <figure>
                  <img
                    className='object-cover'
                    src='/images/templates/Death Report-EN.jpg'
                    alt=''
                  />
                  <figcaption className='text-sm uppercase leading-relaxed tracking-wide pt-8 pb-4 h-20'>
                    تصدیق فوتی - ترجمه انگلیسی
                  </figcaption>
                </figure>

                <div className=''>
                  <a className='text-primary-2' href='/templates/Death Report-EN.docx' download>
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='mb-8'>
                <figure>
                  <img
                    className='object-cover'
                    src='/images/templates/COVID-19 Vaccination Card-EN.jpg'
                    alt=''
                  />
                  <figcaption className='text-sm uppercase leading-relaxed tracking-wide pt-8 pb-4 h-20'>
                    {' '}
                    کارت واکسین کرونا - ترجمه انگلیسی
                  </figcaption>
                </figure>

                <div className=''>
                  <a
                    className='text-primary-2'
                    href='/templates/COVID-19 Vaccination Card-EN.docx'
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='mb-8'>
                <figure>
                  <img
                    className='object-cover'
                    src='/images/templates/Birth Certificates-Child-EN.jpg'
                    alt=''
                  />
                  <figcaption className='text-sm uppercase leading-relaxed tracking-wide pt-8 pb-4 h-20'>
                    کارت تولد برای اطفال - ترجمه انگلیسی
                  </figcaption>
                </figure>

                <div className=''>
                  <a
                    className='text-primary-2'
                    href='/templates/Birth Certificates-Child-EN.docx'
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='mb-8'>
                <figure>
                  <img
                    className='object-cover'
                    src='/images/templates/Birth Certificates-Adult-EN.jpg'
                    alt=''
                  />
                  <figcaption className='text-sm uppercase leading-relaxed tracking-wide pt-8 pb-4 h-20'>
                    کارت تولد برای افراد بالغ - ترجمه انگلیسی
                  </figcaption>
                </figure>

                <div className=''>
                  <a
                    className='text-primary-2'
                    href='/templates/Birth Certificates-Adult-EN.docx'
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
