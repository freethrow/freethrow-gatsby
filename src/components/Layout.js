import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const Layout = ({children}) => {
    return (
        <div className="min-h-screen flex flex-col bg-ft-gray">
            <Navbar/>
            <div className="content flex-1">
                {children}
            </div>

            <Footer/>            
        </div>
    )
}

export default Layout


