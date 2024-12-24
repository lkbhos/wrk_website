import React from 'react'
import './Inquiry.css'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import {Helmet} from 'react-helmet-async'
const Inquiry = () => {
  return (
    <div className='contents__container'>
      <Breadcrumbs customTitles={{"inquiry":"ติดต่อสอบถาม"}} />
          <Helmet>
            <title>ติดต่อสอบถาม</title>
            <meta name="title" content="โรงพยาบาลลานกระบือ" />
            <meta name="description" content="ติดต่อสอบถาม"/>
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://lkbhos.moph.go.th/" />
            <meta property="og:title" content="โรงพยาบาลลานกระบือ" />
            <meta property="og:description" content="ติดต่อสอบถาม" />
            <meta property="og:image" content="https://lkbhos.moph.go.th/api/files/lkbhos.jpg" /> 
          </Helmet>
        <div className="inquiry__container">
        <div className='hero' style={{ backgroundImage: `url(${import.meta.env.VITE_API_URL+'/files/bg_head.jpg'})` }}>
                  <div className='hero-content'>
                     <div className='hero__head'>
                        <h2>ติดต่อ-สอบถาม</h2>
                        <p><hr /></p>
                     </div>
                  </div>
                </div>
            <div className="inquiry__content">
                <form className="form-container">
                    <label>
                        ประเภทคำถาม *
                        <select className="input-field">
                        <option value="" disabled selected>--กรุณาเลือก--</option>
                        <option value="">ร้องเรียน</option>
                        <option value="">สอบถาม</option>
                        </select>
                    </label>
                    
                    <label>
                        คำถาม *
                        <textarea className="input-field"></textarea>
                    </label>
                    <label>
                        เลขประวัติผู้ป่วย (HN)
                        <input type="text" className="input-field" placeholder="Example: HN12345678" />
                    </label>
                    <label>
                        ชื่อ *
                        <input type="text" className="input-field" />
                    </label>
                    <label>
                        นามสกุล *
                        <input type="text" className="input-field" />
                    </label>
                    <label>
                        อีเมล *
                        <input type="email" className="input-field" placeholder="Example: example@domain.com" />
                    </label>
                    <label>
                        เบอร์ติดต่อกลับ *
                        <input type="tel" className="input-field" placeholder="+66" />
                    </label>
                    <label>
                        วันเกิด *
                        <input type="date" className="input-field" />
                    </label>
                    <label>
                        เพศ *
                        <select className="input-field">
                        <option value="" disabled selected>--- กรุณาเลือก ---</option>
                        <option value="">ชาย</option>
                        <option value="">หญิง</option>
                        </select>
                    </label>
                    <div className="consent">
                        <div className="consent-section">
                            <label className="consent-option">
                                <input type="checkbox" />
                                <span>
                                ข้าพเจ้าได้อ่านและรับทราบ <a href="#">เงื่อนไขการให้บริการ</a> และ <a href="#">นโยบายความเป็นส่วนตัว</a> ของโรงพยาบาลแล้ว
                                </span>
                            </label>
                            <label className="consent-option">
                                <input type="checkbox" />
                                <span>
                                ข้าพเจ้ายืนยันและรับรองว่าข้อมูลส่วนบุคคลใด ๆ ที่ได้ให้ไว้แก่โรงพยาบาลฯ นั้นเป็นความเป็นจริง ถูกต้องสมบูรณ์ และเป็นปัจจุบัน และหากข้อมูลส่วนบุคคลของบุคคลอื่นใดที่ข้าพเจ้ากรอกไว้และได้ให้ไว้แก่โรงพยาบาลฯ ข้าพจ้ารับรองว่าบุคคลเหล่านั้นได้รับแจ้ง หรือให้ความยินยอมแก่ข้าพเจ้า หรือมีอำนาจโดยชอบด้วยกฎหมายในการเปิดเผยข้อมูลส่วนบุคคลของบุคคลเหล่านั้นต่อโรงพยาบาล.
                                </span>
                            </label>
                        
                        </div>
                    </div>
                    <button className="btn-submit">ตกลง</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Inquiry