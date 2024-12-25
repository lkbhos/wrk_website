import React from 'react'
import './Doclist.css'
import { Helmet } from 'react-helmet-async'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import PdfFromUrl from '../../components/PdfFromUrl/PdfFromUrl'
const Doclist = () => {
  const pdfUrl = 'http://10.10.5.3:8081/api/files/test.pdf'
  const filename = "Law_1111.pdf"
  const handleDownload = async (pdf,filename) =>{
    try{
        const respone = await fetch(pdf)
        if (!respone.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const blob = await respone.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = filename
        document.body.appendChild(a);
        a.click()
        document.body.removeChild(a);
    }catch(err){
        alert("ไม่สามารถดาวน์โหลดไฟล์ได้")
    }
    
  }
  return (
    <div className='contents__container'>
      <Breadcrumbs customTitles={{}} />
        <Helmet>
                    <title>...</title>
                    <meta name="title" content="โรงพยาบาลลานกระบือ" />
                    <meta name="description" content="..."/>
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://lkbhos.moph.go.th/" />
                    <meta property="og:title" content="โรงพยาบาลลานกระบือ" />
                    <meta property="og:description" content="..." />
                    <meta property="og:image" content="https://lkbhos.moph.go.th/api/files/lkbhos.jpg" /> 
        </Helmet>
        <div className='hero' style={{ backgroundImage: `url(${import.meta.env.VITE_API_URL+'/files/bg_head.jpg'})` }}>
            <div className='hero-content'>
                <div className='takemoit__head'>
                    <p>LIST</p>
                </div>
            </div>
        </div>
        <div className="doclist__container">
            <div className="doclist__content">
            <PdfFromUrl pdfUrl={pdfUrl}/>
            <div className='doclist__download'>
                <button onClick={() => handleDownload(pdfUrl,filename)}><i class="ri-download-cloud-line"></i> ดาวน์โหลดไฟล์</button>
            </div>
            </div>
        </div> 
    </div>
  )
}

export default Doclist