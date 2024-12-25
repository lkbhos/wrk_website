import React from 'react'
import './Document.css'
import { Helmet } from 'react-helmet-async'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
const Document = () => {
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
        <div className="hero" style={{backgroundImage: `url(${import.meta.env.VITE_API_URL + "/files/bg_head.jpg"})`,}}>
              <div className="hero-content">
                  <div className="hero__head">
                      <h2>กฎหมายที่เกี่ยวข้องกับการดำเนินงาน หรือการปฏิบัติงานของหน่วยงาน</h2>
                      <p><hr/></p>
                  </div>
              </div>
        </div>           
        <div className="document__container">
            <div className="document__content">
                <div className='document__group'>
                    <div className='document__title'><p>กลุ่มกฎหมายเกี่ยวกับการปกครอง</p></div>
                    <p><hr /></p>
                    <div className='document__section'>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>รัฐธรรมนูญแห่งราชอาณาจักรไทย พ.ศ. 2560</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติวิธีปฏิบัติราชการทางปกครอง พ.ศ. 2539</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติ วิธีปฏิบัติราชการทางปกครอง (ฉบับที่ 3) พ.ศ. 2562</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติความรับผิดทางละเมิดของเจ้าหน้าที่ พ.ศ.2539</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>ระเบียบสํานักนายกรัฐมนตรี ว่าด้วยหลักเกณฑ์การปฏิบัติเกี่ยวกับความรับผิดทางละเมิดของเจ้าหน้าที่ พ.ศ. 2539</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติระเบียบบริหารราชการแผ่นดิน พ.ศ.2535</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติระเบียบบริหารราชการแผ่นดิน (ฉบับที่ 8) พ.ศ. 2553</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระกฤษฎีกาว่าด้วยหลักเกณฑ์การบริหารกิจการบ้านเมืองที่ดี พ.ศ.2546</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชกฤษฎีกาว่าด้วยหลักเกณฑ์และวิธีการบริหารกิจการบ้านเมืองที่ดี (ฉบับที่ 2) พ.ศ. 2562</p></a></div>
                    </div>
                </div>
                <div className='document__group'>
                    <div className='document__title'><p>กลุ่มกฎหมายเกี่ยวกับการจัดซื้อจัดจ้างและการคลัง</p></div>
                    <p><hr /></p>
                    <div className='document__section'>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติการจัดซื้อจัดจ้างและการบริการวัสดุภาครัฐ พ.ศ.2560</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>ระเบียบกระทรวงการคลังว่าด้วยการตรวจสอบภายในส่วนราชการ พ.ศ.2551</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>หลักเกณฑ์กระทรวงการคลังว่าด้วยมาตรฐานและหลักเกณฑ์ปฏิบัติการตรวจสอบภายในสำหรับหน่วยงานของรัฐ พ.ศ.2561</p></a></div>
                    </div>
                </div>
                <div className='document__group'>
                    <div className='document__title'><p>กลุ่มกฎหมายเกี่ยวกับข้อมูลข่าวสาร</p></div>
                    <p><hr /></p>
                    <div className='document__section'>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติข้อมูลข่าวสารของทางราชการ พ.ศ. 2540</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>ระเบียบกระทรวงสาธารณสุข เรื่องการคุ้มครองและจัดการข้อมูลด้านสุขภาพของบุคคล พ.ศ. 2561</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562</p></a></div>
                     
                    </div>
                </div>
                <div className='document__group'>
                    <div className='document__title'><p>กลุ่มกฎหมายเกี่ยวกับการประกอบวิชาชีพ</p></div>
                    <p><hr /></p>
                    <div className='document__section'>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติ.สถานพยาบาล พ.ศ. 2541 และแก้ไขเพิ่มเติม</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติการประกอบโรคศิลปะ พ.ศ. 2542</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติการประกอบโรคศิลปะ (ฉบับที่ 4) พ.ศ. 2556</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติสุขภาพแห่งชาติ พ.ศ. 2550</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>ระเบียบนโยบายและคำสั่งกระทรวงสาธารณสุข มาตรฐานวิชาชีพต่างๆ</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>คำสั่งกำหนดเขตสุขภาพ และมอบหมายให้ผู้ตรวจราชการกระทรวงสาธารณสุขปฏิบัติงานในเขตสุขภาพกระทรวงสาธารณสุข</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติคุ้มครองผู้บริโภค พ.ศ. 2522</p></a></div>
                    </div>
                </div>
                <div className='document__group'>
                    <div className='document__title'><p>กลุ่มกฎหมายเกี่ยวกับยา วัตถุ และเครื่องมือทางการแพทย์</p></div>
                    <p><hr /></p>
                    <div className='document__section'>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติเครื่องมือแพทย์ พ.ศ. 2531</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติเครื่องมือแพทย์ (ฉบับที่ 2) พ.ศ. 2562</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติยา พ.ศ. 2510</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติยา (ฉบับที่ 6) พ.ศ. 2562</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติวัตถุอันตราย พ.ศ. 2535</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติวัตถุที่ออกฤทธิ์ต่อจิตและประสาท พ.ศ. 2559</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>กฎกระทรวงการขออนุญาตและการอนุญาตให้ขายวัตถุออกฤทธิ์ในประเภท 3 หรือประเภท 4 พ.ศ. 2562</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติยาเสพติดให้โทษ พ.ศ. 2522</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติยาเสพติดให้โทษ (ฉบับที่ 7) พ.ศ. 2562</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>ประกาศกระทรวงสาธารณสุขเรื่องกำหนดตารับยาเสพติดให้โทษในประเภท 5 ที่มีกัญชาปรุงผสมอยู่ที่ให้เสพเพื่อรักษาโรคหรือการศึกษาวิจัยได้ พ.ศ.2562</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติป้องกันการใช้สารระเหย พ.ศ.2533 และแก้ไขเพิ่มเติม</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติผลิตภัณฑ์สมุนไพร พ.ศ.2562</p></a></div>
                    </div>
                </div>
                <div className='document__group'>
                    <div className='document__title'><p>กลุ่มกฎหมายความปลอดภัย อาชีวอนามัย และสภาพแวดล้อมในการทำงาน</p></div>
                    <p><hr /></p>
                    <div className='document__section'>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติควบคุมโรคจากการประกอบอาชีพและโรคจากสิ่งแวดล้อม พ.ศ. 2562พระราชบัญญัติควบคุมโรคจากการประกอบอาชีพและโรคจากสิ่งแวดล้อม พ.ศ. 2562</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>พระราชบัญญัติความปลอดภัย และสภาพแวดล้อมในการทำงาน พ.ศ. 2554</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>กฎกระทรวงกำหนดมาตรฐานในการบริหารและจัดการด้านความปลอดภัยอาชีวอนามัยสภาพแวดล้อมในการทำงาน พ.ศ. 2549</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>กฎกระทรวงกำหนดมาตรฐานในการบริหาร จัดการ และดำเนินการด้านความปลอดภัย อาชีวอนามัยและสภาพแวดล้อมในการทำงานเกี่ยวกับที่อับอากาศ พ.ศ. 2562</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>กฎกระทรวงกําหนดมาตรฐานในการบริหาร จัดการ และดําเนินการด้านความปลอดภัย อาชีวอนามัยและสภาพแวดล้อมในการทํางานเกี่ยวกับความร้อน แสงสว่าง และเสียง พ.ศ. 2559</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>กฎกระทรวงกําหนดมาตรฐานในการบริหาร จัดการ และดําเนินการด้านความปลอดภัย อาชีวอนามัย และสภาพแวดล้อมในการทํางานเกี่ยวกับไฟฟ้า พ.ศ. 2558</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>กฎกระทรวงกำหนดมาตรฐานในการบริหาร จัดการ และดำเนินการด้านความปลอดภัย อาชีวอนามัยและสภาพแวดล้อมในการทำงานเกี่ยวกับสารเคมีอันตรายพ.ศ. 2556</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>กฎกระทรวงการเป็นหน่วยงานฝึกอบรมการดับเพลิงขั้นต้น และการเป็นหน่วยงานฝึกซ้อมดับเพลิงและฝึกซ้อมอพยพหนีไฟ พ.ศ. 2556</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>กฎกระทรวงกำหนดมาตรฐานในการบริหารจัดการ และดำเนินการด้านความปลอดภัย อาชีวอนามัย และสภาพแวดล้อมในการทำงานเกี่ยวกับการป้องกันและระงับอัคคีภัย พ.ศ. 2555</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>กฎกระทรวงกำหนดมาตรฐานในการบริหารและการจัดการด้านความปลอดภัย อาชีวอนามัย และสภาพแวดล้อมในการทำงานเกี่ยวกับ เครื่องจักร ปั้นจั่น และหม้อน้ำ พ.ศ. 2552</p></a></div>
                      <div className='document__items'><a href="#"><i class="ri-arrow-right-s-fill"></i><p>กฎกระทรวงกําหนดมาตรฐานในการบริหารและการจัดการ ด้านความปลอดภัย อาชีวอนามัยและสภาพแวดล้อมในการทํางานในที่อับอากาศ พ.ศ. 2547</p></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Document