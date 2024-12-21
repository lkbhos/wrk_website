import React from 'react'
import './Flow.css'
import { Helmet } from 'react-helmet-async'
const Flow = () => {
  return (
    <div className='contents__container'>
        <Helmet>
                    <title>โครงสร้างโรงพยาบาล</title>
                    <meta name="title" content="โรงพยาบาลลานกระบือ" />
                    <meta name="description" content="โครงสร้างโรงพยาบาล"/>
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://lkbhos.moph.go.th/" />
                    <meta property="og:title" content="โรงพยาบาลลานกระบือ" />
                    <meta property="og:description" content="โครงสร้างโรงพยาบาล" />
                    <meta property="og:image" content="https://lkbhos.moph.go.th/api/files/lkbhos.jpg" /> 
        </Helmet>
        <div className='flow__container'>
            <div className='flow_main'><p>โครงสร้างโรงพยาบาลลานกระบือ</p></div>
            <div className="level-1 rectangle">
                 <div className="card__name">
                    <h4>นายแพทย์อภิลักษณ์ เหล่าไพโรจน์</h4>
                    <p>นายแพทย์ชำนาญการพิเศษ รักษาการในตำแหน่ง</p>
                    <p>ผู้อำนวยการโรงพยาบาลลานกระบือ</p>
                </div>
            </div>
            <ol className="level-2-wrapper">
                <li>
                    <div className="level-2 rectangle">
                        <div className="card__department">
                        <h4>1.กลุ่มงานการพยาบาล</h4>
                        </div>
                        <div className="card__leader">
                        <h4>นาวสาวพิมพา แออ่วม</h4>
                        <p>พยาบาลวิชาชีพชำนาญการพิเศษ</p>
                        </div>
                        <div className="card__job">
                        <div><p>-</p><p>งานการพยาบาลผู้ป่วยนอก</p></div>
                        <div><p>-</p><p>งานการพยาบาลผู้ป่วยอุบัติเหตุฉุกเฉินและนิติเวช</p></div>
                        <div><p>-</p><p>งานการพยาบาลผู้ป่วยใน</p></div>
                        <div><p>-</p><p>งานการพยาบาลผู้ป่วยหนัก</p></div>
                        <div><p>-</p><p>งานการพยาบาลผู้ป่วยผ่าตัดและวิสัญญีพยาบาล</p></div>
                        <div><p>-</p><p>งานการพยาบาลหน่วยควบคุมการติดเชื้อและงานจ่ายกลางงานการพยาบาลผู้คลอด</p></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                    <div className="card__department">
                        <h4>2.กลุ่มงานบริหารทั่วไป</h4>
                    </div>
                    <div className="card__leader">
                        <h4>นางสาวบุษบา ภูริศักดิ์ไพโรจน์</h4>
                        <p>นักจัดการงานทั่วไปชำนาญการ</p>
                    </div>
                    <div className="card__job">
                    <div><p>-</p><p>งานการเงินและการบัญชี</p></div>
                    <div><p>-</p><p>งานพัสดุก่อสร้างการซ่อมบำรุง</p></div>
                    <div><p>-</p><p>งานธุรการบริหารยานพาหนะ</p></div>
                    <div><p>-</p><p>งานรักษาความปลอดภัย</p></div>
                    <div><p>-</p><p>งานประชาสัมพันธ์</p></div>
                    <div><p>-</p><p>งานซักฟอก</p></div>
                    <div><p>-</p><p>งานอาคารสถานที่</p></div>
                    <div><p>-</p><p>งานการเจ้าหน้าที่</p></div>
                    </div>
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                    <div className="card__department">
                        <h4>3.กลุ่มงานทันตกรรม</h4>
                    </div>
                    <div className="card__leader">
                        <h4>นายเทพฤทธิ์ ไตรฟื้น</h4>
                        <p>ทันตแพทย์ชำนาญการ</p>
                    </div>
                    <div className="card__job">
                    <div><p>-</p><p>งานตรวจวินิจฉัย บำบัดรักษาฟื้นฟูสภาพส่งเสริมและป้องกันทางทันตกรรม</p></div>
                    </div>
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                    <div className="card__department">
                        <h4>4.กลุ่มงานการแพทย์</h4>
                    </div>
                    <div className="card__leader">
                        <h4>นายสุรธัญ คำภิบาล</h4>
                        <p>นายแพทย์ชำนาญการ</p>
                    </div>
                    <div className="card__job">
                    <div><p>-</p><p>งานตรวจวินิจฉัย บำบัดรักษา ทั้งผู้ป่วยนอกและใน ผู้ป่วยผ่าตัด ผู้ป่วยมาคลอด</p></div>
                    </div>
                    </div>
                </li>
            </ol>
            <ol className="level-2-wrapper">
                <li>
                    <div className="level-2 rectangle">
                        <div className="card__department">
                        <h4>5.กลุ่มงานเทคนิคการแพทย์</h4>
                        </div>
                        <div className="card__leader">
                        <h4>นายมีชัย พัชนี</h4>
                        <p>นักเทคนิคการแพทย์ปฎิบัติการ</p>
                        </div>
                        <div className="card__job">
                        <div><p>-</p><p>งานวิเคราะห์สิ่งตัวอย่างทางห้องปฏิบัติการเทคนิคการแพทย์</p></div>
                        <div><p>-</p><p>งานธนาคารเลือดและบริการส่วนประกอบของเลือด</p></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                    <div className="card__department">
                        <h4>6.กลุ่มงานเภสัชกรรม</h4>
                    </div>
                    <div className="card__leader">
                        <h4>นายสุวัฒน์ สุขขี</h4>
                        <p>เภสัชกรชำนาญการ</p>
                    </div>
                    <div className="card__job">
                    <div><p>-</p><p>งานบริการเภสัชกรรมผู้ป่วยนอก</p></div>
                    <div><p>-</p><p>งานบริการเภสัชกรรมผู้ป่วยใน</p></div>
                    <div><p>-</p><p>งานบริหารเวชภัณฑ์</p></div>
                    <div><p>-</p><p>งานคุ้มครองผู้บริโภค</p></div>
                    <div><p>-</p><p>งานให้คำปรึกษาด้านเภสัชกรรม</p></div>
                    </div>
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                    <div className="card__department">
                        <h4>7.กลุ่มงานบริการด้านปฐมภูมิ ฯ</h4>
                    </div>
                    <div className="card__leader">
                        <h4>นางจารุสิริ อาจสม</h4>
                        <p>พยาบาลวิชาชีพชำนาญการ</p>
                    </div>
                    <div className="card__job">
                    <div><p>-</p><p>งานเวชปฎิบัติครอบครัวและชุมชน</p></div>
                    <div><p>-</p><p>งานการพยาบาลในชุมชน</p></div>
                    <div><p>-</p><p>งานส่งเสริมสุขภาพทุกกลุ่มวัย</p></div>
                    <div><p>-</p><p>งานป้องกันและควบคุมโรคและระบาดวิทยา</p></div>
                    <div><p>-</p><p>งานอาชีวอนามัย</p></div>
                    <div><p>-</p><p>งานสุขาภิบาลสิ่งแวดล้อมและศูนย์ความปลอดภัย</p></div>
                    <div><p>-</p><p>งานพัฒนาระบบบริการปฐมภูมิและสนับสนุนเครือข่าย</p></div>
                    <div><p>-</p><p>งานอนามัยโรงเรียน</p></div>
                    <div><p>-</p><p>งานสุขภาพภาคประชาชน</p></div>
                    <div><p>-</p><p>งานสุขศึกษาและพัฒนาพฤติกรรมสุขภาพ</p></div>
                    </div>
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                    <div className="card__department">
                        <h4>8.กลุ่มงานยาเสพติดและจิตเวช</h4>
                    </div>
                    <div className="card__leader">
                        <h4>นางสาวดลนภัส ป่วนสิงห์</h4>
                        <p>พยาบาลวิชาชีพชำนาญการ</p>
                    </div>
                    <div className="card__job">
                    <div><p>-</p><p>งานสุขภาพจิตและจิตเวช</p></div>
                    <div><p>-</p><p>งานบำบัด ยาเสพติด สุรา บุหรี่</p></div>
                    </div>
                    </div>
                </li>
            </ol>
            <ol className="level-2-wrapper">
                <li>
                    <div className="level-2 rectangle">
                        <div className="card__department">
                        <h4>9.กลุ่มงานการแพทย์แผนไทย ฯ</h4>
                        </div>
                        <div className="card__leader">
                        <h4>นางชวนพิศ น้อยม่วง</h4>
                        <p>เจ้าพนักงานสาธารณสุขชำนาญงาน</p>
                        </div>
                        <div className="card__job">
                        <div><p>-</p><p>รับผิดชอบในการส่งเสริมให้ผู้ป่วยได้รับบริการที่มีคุณภาพ และเป็นมาตรฐาน ให้ความรู้และทักษะในการดูแลตนเอง เฝ้าระวังภาวะแทรกซ้อนต่างๆ จากการทำกิจกรรม เน้นความปลอดภัย มีประโยชน์และมีสิทธิภาพประสิทธิผล ได้แก่ การนวดตัว การนวดคลายเครียด การนวดน้ำมัน การนวดฝ่าเท้า การประคบสมุนไพร การอบสมุนไพร เป็นต้น</p></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                    <div className="card__department">
                        <h4>10.กลุ่มงานประกันยุทธศาสตร์</h4>
                    </div>
                    <div className="card__leader">
                        <h4>นางสาวศรัญญา ทิพย์ศิริ</h4>
                        <p>พยาบาลวิชาชีพชำนาญการ</p>
                    </div>
                    <div className="card__job">
                    <div><p>-</p><p>งานประกันสุขภาพ การขึ้นทะเบียน การตรวจสอบสิทธิ การเรียกเก็บการตามจ่าย</p></div>
                    <div><p>-</p><p>งานแผนงานยุทธศาสตร์เครือข่ายสุขภาพ</p></div>
                    <div><p>-</p><p>งานสวัสดิการและสังคมสงเคราะห์</p></div>
                    </div>
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                    <div className="card__department">
                        <h4>11.กลุ่มงานรังสีวิทยา</h4>
                    </div>
                    <div className="card__leader">
                        <h4>นางวิกานดา เม่นขาว</h4>
                        <p>นักรังสีการแพทย์ปฎิบัติ</p>
                    </div>
                    <div className="card__job">
                    <div><p>-</p><p>งานตรวจ วินิจฉัยและรักษา โดยเอกซเรย์</p></div>
                    </div>
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                    <div className="card__department">
                        <h4>12.กลุ่มงานเวชกรรมฟื้นฟู</h4>
                    </div>
                    <div className="card__leader">
                        <h4>นางสาวภาวิณี นกทอง</h4>
                        <p>นักกายภาพบำบัดปฎิบัติการ</p>
                    </div>
                    <div className="card__job">
                    <div><p>-</p><p>งานตรวจประเมิน การวินิจฉัยและบำบัดความบกพร่องของร่างกายด้วยวิธีทางกายภาพบำบัด</p></div>
                    <div><p>-</p><p>งานฟื้นฟูความเสื่อมสภาพความพิการ</p></div>
                    </div>
                    </div>
                </li>
            </ol>
            <ol className="level-2-wrapper">
                <li>
                    <div className="level-2 rectangle">
                        <div className="card__department">
                        <h4>13.กลุ่มงานโภชนาศาสตร์</h4>
                        </div>
                        <div className="card__leader">
                        <h4>นางสาวพรรณราย กลิ่นรุ่ง</h4>
                        <p>นักโภชนาการปฎิบัติการ</p>
                        </div>
                        <div className="card__job">
                        <div><p>-</p><p>งานบริหารจัดการอาหารตามมาตรฐานโภชนาการ</p></div>
                        <div><p>-</p><p>งานโภชนาบำบัด ให้คำปรึกษาคำแนะนำความรู้ด้านโภชนาการและโภชนาบำบัด</p></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                    <div className="card__department">
                        <h4>14.กลุ่มงานดิจิทัล</h4>
                    </div>
                    <div className="card__leader">
                        <h4>นายครรชิต สุริโย</h4>
                        <p>นักวิชาการคอมพิวเตอร์ปฏิบัติการ</p>
                    </div>
                    <div className="card__job">
                        <div><p>-</p><p>งานเวชสถิติและงานข้อมูล การจัดการเวชระเบียน การลงรหัสโรค</p></div>
                        <div><p>-</p><p>งานเทคโนโลยีสารสนเทศและคอมพิวเตอร์</p></div>
                    </div>
                    </div>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Flow