import React from 'react'
import { Helmet } from 'react-helmet-async';
import './Moit.css'
import moits from './data.json'
import { useState } from 'react';
const moit = () => {
  const [isopen, setIsOpen] = useState(false)
  const [clicked, setClicked] = useState(null)
  const [clicksubmenu, setClickSubmenu] = useState(null)
  const opentoggle = () => {
    setIsOpen(!isopen)
}
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
                <div className='moit__data'>
                      <ul className='moit__list '>
                        {moits.map((moit,i)=>{
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
                                    if(child.subtitle.length == 0){
                                        return(
                                          <div key={child.title} className="moit__group">
                                            <p className='notsub__hov'><a href="#">{child.title}</a></p>
                                          </div>
                                        )
                                    }else{
                                      return(
                                        <div className="moit__group">
                                        <div className={`moit__group_fade ${issubtitle && "show"}`}>
                                          <div className='moit__title' onClick={() => setClickSubmenu(issubtitle ? null : i)}><p>{child.title}</p><i class="ri-arrow-down-s-line arr-sub"></i></div>
                                          <div className='moit_title__'>
                                              <ul className='moit__group_list'>
                                                  {child.subtitle.map((subtitle,i)=>{
                                                   return(
                                                    <li ><a href="#"><i class="ri-arrow-right-s-fill"></i>{subtitle.title}</a></li>
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