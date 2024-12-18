import "./Navbar.css"
import 'remixicon/fonts/remixicon.css'
//import Menus from "../constands/menu.json"
import axios from 'axios'
import { useEffect, useState } from "react"
const Navbar = () => {
    const [isopen, setIsOpen] = useState(false)
    const [clicked, setClicked] = useState(null)
    const [clicksubmenu, setClickSubmenu] = useState(null)
    const opentoggle = () => {
        setIsOpen(!isopen)
    }

    const [data, setData] = useState([])
    const [logos, setLogos] = useState([])
    useEffect(()=>{
        const fetchdata= async () => {
            try{
                const [res1,res2] = await Promise.all([
                    axios.get(import.meta.env.VITE_API_URL+'/menu'),
                    axios.get(import.meta.env.VITE_API_URL+'/logo')
                ])
                setData(res1.data)
                setLogos(res2.data)
            }catch(err){
                <P>ERRORS !!</P>
            }
        }
        fetchdata()
    },[])

  return (
    <header className="header">
            <nav className="nav container">
                <div className="nav__data">
                    {logos.map((logo)=>(
                        <a href={logo.path} className="nav__logo">
                            <div className="img_logo"><img src={import.meta.env.VITE_API_URL+logo.icon}  alt="logo"/></div>
                            <div>
                                <div className="name_logo">{logo.nameth}</div>
                                <div className="sname_logo">{logo.nameen}</div>
                            </div>
                        </a>
                    ))}
                    <div onClick={opentoggle} className={isopen ? "nav__toggle show-icon" : "nav__toggle"}>
                        <i className="ri-menu-line nav__toggle-menu"></i>
                        <i className="ri-close-line nav__toggle-close"></i>
                    </div>
                </div>
                <div className={isopen ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list">
                        {data.map((menu,i)=>{
                            const isClicked = clicked === i
                           if(menu.childrens.length == 0){
                                return(
                                        <li key={menu.name}>
                                            <a href={menu.path} className="nav__link"><p><img src={import.meta.env.VITE_API_URL+menu.icon} alt="icon" /> {menu.name}</p></a>
                                        </li>     
                                )
                           }else{
                                return(
                                    <li key={menu.name} className={`dropdown__item ${isClicked && "show-dropdown"}`}>                      
                                        <div className="nav__link dropdown__button" onClick={() => setClicked(isClicked ? null : i )}>
                                        <p><img src={import.meta.env.VITE_API_URL+menu.icon} alt="icon" /> {menu.name}</p> <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                                        </div>
                                        <div className="dropdown__container">
                                            <div className="dropdown__content">
                                               {menu.childrens.map((child,i)=>{
                                                 const isSubmenu = clicksubmenu === i
                                                  if(child.submenu.length == 0){
                                                    return(
                                                        <div key={child.name} className="dropdown__group">
                                                            <div className="dropdown__icon">
                                                                <img src={import.meta.env.VITE_API_URL+child.icon} alt="icon"/>
                                                            </div>
                                                            <span className="dropdown__title title__hov"><a href={child.path}><i className="ri-arrow-right-s-line right__arrow"></i>{child.name}</a></span>
                                                        </div>
                                                    )
                                                  }else{
                                                    return(
                                                        <div key={child.name} className="dropdown__group">
                                                            <div className="dropdown__icon">
                                                                <img src={import.meta.env.VITE_API_URL+child.icon} alt="icon"/>
                                                            </div>
                                                            <div className={`dropdown__fades ${isSubmenu && "show"}`}>
                                                                <div className="dropdown__title" onClick={()=> setClickSubmenu(isSubmenu ? null : i)}><p><i className="ri-arrow-right-s-line right__arrow"></i>{child.name} <i className="ri-arrow-right-s-fill arr-right"></i></p><i class="ri-arrow-down-s-line arrow-sub"></i></div>
                                                                <ul className="dropdown__list">
                                                                    {child.submenu.map((submenu, i)=>(
                                                                        <li key={i}>
                                                                            <a href={submenu.path} className="dropdown__link"><i className="ri-arrow-right-s-line one__arrow"></i><i className="ri-arrow-right-double-line double__arrow"></i>{submenu.name}</a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    )
                                                  }
                                               })}
                                            </div>
                                        </div>
                                    </li>
                                )
                           }
                        })}
                    </ul>
                </div>
            </nav>
        </header>
  )
}

export default Navbar