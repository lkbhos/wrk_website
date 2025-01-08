import React from 'react'
import './Public.css'
import { Helmet } from 'react-helmet-async'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
const Public = () => {
  return (
    <div className='contents__container'>
        <Breadcrumbs customTitles={{}} />
        <Helmet>
            <title>ข่าวประชาสัมพันธ์ | โรงพยาบาลลานกระบือ</title>
            <meta name="title" content="โรงพยาบาลลานกระบือ" />
            <meta name="description" content="ดาวน์โหลดแบบฟอร์ม | โรงพยาบาลลานกระบือ"/>
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://lkbhos.moph.go.th/" />
            <meta property="og:title" content="โรงพยาบาลลานกระบือ" />
            <meta property="og:description" content="ดาวน์โหลดแบบฟอร์ม | โรงพยาบาลลานกระบือ" />
            <meta property="og:image" content="https://lkbhos.moph.go.th/api/files/lkbhos.jpg" /> 
        </Helmet> 
        <div className="form__container">
            <div className="form__title">
                <div className='form__head'>
                    <h2>ข่าวประชาสัมพันธ์</h2>
                    <hr />
                </div>
            </div> 

            <div className="form__content">
                        <div className="form__download">

                                    <div className='form__group' >
                                        <div className='form__name'>
                                            <i class="ri-arrow-right-s-fill"></i>
                                            <div><a href="/public/11234abc7589rDFG"><p>รายงานงบการเงินประจำปี 2567</p></a></div>
                                        </div>
                                        <small>ประกาศเมื่อ. 15/09/67</small>
                                    </div>
                        </div>
            </div>    
        </div>
    </div>
  )
}

export default Public