import { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, EffectCoverflow, Autoplay} from 'swiper/modules'
import axios from 'axios'
import 'swiper/swiper-bundle.css'
import 'swiper/css'
import './Carousel.css'



const Carousel = () => {
    const [slider, setSlider] = useState([])
    const [baner, setBaner] = useState([])

    useEffect(()=>{
        const fetchdata = async () => {
            try{
                const [res1,res2] = await Promise.all([
                    axios.get(import.meta.env.VITE_API_URL+'/baner'),
                    axios.get(import.meta.env.VITE_API_URL+'/carousel')
                ])
                console.log(res2.data)
                setBaner(res1.data)
                setSlider(res2.data)
            }catch(err){
                <p>Database Errors Contract Webmaster !</p>
            }
        }
        fetchdata()
    },[])

  return (
    <div className='carousel'>
        <div>
            {baner.map(dat =>(
                <div className='carousel-content'>
                    <span>{dat.txt}</span>
                    <h1>{dat.name}</h1>
                    <div className='txt__sm'><hr /> <p>{dat.addr}</p></div>
                    <p>{dat.vision}</p>
                    <div className="thumbnail__ceo">
                            <div className='ceo_img'>
                                <img src={import.meta.env.VITE_API_URL+dat.img_ceo} alt="icon" />
                            </div>
                        <div className='box-txt'>
                        <h4>{dat.name_ceo}</h4>
                        <div>{dat.position_ceo}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <Swiper className='myswiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
        }}
        loop={true}
        pagination={{clickable: true}}
        
        autoplay={{
            delay:4000,
            disableOnInteraction: false
        }}
        breakpoints={{
            640: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 1
            },
            1024:{
                slidesPerView: 2
            },
            1560:{
                slidesPerView: 2
            }
        }}
        >
            {
                slider.map(data =>(
                    <SwiperSlide style={{backgroundImage: `url(${import.meta.env.VITE_API_URL+data.img})`}} className='myswiper-slider'>
                        <div>
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                            <a href="#" target='_blank' className='slider-btn'>อ่านเพิ่มเติม</a>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        
    </div>
  )
}

export default Carousel