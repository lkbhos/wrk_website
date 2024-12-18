import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import './TakeMoit.css'
import PdfFromUrl from '../../components/PdfFromUrl/PdfFromUrl'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const TakeMoit = () => {
    const [data , setData] = useState([])
    const { id , name } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        
        const fetchdata = async () => {
            try{
            
                const [resp] = await Promise.all([
                    axios.get(import.meta.env.VITE_API_URL+'/moit/'+id+'/'+name)
                ])
                if(resp.status !== 200){
                    navigate('/unauthorized')
                  }
                  setData(resp.data)
                  
            }catch(err){
                navigate('/unauthorized')
            }
        }
        fetchdata()
    },[])
  
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
    <div>
        {data.map((item)=>{
            const namepdf = item.childrens.subtitle.pdfurl || item.childrens.pdfurl
            const pdfUrl = import.meta.env.VITE_API_URL+'/files/'+namepdf
            const filename = item.childrens.nums||item.childrens.subtitle.nums+"_moit_11234.pdf"
            return(
            <div>
                <Helmet>
                    <title>{data[0].childrens.subtitle.title || data[0].childrens.title ||'Default Title'}</title>
                    <meta name="title" content="โรงพยาบาลลานกระบือ" />
                    <meta name="description" content="โรงพยาบาลลานกระบือ 62 หมู่ 6 ตำบลลานกระบือ อำเภอลานกระบือ จังหวัดกำแพงเพชร 62170" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://lkbhos.moph.go.th/" />
                    <meta property="og:title" content="โรงพยาบาลลานกระบือ" />
                    <meta property="og:description" content="โรงพยาบาลลานกระบือ 62 หมู่ 6 ตำบลลานกระบือ อำเภอลานกระบือ จังหวัดกำแพงเพชร 62170" />
                    <meta property="og:image" content="https://lkbhos.moph.go.th/api/images/lkbhos.jpg" /> 
                </Helmet>
                <div className="contents__container">
                    <div className="takemoit_content">
                        <div className='hero' style={{ backgroundImage: `url(${import.meta.env.VITE_API_URL+'/images/bg_head.jpg'})` }}>
                            <div className='hero-content'>
                                <div className='takemoit__head'>
                                    <p>ข้อที่ {item.childrens.nums || item.childrens.subtitle.nums}</p>
                                    <p>{item.childrens.title || item.childrens.subtitle.title}</p>
                                </div>
                            </div>
                        </div>
                        <PdfFromUrl pdfUrl={pdfUrl}/>
                        <div className='credit_moit'>
                            <p>โดย. {item.childrens.make_by|| item.childrens.subtitle.make_by}</p>
                            <button onClick={() => handleDownload(pdfUrl,filename)}><i class="ri-download-cloud-line"></i> ดาวน์โหลดไฟล์</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            )
        })}
        
    </div>
  )
}
export default TakeMoit