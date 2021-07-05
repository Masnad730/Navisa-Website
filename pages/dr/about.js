import Link from 'next/link'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import Fade from 'react-reveal/Fade'

import Layout from '../../components/dr/layout/Layout'
import WhyUs from '../../components/dr/WhyUs'
import CTA from '../../components/dr/CTA'

export default function Home() {
  return (
    <Layout activePage='about'>
      <section className='text-right text-white svc-bg-image'>
        <div className='pt-20 pb-10'>
          <div className='container'>
            <Fade up>
              <div>
                <h6 className='text-xs sm:text-sm lg:text-base text-white uppercase pr-16 mb-4 relative title-decorated_right'>
                  در باره ما
                </h6>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold pl-12 mb-8'>
                  در باره ما
                </h1>
              </div>
            </Fade>
            <Fade left>
              <ul className='flex justify-end items-center text-primary-2'>
                <li className='px-4 relative breadcrumb-arr_right'>در باره ما</li>
                <li className='pr-0 px-4 relative breadcrumb-arr_right'>
                  <Link href='/'>
                    <a className='hover:text-primary'>خانه</a>
                  </Link>
                </li>
              </ul>
            </Fade>
          </div>
        </div>
      </section>
      <div className='bg-accents_0'>
        <div className='container'>
          <div className='row py-20'>
            <div className='col-xl-6 col-lg-6'>
              <Fade left>
                <div className='flex flex-col items-center'>
                  <div className='bg-map'>
                    <div className='row justify-center'>
                      <div className='col-md-4'>
                        <div className='bg-accents_2 w-24 h-24 flex items-center justify-center rounded-full mx-auto mt-0 mb-7'>
                          <img src='/images/flags/afghanistan.png' alt='' />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='bg-accents_2 w-24 h-24 flex items-center justify-center rounded-full mx-auto mt-0 mb-7'>
                          <img src='/images/flags/united-kingdom.png' alt='' />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='bg-accents_2 w-24 h-24 flex items-center justify-center rounded-full mx-auto mt-0 mb-7'>
                          <img src='/images/flags/saudi-arabia.png' alt='' />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='bg-accents_2 w-24 h-24 flex items-center justify-center rounded-full mx-auto mt-0 mb-7'>
                          <img src='/images/flags/turkey.png' alt='' />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='bg-accents_2 w-24 h-24 flex items-center justify-center rounded-full mx-auto mt-0 mb-7'>
                          <img src='/images/flags/iran.png' alt='' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='border border-accents_4 rounded-lg flex items-center justify-center w-80 h-16 relative'>
                    <div className='bg-accents_0 custom-box-shadow rounded-lg w-full h-full flex items-center justify-center absolute -top-3 -right-3'>
                      <h3 className='text-base sm:lg lg:text-xl text-accents_7 tracking-wider uppercase'>
                        ما چند زبانه هستیم
                      </h3>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className='col-xl-6 col-lg-6'>
              <div className='text-right'>
                <Fade up>
                  <h2 className='text-xl sm:text-3xl lg:text-4xl mb-4 py-4 tracking-wider uppercase'>
                    در باره ما چی میدانید؟
                  </h2>
                  <div>
                    <p className='mb-7 last:mb-0 text-paragraph'>
                      دارالترجمه نویسا یک شرکت خدماتی واقع در افغانستان بوده که عمدتاً در زمینه
                      خدمات ترجمه فعالیت دارد. این شرکت با تیمی از مترجمان مسلکی و با تجربه و
                      کارشناسان در ساحه ترجمه، محلی سازی وب سایت، رونویسی و تصحیح که متعهد به ارایه
                      خدمات با کیفیت عالی استند، به کار خود آغاز کرده است.خدمات ما به زبان های دری،
                      انگلیسی، پشتو، .فارسی، عربی و ترکی ارایه می گردد
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <WhyUs />
        <CTA />
      </div>
      <div className='container'>
        <div className='py-20'>
          <div className='row'>
            <div className='col-md-4'>
              <Fade left>
                <div>
                  <img src='/images/industry.jpg' alt='' />
                </div>
              </Fade>
            </div>
            <div className='col-md-7 offset-md-1'>
              <div className='text-right'>
                <Fade up>
                  <div className='mb-10'>
                    <h2 className='text-2xl sm:text-4xl lg:text-5xl mb-6'>
                      ساحات تحت پوشش خدمات ما
                    </h2>
                    <p className='text-paragraph'>
                      خدمات ترجمه و خدمات مرتبط دیگری که توسط دارالترجمه نویسا ارایه می گردد، ساحاتی
                      چون: تجاری و مالی، طبی و بهداشت، حقوقی، بازاریابی و تبلیغاتی و فنی و موارد
                      .تخصصی مهندسی را پوشش می دهد
                    </p>
                  </div>
                </Fade>
                <div className='text-right'>
                  <Fade up>
                    <Accordion allowZeroExpanded preExpanded={['0']}>
                      <AccordionItem uuid='0'>
                        <AccordionItemHeading>
                          <AccordionItemButton className='bg-accents_0 p-4 flex items-center justify-between acc_btn_right'>
                            تجاری و مالی
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className='bg-tertiary p-8'>
                            <p>
                              دارالترجمه نویسا پشتیبانی کاملی برای ترجمه همه مطالب تجاری و مالی شما
                              شامل موارد ذیل ولی نه محدود به آنها را فراهم می سازد
                            </p>
                            <ul className='row mt-4'>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                اظهارات مالی<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                ارزیابی مالی<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                گزارشات مفتش یا بازرس<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                مالی(Spreadsheets)صفحات گسترده
                                <i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                برنامه (پلان) های کسب و کار<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                سیاست (پالیسی) های کسب و کار<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                انتشارات مطبوعاتی شرکت<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                گزارشات مالی<i className='flaticon-tick ml-3'></i>
                              </li>
                            </ul>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton className='bg-accents_0 p-4 flex items-center justify-between acc_btn_right'>
                            طبی و بهداشتی
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className='bg-tertiary p-8'>
                            <p>
                              دارالترجمه نویسا خدمات ترجمه مرتبط با موضوعات طبی و بهداشتی را با نرخ
                              ارزان فراهم ساخته که از گزارش پرونده بیمار تا برچسپ بسته بندی داروها
                              را پوشش می دهد. خدمات ما در این ساحه شامل موارد ذیل می گردد
                            </p>
                            <ul className='row mt-4'>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                گزارشات بیمار<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                گزارشات معاینه فزیکی<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                آزمایشات کلینیکی<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                تحقیقات طبی<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                سروی بهداشتی<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                مطالعات دارویی<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-12 flex items-center justify-end mb-3'>
                                بسته بندی و برچسپ دارو<i className='flaticon-tick ml-3'></i>
                              </li>
                            </ul>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton className='bg-accents_0 p-4 flex items-center justify-between acc_btn_right'>
                            حقوقی
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className='bg-tertiary p-8'>
                            <p>
                              تیم متخصصین ما با آگهی ژرف از رویه ها و مسایل حقوقی، خصوصاً قوانین
                              افغانستان، اطمینان می دهد که تمام اسناد حقوقی شما به موقع و با
                              بالاترین کیفیت ترجمه گردیده تا از اختلافات مسایل حقوقی احتمالی در
                              آینده جلوگیری صورت گیرد. ترجمه حقوقی ما شامل موضوعات ذیل می باشد
                            </p>
                            <ul className='row mt-4'>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                طرزالعمل های قانونی<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                پرونده جنایی<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                اسناد دقیق<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                مراحل دادگاه<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                ترجمه اظهارنامه<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                ترجمه اسناد دادخواهی<i className='flaticon-tick ml-3'></i>
                              </li>
                            </ul>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton className='bg-accents_0 p-4 flex items-center justify-between acc_btn_right'>
                            بازاریابی و تبلیغاتی
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className='bg-tertiary p-8'>
                            <p>
                              ما تضمین می نماییم که مواد بازاریابی شما طوری ترجمه می گردد که اثربخشی
                              و مفهوم واقعی آن حفظ گردیده و مؤثریت خود را در ترجمه از دست ندهد. ما
                              می توانیم شما را در ترجمه تمام انواع مواد بازاریابی و تبلیغاتی کمک
                              نماییم که شامل موارد ذیل بوده ولی محدود به آنها نمی باشد
                            </p>
                            <ul className='row mt-4'>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                برگه های معلوماتی (بروشور ها)
                                <i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                تحقیقات بازاریابی<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                خبرنامه ها<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                انتشارات مطبوعاتی<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                برنامه (پلان) بازاریابی<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                کارت های شناسایی-ارتباطی (بزنس کارت)
                                <i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                وب سایت ها<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                اسناد روابط عامه<i className='flaticon-tick ml-3'></i>
                              </li>
                            </ul>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton className='bg-accents_0 p-4 flex items-center justify-between acc_btn_right'>
                            فنی و مهندسی
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className='bg-tertiary p-8'>
                            <p>
                              تیم زبان شناسان ما کاملاً قادر به ترجمه حوزه گسترده¬ای از موضوعات فنی
                              و مهندسی می باشد که شامل موارد ذیل می گردد
                            </p>
                            <ul className='row mt-4'>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                مشخصات مهندسی<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                پیشنهادات فنی<i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                تعلیمات (راهنما) نامه های عملیاتی
                                <i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                تعلیمات (راهنما) نامه های نصب
                                <i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                تعلیمات (راهنما) نامه های ایمنی
                                <i className='flaticon-tick ml-3'></i>
                              </li>
                              <li className='col-md-6 flex items-center justify-end mb-3'>
                                پیشنهادات مهندسی<i className='flaticon-tick ml-3'></i>
                              </li>
                            </ul>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
