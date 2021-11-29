import React from 'react'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import { Link } from 'gatsby'


const ArticleCard = (data) => {

    

    const picture = getImage(data.article.cover)

    console.log(picture)

    

    const title = data.article.title
    
    const brief = data.article.brief

    return (
        <div className="flex flex-col justify-center items-center p-5 gap-10 bg-white shadow-md rounded-md clip m-5">
            <h3 className=" text-ft-dark border-b-2 border-ft-pink">{title}</h3>
            <GatsbyImage image={picture} alt={title} className="flex-1" />
            <div className="font-light">{brief}</div>
         
        </div>
    )
}

export default ArticleCard
