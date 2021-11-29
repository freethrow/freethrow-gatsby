import React from 'react'
import {Link} from 'gatsby'



const Navbar = () => {

   


    return (
        <div className={"container mx-auto sticky top-0 z-50 bg-ft-gray"}>
        <div className=" my-4 flex flex-col md:flex-row justify-between font-playFair text-ft-dark content-center">
            
        <Link to="/">
          <h1 
            className=" font-bold text-3xl"
           
          >
            <span className="text-ft-pink">Free</span>throw
            </h1>
          </Link>
        
 
            <div className="flex flex-col md:flex-row items-end">
                <Link to="/" className="font-thin text-lg md:mx-2" activeClassName={'text-ft-pink font-black'}>Home</Link>
                <Link to="/projects" className="text-lg font-thin md:mx-2" activeClassName={'text-ft-pink font-black'}>Projects</Link>
                <Link to="/articles" className="text-lg font-thin md:mx-2" activeClassName={'text-ft-pink font-black'}>Articles</Link>
                <Link to="/about" className="text-lg font-thin md:mx-2" activeClassName={'text-ft-pink font-black'}>About</Link>
                <Link to="/contact" className="text-lg font-thin md:mx-2" activeClassName={'text-ft-pink font-black'}>Contact</Link>
            </div>
        </div>
        </div>
    )
}

export default Navbar