import React from 'react'
import { Helmet } from 'react-helmet-async'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { useParams, useNavigate } from 'react-router-dom'
import PdfFromUrl from '../../components/PdfFromUrl/PdfFromUrl'
const Docs = () => {
    const { id , name } = useParams()
    const pdfUrl = import.meta.env.VITE_API_URL+'/files/11234_finace67.pdf'
  return (
    <div className='contents__container'>
        <Breadcrumbs customTitles={{[id]:"รายงานการเงินประจำปี 2567"}} />
        <Helmet>
            <title>รายงานการเงินประจำปี 2567 | โรงพยาบาลลานกระบือ</title>
            <meta name="title" content="โรงพยาบาลลานกระบือ" />
            <meta name="description" content="รายงานการเงินประจำปี 2567 | โรงพยาบาลลานกระบือ"/>
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://lkbhos.moph.go.th/" />
            <meta property="og:title" content="โรงพยาบาลลานกระบือ" />
            <meta property="og:description" content="รายงานการเงินประจำปี 2567 | โรงพยาบาลลานกระบือ" />
            <meta property="og:image" content="https://lkbhos.moph.go.th/api/files/lkbhos.jpg" /> 
        </Helmet> 
        <div className="takemoit_content">
            <div className='hero' style={{ backgroundImage: `url(${import.meta.env.VITE_API_URL+'/files/bg_head.jpg'})` }}>
                <div className='hero-content'>
                    <div className='takemoit__head'>
                        <p>รายงานการเงินประจำปี 2567</p>    
                    </div>
                </div>
            </div>
            <PdfFromUrl pdfUrl={pdfUrl}/>
            <div className='credit_moit'>
                            <p>โดย.อภิสรา(นักวิชาการเงินและบัญชี)</p>
                            <p>เผยแพร่. 15/09/67</p>
                        </div>
        </div>
    </div>
  )
}

export default Docs