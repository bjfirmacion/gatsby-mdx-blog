/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import useToggleHook from '../hooks/useToggleHook';

const Layout = ({ children }) => {
  const [isOpen, toggleSidebar] = useToggleHook(false);
  
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
