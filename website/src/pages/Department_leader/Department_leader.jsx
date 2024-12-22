import React from 'react'
import './Department_leader.css'
import { Helmet } from 'react-helmet-async'
const Department_leader = () => {
  return (
      <div className='contents__container'>
        <Helmet>
        <title>คณะผู้บริหาร</title>
            <meta name="title" content="โรงพยาบาลลานกระบือ" />
            <meta name="description" content="คณะผู้บริหาร "/>
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://lkbhos.moph.go.th/" />
            <meta property="og:title" content="โรงพยาบาลลานกระบือ" />
            <meta property="og:description" content="คณะผู้บริหาร " />
            <meta property="og:image" content="https://lkbhos.moph.go.th/api/files/lkbhos.jpg" /> 
        </Helmet>

        <div className='department_container'>
            <div className='department_main'><p>หัวหน้าฝ่ายงานของโรงพยาบาล</p></div>
            <div className="level-1 rectangle">
                <div className="card__img"><img src={import.meta.env.VITE_API_URL+'/files/ceo400_1.jpg'} alt="img" /></div>
                <div className="card__name">
                    <h4>นายแพทย์อภิลักษณ์ เหล่าไพโรจน์</h4>
                    <p>ผู้อำนวยการโรงพยาบาลลานกระบือ</p>
                </div>
                <div className="card__phone">
                    <p> <i class="ri-phone-line"></i> 055-769-086 ต่อ 110</p>
                </div>
            </div>
            <ol class="level-2-wrapper">
                <li>
                    <div className="level-2 rectangle">
                        <div className="card__img"><div className='inline__'><img src={import.meta.env.VITE_API_URL+'/files/pimpa.jpg'} alt="img" /></div></div>
                        <div className="card__name">
                            <h4>นางสาวพิมพา แออ่วม</h4>
                            <p>กลุ่มการพยาบาล</p>
                        </div>
                        <div className="card__phone">
                            <p><i class="ri-phone-line"></i> 055-769-086 ต่อ 133</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                        <div className="card__img"><div className='inline__'><img src={import.meta.env.VITE_API_URL+'/files/bussaba.jpg'} alt="img" /></div></div>
                        <div className="card__name">
                            <h4>นางสาวบุษบา ภูริศักดิ์ไพโรจน์</h4>
                            <p>กลุ่มบริหารงานทั่วไป</p>
                        </div>
                        <div className="card__phone">
                            <p> <i class="ri-phone-line"></i> 055-769-086 ต่อ 107</p>
                        </div>   
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                        <div className="card__img"><div className='inline__'><img src={import.meta.env.VITE_API_URL+'/files/tepparit.jpg'} alt="img" /></div></div>
                        <div className="card__name">
                            <h4>นายเทพฤทธิ์ ไตรฟื้น</h4>
                            <p>กลุ่มงานทันตกรรม</p>
                        </div>
                        <div className="card__phone">
                            <p> <i class="ri-phone-line"></i> 055-769-086 ต่อ 150</p>
                        </div>   
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                        <div className="card__img"><div className='inline__'><img src={import.meta.env.VITE_API_URL+'/files/ceo400_1.jpg'} alt="img" /></div></div>
                        <div className="card__name">
                            <h4>นายแพทย์อภิลักษณ์ เหล่าไพโรจน์</h4>
                            <p>กลุ่มงานการแพทย์</p>
                        </div>
                        <div className="card__phone">
                            <p><i class="ri-phone-line"></i> 055-769-086 ต่อ 137</p>
                        </div>   
                    </div>
                </li>
               
            </ol>
            <ol class="level-2-wrapper">
                <li>
                    <div className="level-2 rectangle">
                        <div className="card__img"><div className='inline__'><img src={import.meta.env.VITE_API_URL+'/files/pjed.jpg'} alt="img" /></div></div>
                        <div className="card__name">
                            <h4>นายมีชัย พัชนี</h4>
                            <p>กลุ่มงานเทคนิคการแพทย์</p>
                        </div>
                        <div className="card__phone">
                            <p><i class="ri-phone-line"></i> 055-769-086 ต่อ 158</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                        <div className="card__img"><div className='inline__'><img src={import.meta.env.VITE_API_URL+'/files/pgo.jpg'} alt="img" /></div></div>
                        <div className="card__name">
                            <h4>นายสุวัฒน์ สุขขี</h4>
                            <p>กลุ่มงานเภสัชกรรม</p>
                        </div>
                        <div className="card__phone">
                            <p><i class="ri-phone-line"></i> 055-769-086 ต่อ 128</p>
                        </div>   
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                        <div className="card__img"><div className='inline__'><img src={import.meta.env.VITE_API_URL+'/files/Ptay.jpg'} alt="" /></div></div>
                        <div className="card__name">
                            <h4>นางจารุสิริ อาจสม</h4>
                            <p>กลุ่มงานด้านบริการปฐมภูมิ</p>
                        </div>
                        <div className="card__phone">
                            <p><i class="ri-phone-line"></i> 055-769-086 ต่อ 171</p>
                        </div>   
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                        <div className="card__img"><div className='inline__'><img src={import.meta.env.VITE_API_URL+'/files/dolnapan.jpg'} alt="img" /></div></div>
                        <div className="card__name">
                            <h4>นางสาวดลนภัส ป่วนสิงห์</h4>
                            <p>กลุ่มงานจิตเวช</p>
                        </div>
                        <div className="card__phone">
                            <p><i class="ri-phone-line"></i> 055-769-086 ต่อ 132</p>
                        </div>   
                    </div>
                </li>
               
            </ol>
            <ol class="level-2-wrapper">
                <li>
                    <div className="level-2 rectangle">
                        <div className="card__img"><div className='inline__'><img src={import.meta.env.VITE_API_URL+'/files/pajaw.jpg'} alt="img" /></div></div>
                        <div className="card__name">
                            <h4>นางชวนพิศ น้อยม่วง</h4>
                            <p>กลุ่มงานแพทย์แผนไทย</p>
                        </div>
                        <div className="card__phone">
                            <p><i class="ri-phone-line"></i> 055-769-086 ต่อ 142</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                        <div className="card__img"><div className='inline__'><img src={import.meta.env.VITE_API_URL+'/files/saranya.jpg'} alt="img" /></div></div>
                        <div className="card__name">
                            <h4>นางสาวศรัญญา ทิพย์ศิริ</h4>
                            <p>กลุ่มงานประกันและยุทธศาสตร์</p>
                        </div>
                        <div className="card__phone">
                            <p><i class="ri-phone-line"></i> 055-769-086 ต่อ 157</p>
                        </div>   
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                        <div className="card__img"><div className='inline__'><img src={import.meta.env.VITE_API_URL+'/files/nam.jpg'} alt="img" /></div></div>
                        <div className="card__name">
                            <h4>นางวิกานดา เม่นขาว</h4>
                            <p>กลุ่มงานรังสีวิทยา</p>
                        </div>
                        <div className="card__phone">
                            <p><i class="ri-phone-line"></i> 055-769-086 ต่อ 107</p>
                        </div>   
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                        <div className="card__img"><div className='inline__'><img src={import.meta.env.VITE_API_URL+'/files/toi.jpg'} alt="img" /></div></div>
                        <div className="card__name">
                            <h4>นางสาวภาวิณี นกทอง</h4>
                            <p>กลุ่มงานเวชกรรมฟื้นฟู</p>
                        </div>
                        <div className="card__phone">
                            <p><i class="ri-phone-line"></i> 055-769-086 ต่อ 204</p>
                        </div>   
                    </div>
                </li>
               
            </ol>
            <ol class="level-2-wrapper">
                <li>
                    <div className="level-2 rectangle">
                        <div className="card__img"><div className='inline__'><img src={import.meta.env.VITE_API_URL+'/files/whan.jpg'} alt="img" /></div></div>
                        <div className="card__name">
                            <h4>นางสาวพรรณราย กลิ่นรุ่ง</h4>
                            <p>กลุ่มงานโภชนาศาสตร์</p>
                        </div>
                        <div className="card__phone">
                            <p><i class="ri-phone-line"></i> 055-769-086 ต่อ 166</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="level-2 rectangle">
                        <div className="card__img"><div className='inline__'><img src={import.meta.env.VITE_API_URL+'/files/kanchit.jpg'} alt="img" /></div></div>
                        <div className="card__name">
                            <h4>นายครรชิต สุริโย</h4>
                            <p>กลุ่มงานดิจิทัล</p>
                        </div>
                        <div className="card__phone">
                            <p><i class="ri-phone-line"></i> 055-769-086 ต่อ 181</p>
                        </div>   
                    </div>
                </li>
            </ol>
        </div>

      </div>
  )
}

export default Department_leader