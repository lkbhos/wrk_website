import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import { Helmet } from 'react-helmet-async';
const home = () => {
  return (
    <div>
        <Helmet>
            <title>โรงพยาบาลลานกระบือ</title>
            <meta name="title" content="โรงพยาบาลลานกระบือ" />
            <meta name="description" content="โรงพยาบาลลานกระบือ 62 หมู่ 6 ตำบลลานกระบือ อำเภอลานกระบือ จังหวัดกำแพงเพชร 62170" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://lkbhos.moph.go.th/" />
            <meta property="og:title" content="โรงพยาบาลลานกระบือ" />
            <meta property="og:description" content="โรงพยาบาลลานกระบือ 62 หมู่ 6 ตำบลลานกระบือ อำเภอลานกระบือ จังหวัดกำแพงเพชร 62170" />
            <meta property="og:image" content="https://lkbhos.moph.go.th/api/images/lkbhos.jpg" /> 
        </Helmet>
        <div className="content">
                <div className="banner">
                    <div className="backgroung__">
                    <Carousel/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default home