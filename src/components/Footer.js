import React from 'react'
import {Linkedin, GitHub, Twitter} from 'react-feather'

const Footer = () => {
    return (
        <div className="container flex bg-ft-pink text-white h-16 content-between items-center font-extralight border-t-2 border-ft-dark">
            <div className="flex-1">freethrow 2021.</div>
            <div className="flex-1 flex flex-row space-x-4 font-thin ">
                <Linkedin/>
                <GitHub />
                </div>
            <div className=" font-extralight"><a href="https://storyset.com/web">Web illustrations by Storyset</a></div>
            
        </div>
    )
}

export default Footer
