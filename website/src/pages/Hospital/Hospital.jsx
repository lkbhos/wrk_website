import React from 'react'
import { Helmet } from 'react-helmet-async'
import './Hospital.css'
const Hospital = () => {
  return (
    <div className='contents__container'>
          <Helmet>
            <title>ประวัติโรงพยาบาล</title>
            <meta name="title" content="โรงพยาบาลลานกระบือ" />
            <meta name="description" content="ประวัติโรงพยาบาล"/>
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://lkbhos.moph.go.th/" />
            <meta property="og:title" content="โรงพยาบาลลานกระบือ" />
            <meta property="og:description" content="ประวัติโรงพยาบาล" />
            <meta property="og:image" content="https://lkbhos.moph.go.th/api/files/lkbhos.jpg" /> 
          </Helmet>
          <div className="hospital__container">
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
                        ประวัติโรงพยาบาล
                      </h2>
                      <p>
                        <hr />
                      </p>
                    </div>
                  </div>
              </div>
              <div className="hospital__content">
                <div className="hospital__group">
                  <h2>ประวัติความเป็นมาของโรงพยาบาลลานกระบือ</h2>
                  <p>เดิมตำบลลานกระบือมีสถานบริการสาธารณสุขเพียงแห่งเดียวคือสำนักงานผดุงครรภ์ตำบลลานกระบือ อำเภอพรานกระต่าย เปิดดำเนินการตั้งแต่วันที่ 1 กุมภาพันธ์ 2506 ตั้งอยู่หน้าโรงเรียนชุมชนบ้านลานกระบือ โดยมีเจ้าหน้าที่ประจำสถานบริการ 1 คนคือ นางอนงค์ ชูศักดิ์ ต่อมาได้ยกระดับเป็นสถานีอนามัยชั้น 2 ให้บริการด้านสาธารณสุขแก่ประชาชนในเขตตำบลลานกระบือ</p>
                </div>
                <div className="hospital__group">
                  <div className='hospital__img'>
                      <img src={import.meta.env.VITE_API_URL +"/files/hos1.webp"} alt="img" />
                      <img src={import.meta.env.VITE_API_URL +"/files/hos2.webp"} alt="img" />
                  </div>
                </div>
                <div className="hospital__group">
                  <h2>การจัดตั้งโรงพยาบาล</h2>
                  <p>ในปี 2527 ประชาชนในตำบลลานกระบือได้ร่วมกันบริจาคเงินซื้อที่ดินและได้รับบริจาคที่ดินบางส่วนจากนายหวย ประหยัด รวมเนื้อที่ประมาณ 25 ไร่ เพื่อใช้ในการสร้างโรงพยาบาล โดยโรงพยาบาลเริ่มเปิดให้บริการประชาชนวันแรกเมื่อวันที่ 13 สิงหาคม 2529 และกำหนดให้วันที่ 13 สิงหาคมของทุกปีเป็นวันครบรอบวันเกิดของโรงพยาบาล</p>
                </div>
                <div className="hospital__group">
                <h2>การพัฒนาโรงพยาบาล</h2>
                  <p>ในระยะแรกโรงพยาบาลเผชิญกับความยุ่งยากในเรื่องการจัดระบบการทำงานและขาดแคลนบุคลากร แต่ด้วยความร่วมมือของบุคลากรที่เพิ่มขึ้นและการพัฒนาคุณภาพบริการ โรงพยาบาลสามารถสร้างศรัทธาให้กับประชาชนได้
                    <div><b>ในปี 2536 โรงพยาบาลได้รับงบประมาณจำนวน 16,240,674 บาท เพื่อขยายเป็นโรงพยาบาลชุมชนขนาด 30 เตียง และเริ่มให้บริการในปี 2538</b></div></p>
                </div>
                  <div className="hospital__group">
                    <h2>ปณิธานและการพัฒนา</h2>
                    <p>โรงพยาบาลลานกระบือให้ความสำคัญกับการบริการด้านการแพทย์และสาธารณสุข มีการพัฒนาคุณภาพบริการ ด้านกายภาพ สิ่งแวดล้อม และอาคารสถานที่ให้ทันสมัย สะอาด สวยงาม พร้อมให้บริการด้วยอัธยาศัยไมตรี เพื่อให้ประชาชนประทับใจ</p>
                  </div>
                  <div className="hospital__group">
                    <div className='hospital__img'>
                          <img src={import.meta.env.VITE_API_URL +"/files/hos3.webp"} alt="img" />
                          <img src={import.meta.env.VITE_API_URL +"/files/hos4.webp"} alt="img" />
                    </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Hospital