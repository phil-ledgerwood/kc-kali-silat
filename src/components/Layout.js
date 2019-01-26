import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          
          <link rel="apple-touch-icon" sizes="180x180" href="/img/metadata-images/apple-touch-icon.png" />
	        <link rel="icon" type="image/png" href="/img/metadata-images/favicon-32x32.png" sizes="32x32" />
	        <link rel="icon" type="image/png" href="/img/metadata-images/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="/img/metadata-images/android-chrome-192x192.png" sizes="192x192" />
          <link rel="icon" type="image/png" href="/img/metadata-images/android-chrome-512x512.png" sizes="512x512" />
	
	        <link rel="mask-icon" href="/img/metadata-images/safari-pinned-tab.svg" color="#ff4400" />
	        <meta name="theme-color" content="#fff" />
          <meta name="msapplication-TileColor" content="#efddb2" />
          <meta name="msapplication-TileImage" content="/img/metadata-images/mstile-150x150.png" />

	        <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/metadata-images/og-image.png" />
        </Helmet>
        <Navbar />
        <div>{children}</div>
      </div>
    )}
  />
)

export default TemplateWrapper
