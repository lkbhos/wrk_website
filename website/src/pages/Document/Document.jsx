import React from 'react'
import './Document.css'
import { Helmet } from 'react-helmet-async'
const Document = () => {
  return (
    <div className='contents__container'>
                    <title>...</title>
                    <meta name="title" content="โรงพยาบาลลานกระบือ" />
                    <meta name="description" content="..."/>
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://lkbhos.moph.go.th/" />
                    <meta property="og:title" content="โรงพยาบาลลานกระบือ" />
                    <meta property="og:description" content="..." />
                    <meta property="og:image" content="https://lkbhos.moph.go.th/api/files/lkbhos.jpg" /> 
      

      <div className="document__container">
          <div
                      className="hero"
                      style={{
                        backgroundImage: `url(${
                          import.meta.env.VITE_API_URL + "/files/bg_head.jpg"
                        })`,
                      }}
                    >
                      <div className="hero-content">
                        <div className="hero__head">
                          <h2>
                            เอกสาร
                          </h2>
                          <p>
                            <hr />
                          </p>
                        </div>
                      </div>
                  </div>
          </div>
    </div>
  )
}

export default Document