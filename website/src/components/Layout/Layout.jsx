import React from 'react'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
const Layout = ({ children, customTitles }) => {
  return (
    <div >
      <main>{children}</main>
    </div>
  )
}

export default Layout