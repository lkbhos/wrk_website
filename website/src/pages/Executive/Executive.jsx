import React from 'react'
import { Helmet } from 'react-helmet-async'
import './Executive.css'
const Executive = () => {
  return (
    <Helmet>
                <title>ทำเนียบผู้บริหาร</title>
                <meta name="title" content="โรงพยาบาลลานกระบือ" />
                <meta name="description" content="ทำเนียบผู้บริหาร"/>
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://lkbhos.moph.go.th/" />
                <meta property="og:title" content="โรงพยาบาลลานกระบือ" />
                <meta property="og:description" content="ทำเนียบผู้บริหาร" />
                <meta property="og:image" content="https://lkbhos.moph.go.th/api/files/lkbhos.jpg" /> 
    </Helmet>
  )
}

export default Executive