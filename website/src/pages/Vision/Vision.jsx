import React from "react";
import "./Vision.css";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
const Vision = () => {
  return (
    <div className="contents__container">
      <Breadcrumbs customTitles={{}} />
      <Helmet>
        <title>วิสัยทัศน์ และพันธกิจ</title>
        <meta name="title" content="โรงพยาบาลลานกระบือ" />
        <meta name="description" content="วิสัยทัศน์ และพันธกิจ" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lkbhos.moph.go.th/" />
        <meta property="og:title" content="โรงพยาบาลลานกระบือ" />
        <meta property="og:description" content="วิสัยทัศน์ และพันธกิจ" />
        <meta
          property="og:image"
          content="https://lkbhos.moph.go.th/api/files/lkbhos.jpg"
        />
      </Helmet>
      <div className="vision__container">
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
                   วิสัยทัศน์ พันธกิจ ค่านิยม MOPH
                </h2>
                <p>
                  <hr />
                </p>
              </div>
            </div>
          </div>
          <div className="vision__content">
            <div className="vision__group">
                <div className="vision__title">
                  <p>วิสัยทัศน์</p>
                </div>
                <div className="vision__section">
                  <p>บริการดี มีมาตราฐาน ปลอดภัย พึ่งพอใจ ทั้งผู้ให้และผู้รับบริการ</p>
                </div>
            </div>
            <div className="vision__group">
                <div className="vision__title">
                  <p>คำขวํญอำเภอลานกระบือ</p>
                </div>
                <div className="vision__section">
                  <p>แหล่งน้ำมันสิริกิติ์ ผลิตก๊าซธรรมชาติ พุทธศาสตร์ลือเลื่อง เมืองแห่งคุณธรรม เลิศล้ำความสะอาด </p>
                </div>
            </div>
            <div className="vision__group">
                <div className="vision__title">
                  <p>พันธกิจ</p>
                </div>
                <div className="vision__section">
                    <div><p>1.</p><p>พัฒนาการให้บริการด้านสุขภาพ ครอบคลุมด้านส่งเสริมสุขภาพการป้องกันโรค การรักษาพยาบาลและฟื้นฟูสภาพ ตามมาตราฐานวิชาชีพ เน้นความปลอดภัยทั้งผู้ใหเบริการและผู้รับบริการ</p></div>
                    <div><p>2.</p><p>พัฒนาศักยภาพ บุคลากรด้านวิชาการและบริการที่ดี</p></div>
                </div>
            </div>
            <div className="vision__group">
                <div className="vision__title">
                  <p>ค่านิยมองค์กร (Core value) “MOPH”</p>
                </div>
                <div className="vision__section">
                  <p><b>B</b>: Behavior พฤติกรรมบริการที่ดี</p>
                  <p><b>E</b>: Effective มีประสิทธิภาพ</p>
                  <p><b>S</b>: Safety เน้นความปลอดภัย</p>  
                  <p><b>T</b>: Team ทำงานเป็นทีม</p>  
                </div>
            </div>
            <div className="vision__group">
                <div className="vision__title">
                  <p>วัฒนธรรมองค์กร (Culture)</p>
                </div>
                <div className="vision__section">
                    <div><p>1.</p><p>รับผิดชอบ : รับผิดชอบต่องานในหน้าที่ และงานที่ได้รับมอบหมาย</p></div>
                    <div><p>2.</p><p>ตรงต่อเวลา : ตรงต่อเวลาในการทำหน้าที่</p></div>
                    <div><p>3.</p><p>พัฒนาเป็นนิจ : พัฒนาตนเอง และงานที่ได้รับผิดชอบ</p></div>
                    <div><p>4.</p><p>จิตบริการ : มีความจริงใจในบริการ </p></div>
                    <div><p>5.</p><p>ทำงานเป็นทีม : ต้องปฏิบัติตามข้อตกลง และมติของกุล่มโดยมีเป้าหมายร่วมกัน</p></div>
                </div>
            </div>
            <div className="vision__group">
                <div className="vision__title">
                  <p>สมรรถนะหลัก</p>
                </div>
                <div className="vision__section">
                  <div><p>1.</p><p>บุคลากรมีความเชี่ยวชาญทางด้านการแพทย์และสาธารณสุข</p></div>
                  <div><p>2.</p><p>การสร้างสุขภาพ และการป้องกันโรคเชิงรุก ต้องใช้ทักษะการปรับเปลี่ยนพฤติกรรมสุขภาพ การ ส่งเสริมสุขภาพร่างกายและจิตใจ การป้องกันและควบคุมโรคติดต่อ โรคไม่ติดต่อ และการคุ้มครอง ผู้บริโภคให้ ประชาชนได้รับความปลอดภัย</p></div>
                  <div><p>3.</p><p>บุคลากรมีจิตบริการต้องการบุคลากรที่อุทิศตนเสียสละเวลา แรงกาย สติปัญญา</p></div>
                  <div><p>4.</p><p>การสร้างความร่วมมือกับภาคีเครือข่าย ในการสร้างเสริมสุขภาพป้องกันโรค และคุ้มครองผู้บริโภค</p></div>
                </div>
            </div>
          </div>
          
        
      </div>
    </div>
  );
};

export default Vision;
