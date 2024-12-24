import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import './Moit.css'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import axios from 'axios'

const moit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isopen, setIsOpen] = useState(false)
  const [clicked, setClicked] = useState(null)
  const [clicksubmenu, setClickSubmenu] = useState(null)
  const opentoggle = () => {
    setIsOpen(!isopen)
 }
 const [moit , setMoit] = useState([])
 useEffect(()=>{
     const fetchdata = async () => {
      try{
        const [res1] = await Promise.all([
          axios.get(import.meta.env.VITE_API_URL+'/moit/'+id)
        ])
        if(res1.status != 200){
          navigate('/unauthorized')
        }
        setMoit(res1.data)
      }catch(err){
        navigate('/unauthorized')
      }
     }
     fetchdata()
 },[])
  return (
    <div>
      <Helmet>
            <title>โรงพยาบาลลานกระบือ | MOIT{id}</title>
            <meta name="title" content="โรงพยาบาลลานกระบือ" />
            <meta name="description" content="โรงพยาบาลลานกระบือ 62 หมู่ 6 ตำบลลานกระบือ อำเภอลานกระบือ จังหวัดกำแพงเพชร 62170" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://lkbhos.moph.go.th/" />
            <meta property="og:title" content="โรงพยาบาลลานกระบือ" />
            <meta property="og:description" content="โรงพยาบาลลานกระบือ 62 หมู่ 6 ตำบลลานกระบือ อำเภอลานกระบือ จังหวัดกำแพงเพชร 62170" />
            <meta property="og:image" content="https://lkbhos.moph.go.th/api/files/lkbhos.jpg" /> 
        </Helmet>
        <div className='contents__container'>
            <Breadcrumbs customTitles={{ [id] : "ปี "+id}} />
            <div className='moit_content'>
                <div className='hero' style={{ backgroundImage: `url(${import.meta.env.VITE_API_URL+'/files/bg_head.jpg'})` }}>
                  <div className='hero-content'>
                     <div className='moit__head'>
                        <h2>MITAS (MOPH Integrity and Transparency Assessment System)</h2>
                        <h2>ปีงบประมาณ {id}</h2>
                        <p><hr /></p>
                     </div>
                  </div>
                </div>
                <div className='moit__data'>
                      <ul className='moit__list '>
                        {moit.map((moit,i)=>{
                          const isClicked = clicked === i
                          return(
                            <li key={moit.nums} className={`moit__items ${isClicked && "show"}`}>
                            <div className='moit__link' onClick={() => setClicked(isClicked ? null : i )}>
                              <p>{moit.title}</p><i class="ri-arrow-down-s-line arr"></i>
                            </div>
                            <div className='moit__dropdown'>
                                <div className="moit_dropdown_container">
                                  {moit.childrens.map((child,i)=>{
                                    const issubtitle = clicksubmenu === i
                                    if(child.subtitle.length == 0 && child.make_by != 'sso'){
                                        return(
                                          <div key={child.title} className="moit__group">
                                            <p className='notsub__hov'><a href={child.path+child.fc_year+'/'+child._id} className='use'><p>{child.nums}.</p><p>{child.title}</p></a></p>
                                          </div>
                                        )
                                    }else if(child.subtitle.length == 0 && child.make_by == 'sso'){
                                        return(
                                          <div key={child.title} className="moit__group">
                                            <p className='notsub__hov disabled'><a href="/"><p>{child.nums}.</p><p>{child.title}</p></a></p>
                                          </div>
                                        )
                                    }else{
                                      return(
                                        <div className="moit__group">
                                        <div className={`moit__group_fade ${issubtitle && "show"}`}>
                                          <div className='moit__title' onClick={() => setClickSubmenu(issubtitle ? null : i)}><div className='moit__group_txt'><p>{child.nums}.</p><p>{child.title}</p></div><i class="ri-arrow-down-s-line arr-sub"></i></div>
                                          <div className='moit_title__'>
                                              <ul className='moit__group_list'>
                                                  {child.subtitle.map((subtitle,i)=>{
                                                   return(
                                                    <li><a href={subtitle.path+subtitle.fc_year+'/'+subtitle._id}><p><i class="ri-arrow-right-s-fill"></i>{subtitle.nums}</p><p>{subtitle.title}</p></a></li>
                                                   )
                                                  })}
                                              </ul>
                                          </div>
                                        </div>
                                    </div>
                                      )
                                    }
                                  })}
                                </div>
                            </div>
                          </li>
                          )
                        })}
                        
                      </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default moit