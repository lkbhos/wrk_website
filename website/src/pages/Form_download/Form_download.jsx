import React, { useEffect, useState } from 'react'
import './Form_download.css'
import { Helmet } from 'react-helmet-async'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Form_download = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchdata = async () => {
            try{

                const [ res1 ] = await Promise.all([
                    axios.get(import.meta.env.VITE_API_URL+'/form_download')
                ])
                if(res1.status !== 200){
                    navigate('/unauthorized')
                }
                setData(res1.data)
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
    <div className='contents__container'>
        <Breadcrumbs customTitles={{}} />
        <Helmet>
            <title>ดาวน์โหลดแบบฟอร์ม | โรงพยาบาลลานกระบือ</title>
            <meta name="title" content="โรงพยาบาลลานกระบือ" />
            <meta name="description" content="ดาวน์โหลดแบบฟอร์ม | โรงพยาบาลลานกระบือ"/>
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://lkbhos.moph.go.th/" />
            <meta property="og:title" content="โรงพยาบาลลานกระบือ" />
            <meta property="og:description" content="ดาวน์โหลดแบบฟอร์ม | โรงพยาบาลลานกระบือ" />
            <meta property="og:image" content="https://lkbhos.moph.go.th/api/files/lkbhos.jpg" /> 
        </Helmet> 
        {data.map((item) =>{
            return(
                <div className="form__container">
                    <div className="form__title">
                        <div className='form__head'>
                                <h2>{item.title}</h2>
                                <hr />
                        </div>
                    </div>
                    <div className="form__content">
                        <div className="form__download">
                            {item.childrens.map((child,i) => {
                                const updatedAt = child.updatedAt
                                const date = new Date(updatedAt);
                                const formattedDate = date.toLocaleDateString("en-GB");
                                return(
                                    <div className='form__group' key={i}>
                                        <div className='form__name'>
                                            <i class="ri-arrow-right-s-fill"></i>
                                            <div onClick={() => handleDownload(`${import.meta.env.VITE_API_URL}/files/${child.file_name}`,`${child.title}.${child.file_type}`)}><p>{child.title}</p></div>
                                        </div>
                                        <small>แก้ไขเมื่อ. {formattedDate}</small>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
        })}
        
    </div>
  )
}

export default Form_download