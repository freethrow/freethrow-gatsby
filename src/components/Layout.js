import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <div className="container min-h-screen bg-gradient-to-l from-gray-900 via-purple-900 to-purple-600 text-gray-100 flex flex-col">
            <Navbar/>
            <div className="content flex-1">
                {children}
            </div>

            <Footer/>            
        </div>
    )
}

export default Layout


