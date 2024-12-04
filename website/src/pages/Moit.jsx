import React from 'react'
import { Helmet } from 'react-helmet-async';
const moit = () => {
  return (
    <div>
      <Helmet>
            <title>โรงพยาบาลลานกระบือ | MOIT68</title>
            <meta name="title" content="โรงพยาบาลลานกระบือ" />
            <meta name="description" content="โรงพยาบาลลานกระบือ 62 หมู่ 6 ตำบลลานกระบือ อำเภอลานกระบือ จังหวัดกำแพงเพชร 62170" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://lkbhos.moph.go.th/" />
            <meta property="og:title" content="โรงพยาบาลลานกระบือ" />
            <meta property="og:description" content="โรงพยาบาลลานกระบือ 62 หมู่ 6 ตำบลลานกระบือ อำเภอลานกระบือ จังหวัดกำแพงเพชร 62170" />
            <meta property="og:image" content="https://lkbhos.moph.go.th/api/images/lkbhos.jpg" /> 
        </Helmet>
        <div className='moit__container'>
            <div className='moit_content'>
                <div className='hero' style={{ backgroundImage: `url(${import.meta.env.VITE_API_URL+'/images/bg_head.jpg'})` }}>
                  <div className='hero-content'>
                     <div className='moit__head'>
                        <h2>MITAS (MOPH Integrity and Transparency Assessment System)</h2>
                        <h2>ปีงบประมาณ 2568</h2>
                        <p><hr /></p>
                     </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default moit