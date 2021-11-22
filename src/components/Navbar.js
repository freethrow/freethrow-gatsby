import React from 'react'
import {Link} from 'gatsby'

const Navbar = () => {
    return (
        <div className="container mx-auto">
        <div className="flex flex-row content-between justify-between">
            
        <Link to="/"><h1>Freethrow</h1></Link>
        
 
            <div className="flex flex-row space-x-4">
            <Link to="/" className="font-thin text-lg">Home</Link>
                <Link to="/projects" className="text-lg font-thin">Projects</Link>
                <Link to="/about" className="text-lg font-thin">About</Link>
            </div>
        </div>
        </div>
    )
}

export default Navbar