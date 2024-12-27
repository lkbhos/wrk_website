
import './Wi.css'
import { Helmet } from 'react-helmet-async'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import data from './data.json'
const Wi = () => {
  return (
    <div className="contents__container">
      <Breadcrumbs customTitles={{}} />
        <Helmet>
            <title>เอกสารคุณภาพ | โรงพยาบาลลานกระบือ</title>
            <meta name="title" content="โรงพยาบาลลานกระบือ" />
            <meta name="description" content="เอกสารคุณภาพ | โรงพยาบาลลานกระบือ"/>
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://lkbhos.moph.go.th/" />
            <meta property="og:title" content="โรงพยาบาลลานกระบือ" />
            <meta property="og:description" content="เอกสารคุณภาพ | โรงพยาบาลลานกระบือ" />
            <meta property="og:image" content="https://lkbhos.moph.go.th/api/files/lkbhos.jpg" /> 
        </Helmet>
        {data.map((item,i)=>{
            return(
              <div className="wi__container">
                    <div className="wi__title" style={{background: item.color}}>
                        <div className='wi__head'>
                                <h2>{item.title}</h2>
                                <h3>{item.department}</h3>
                                <hr />
                        </div>
                    </div>
                    <div className="wi__content">
                        <div className="wi__download">
                          {item.childrens.map((child,i)=>{
                            return(
                              <div className='wi__group' >
                                <div className='wi__name'>
                                    <a href='#'><i class="ri-arrow-right-s-fill"></i><p>{child.title}</p></a>
                                </div>
                            </div>
                            )
                          })}
                            
                        </div>
                    </div>
                </div>
            )
        })}
        
          
    </div>
  )
}

export default Wi