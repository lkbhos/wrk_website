import React from 'react'
import { Helmet } from 'react-helmet-async'
const Hospital = () => {
  return (
    <div className='contents__container'>
          <Helmet>
            <title>ประวัติโรงพยาบาล</title>
            <meta name="title" content="โรงพยาบาลลานกระบือ" />
            <meta name="description" content="ประวัติโรงพยาบาล"/>
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://lkbhos.moph.go.th/" />
            <meta property="og:title" content="โรงพยาบาลลานกระบือ" />
            <meta property="og:description" content="ประวัติโรงพยาบาล" />
            <meta property="og:image" content="https://lkbhos.moph.go.th/api/files/lkbhos.jpg" /> 
          </Helmet>
      </div>
  )
}

export default Hospital