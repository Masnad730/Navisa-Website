import React from 'react'
import Head from 'next/head'

import Header from './../Header'
import Footer from './../Footer'

const Layout = ({ children, title, canonical, descriptionContent, jsonLD, activePage }) => {
  return (
    <React.Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='UTF-8' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <link rel='canonical' href={canonical} />
        <meta name='description' content={descriptionContent} />
        <meta name='keywords' content='' />

        <meta property='og:title' content='دارالترجمه نویسا' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://navisa.af/dr/' />
        <meta property='og:image' content='https://navisa.af/images/navisa-logo.png' />
        <meta property='og:site_name' content='دارالترجمه نویسا' />
        <meta
          property='og:description'
          content='دارالترجمه نویسا یک شرکت خدماتی واقع در افغانستان بوده که عمدتاً در زمینه خدمات ترجمه فعالیت دارد'
        />
        <meta property='og:image:secure_url' content='https://navisa.af/images/navisa-logo.png' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='دارالترجمه نویسا' />
        <meta
          name='twitter:description'
          content='دارالترجمه نویسا یک شرکت خدماتی واقع در افغانستان بوده که عمدتاً در زمینه خدمات ترجمه فعالیت دارد'
        />
        <meta name='twitter:image' content='https://navisa.af/images/navisa-logo.png' />

        <link rel='icon' href='/images/' sizes='16/16' type='image.png' />
        <title>{title}</title>
        <script type='application/ld+json'>{jsonLD}</script>
      </Head>
      <Header activePage={activePage} />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
