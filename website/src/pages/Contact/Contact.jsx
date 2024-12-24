import React from 'react'
import './Contact.css'
import { Helmet } from 'react-helmet-async'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
const Contact = () => {
  return (
    <div className="contents__container">
        <Breadcrumbs customTitles={{}} />
        <Helmet>
            <title>แผนที่ | ติดต่อสอบถาม</title>
            <meta name="title" content="โรงพยาบาลลานกระบือ" />
            <meta name="description" content="แผนที่ติดต่อสอบถาม"/>
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://lkbhos.moph.go.th/" />
            <meta property="og:title" content="โรงพยาบาลลานกระบือ" />
            <meta property="og:description" content="แผนที่ติดต่อสอบถาม" />
            <meta property="og:image" content="https://lkbhos.moph.go.th/api/files/lkbhos.jpg" /> 
        </Helmet>
    
        <div className="contact__container">
            <div className='section__main'>
                <p>แผนที่โรงพยาบาล</p>
            </div>
            <div className='contact__content'>
                <div >
                    <p>แผนที่โรงพยาบาลลานกระบือ - แผนที่ออนไลน์ </p>
                </div>
                <div className='contact__map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.5613654388067!2d99.84276117589934!3d16.598572325048234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30de3465ef724d23%3A0xa08a026dcd57d315!2z4LmC4Lij4LiH4Lie4Lii4Liy4Lia4Liy4Lil4Lil4Liy4LiZ4LiB4Lij4Liw4Lia4Li34Lit!5e0!3m2!1sth!2sth!4v1734578557618!5m2!1sth!2sth" 
                    frameborder="0" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className='section__main'>
                    <p>เบอร์โทรภายในองค์กร</p>
                    <p><hr /></p>
                </div>
                <div><p>*โทรศัพท์ตอบรับอัติโนมัติ โทร 055-769-086 หรือ 055-769-226 (ต่อ)</p></div>
                <div className='phone__group'>
                    <div className='phone__list'>
                        <div className='phone__main'style={{background: '#af976d'}}>
                            <p>ตึกอำนวยการ</p><small> (กด 201 ก่อน)</small>
                        </div>
                        <div className='phone__items'>
                            <p>ห้องผู้อำนวยการ</p>
                            <p>110</p>
                        </div>
                        <div className='phone__items'>
                            <p>ห้องหัวหน้าฝ่ายบริหาร</p>
                            <p>107</p>
                        </div>
                        <div className='phone__items'>
                            <p>งานพัสดุ</p>
                            <p>104,105,111</p>
                        </div>
                        <div className='phone__items'>
                            <p>งานธุรการ</p>
                            <p>112,114</p>
                        </div>
                        <div className='phone__items'>
                            <p>งานการเงิน</p>
                            <p>101,103,115</p>
                        </div>
                        <div className='phone__items'>
                            <p>ห้องประชุมใหญ่ตึกพัสดุ</p>
                            <p>109</p>
                        </div>
                    </div>
                    <div className='phone__list'>
                        <div className='phone__main'style={{background: '#056839'}}>
                            <p>กลุ่มภารกิจด้านการพยาบาล</p>
                        </div>
                        <div className='phone__items'>
                            <p>หัวหน้ากลุ่มการพยาบาล</p>
                            <p>133</p>
                        </div>
                        <div className='phone__items'>
                            <p>ห้องฉุกเฉิน</p>
                            <p>140</p>
                        </div>
                        <div className='phone__items'>
                            <p>ห้องบัตร</p>
                            <p>144</p>
                        </div>
                        <div className='phone__items'>
                            <p>ตึกผู้ป่วยใน</p>
                            <p>110,111</p>
                        </div>
                        <div className='phone__items'>
                            <p>ห้องคลอด</p>
                            <p>195</p>
                        </div>
                        <div className='phone__items'>
                            <p>งานประกัน</p>
                            <p>157</p>
                        </div>
                        <div className='phone__items'>
                            <p>ห้องคุณภาพ HA ห้องประชุมเล็ก</p>
                            <p>149</p>
                        </div>
                        <div className='phone__items'>
                            <p>งานชันสูตร</p>
                            <p>158</p>
                        </div>
                        <div className='phone__items'>
                            <p>หัวหน้างานเภสัชกรรม</p>
                            <p>128</p>
                        </div>
                        <div className='phone__items'>
                            <p>การเงินงานเภสัชกรรม</p>
                            <p>156</p>
                        </div>
                    </div>
                    <div className='phone__list'>
                        <div className='phone__main' style={{background: '#0bb288'}}>
                            <p>กลุ่มงานทางการแพทย์</p>
                        </div>
                        <div className='phone__items'>
                            <p>ห้องพักแพทย์</p>
                            <p>137</p>
                        </div>
                        <div className='phone__items'>
                            <p>ห้องตรวจโรคที่ 5</p>
                            <p>148</p>
                        </div>
                        <div className='phone__items'>
                            <p>ห้องตรวจโรคที่ 6</p>
                            <p>153</p>
                        </div>
                        <div className='phone__items'>
                            <p>ห้องตรวจโรคที่ 7</p>
                            <p>155</p>
                        </div>
                        <div className='phone__items'>
                            <p>ห้องตรวจโรคที่ 8</p>
                            <p>137</p>
                        </div>
                        <div className='phone__items'>
                            <p>จุดซักประวัติ</p>
                            <p>154</p>
                        </div>
                        <div className='phone__items'>
                            <p>ห้องตรวจทันตกรรม</p>
                            <p>150</p>
                        </div>
                        <div className='phone__items'>
                            <p>ห้องพักทันตกรรม</p>
                            <p>151,146</p>
                        </div>
                        <div className='phone__items'>
                            <p>คลินิกไต</p>
                            <p>179</p>
                        </div>
                        <div className='phone__items'>
                            <p>แพทย์แผนไทย</p>
                            <p>142</p>
                        </div>
                        <div className='phone__items'>
                            <p>งานเภสัชกรรม</p>
                            <p>139</p>
                        </div>
                        <div className='phone__items'>
                            <p>งานกายภาพบำบัด</p>
                            <p>204</p>
                        </div>
                        <div className='phone__items'>
                            <p>งานรังสีวิทยา</p>
                            <p>107</p>
                        </div>
                    </div>
                    <div className='phone__list'>
                        <div className='phone__main' style={{background: '#a16d63'}}>
                            <p>กลุ่มเวชปฏิบัติครอบครัว</p>
                        </div>
                        <div className='phone__items'>
                            <p>งานสุขาภิบาลโรคติดต่อ</p>
                            <p>134</p>
                        </div>
                        <div className='phone__items'>
                            <p>ฝ่ายส่งเสริมสุขภาพ</p>
                            <p>130,171</p>
                        </div>
                        <div className='phone__items'>
                            <p>งานยาเสพติด</p>
                            <p>141</p>
                        </div>
                        <div className='phone__items'>
                            <p>งานจิตเวช</p>
                            <p>132</p>
                        </div>
                    </div>
                    <div className='phone__list'>
                        <div className='phone__main' style={{background: '#646569'}}>
                            <p>กลุ่มงานเทคนิคบริการ</p>
                        </div>
                        <div className='phone__items'>
                            <p>โรงครัว</p>
                            <p>166</p>
                        </div>
                        <div className='phone__items'>
                            <p>งาน ICT</p>
                            <p>181</p>
                        </div>
                        <div className='phone__items'>
                            <p>งานจ่ายกลาง</p>
                            <p>180</p>
                        </div>
                        <div className='phone__items'>
                            <p>ห้องประชุมล่าง</p>
                            <p>127</p>
                        </div>
                        <div className='phone__items'>
                            <p>ซ่อมบำรุง/งานสวน</p>
                            <p>126</p>
                        </div>
                        <div className='phone__items'>
                            <p>ป้อมยาม/พนักงานขับรถ</p>
                            <p>169</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact