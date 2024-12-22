import React from 'react'
import { Helmet } from 'react-helmet-async'
import './Executive.css'
import data from './data.json'
const Executive = () => {
  return (
    <div className='contents__container'>
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
      <div className="executive__container">
          <div
              className="hero"
              style={{
                backgroundImage: `url(${
                  import.meta.env.VITE_API_URL + "/files/bg_head.jpg"
                })`,
              }}
            >
              <div className="hero-content">
                <div className="hero__head">
                  <h2>
                    ทำเนียบผู้บริหาร
                  </h2>
                  <p>
                    <hr />
                  </p>
                </div>
              </div>
        </div>
      </div>
      <div className="executive__content">
        {data.map((item,i)=> (
            <div className='executive__group' key={i}>
              <div className='executive__items'>
                  <div className='executive__name'><p>{item.nums}.</p><p>{item.pname+item.fname+" "+item.lname}</p></div>
                  <div className='executive__date'><b>ตั้งแต่วันที่</b><p>{item.sdate}</p><b>ถึงวันที่</b><p>{item.edate}</p></div>
              </div>
          </div>
        ))}
      </div>
    </div>
   
  )
}

export default Executive