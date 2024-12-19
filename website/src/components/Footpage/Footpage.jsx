import React from 'react'
import './Footpage.css'
const Footpage = () => {
  return (
    <footer>
        <div className="content__footpage">
            <div className="footer__contact">
                <div className="contact__items">
                    <div className='contact__list'>
                        <img src={import.meta.env.VITE_API_URL+'/files/call_phone.png'} alt="call_img" />
                         <p>1669 หรือ 055-769-086 ต่อ 140</p>
                        <p>ฉุกเฉิน เรียกรถพยาบาล</p>
                        <span>พร้อมบริการทุกวัน 24 ชม.</span>
                    </div>
                    <div className='contact__list'>
                        <img src={import.meta.env.VITE_API_URL+'/files/tell.png'} alt="call_img" />
                        <p>โทรหาโรงพยาบาล</p>
                        <p>055-769-086</p>
                        <span>บริการทุกวันจันทร์-ศุกร์ เวลา 08.30-16.30</span>
                    </div>
                    <div className='contact__list'>
                        <img src={import.meta.env.VITE_API_URL+'/files/mail.png'} alt="call_img" />
                        <p>สอบถามข้อมูลเพิ่มเติมผ่าน E-mail</p>
                        <p>lkbhos.kp@gmail.com</p>
                    </div>
                    <div className='contact__list'>
                        <img src={import.meta.env.VITE_API_URL+'/files/loca.png'} alt="call_img" />
                        <p>แผนที่โรงพยาบาล</p>
                        <a href="/contact">ดูแผนที่</a>
                    </div>
                </div>
            </div>
            <div className='footpage__about'>
                <div className='footpage_about_content'>
                    <div className='footpage_about_items'>
                        <div className='footpage_about_list'>
                            <h4>เกี่ยวกับเรา</h4>
                            <p>โรงพยาบาลลานกระบือ เป็นสถานที่สำหรับให้บริการด้านสุขภาพให้กับผู้ป่วย โดยมักที่จะมุ่งเน้นการส่งเสริม 
                                ป้องกัน รักษา และฟื้นฟูภาวะความเจ็บป่วย หรือโรคต่าง ๆ ทั้งทางร่างกายและทางจิตใจ ปัจจุบันโรงพยาบาลลานกระบือ 
                                เป็นโรงพยาบาลขนาด 30 เตียง อยู่ภายใต้สังกัดกระทรวงสาธารณสุข</p>
                            <div className='footer_vision'>
                                <h3>บริการดี มีมาตราฐานปลอดภัย พึงพอใจทั้งผู้ให้ และผู้รับ</h3>
                            </div>
                        </div>
                        <hr />
                        <div className='footpage_about_list'>
                            <h4>ติดต่อเรา</h4>
                            <p>โรงพยาบาลลานกระบือ</p>
                             <p>62 หมู่ 6 ตำบลลานกระบือ อำเภอลานกระบือ จังหวัดกำแพงเพชร 62170</p>   
                            <div className='count_view'>
                                <h3>สถิติเข้าชมเว็บไซต์</h3>
                                <div className='count_view_items'>
                                    <p> <i class="ri-arrow-right-s-fill"></i>จำนวนเข้าชมวันนี้</p>
                                    <p>10</p>
                                    <p>ครั้ง</p>
                                </div>
                                <div className='count_view_items'>
                                    <p><i class="ri-arrow-right-s-fill"></i>จำนวนเข้าชมวันนี้</p>
                                    <p>100</p>
                                    <p>ครั้ง</p>
                                </div>
                                <div className='count_view_items'>
                                    <p><i class="ri-arrow-right-s-fill"></i>จำนวนเข้าชมวันนี้</p>
                                    <p>1000</p>
                                    <p>ครั้ง</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='footpage_about_list'>
                            <h4>ติดตามเรา</h4>
                            <iframe
                                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flkbhos&tabs=timeline&width=250&height=300&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                    width="250"
                                    height="250"
                                    style={{ border: "none", overflow: "hidden" }}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bord__bg'></div>
            <div className='footpage'>
                <div className='footpage__content'>
                    <div className='footpage__items_cookie'>
                        <a href="#">ความเป็นส่วนตัว</a>
                        <a href="#">เงื่อนไขการใช้งาน</a>
                        <a href="#">นโยบายคุกกี้</a>
                    </div>
                    <div className='footpage__items'>
                        <p>ลิขสิทธิ์ © 2024 โดย โรงพยาบาลลานกระบือ </p>
                        <p>พัฒนาโดย งานสารสนเทศ โรงพยาบาลลานกระบือ</p>
                        <p>โทร 055-769081 ต่อ 181</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footpage