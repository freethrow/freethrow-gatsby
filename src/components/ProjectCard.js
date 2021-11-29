import React from 'react'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import { Link } from 'gatsby'


const ProjectCard = (data) => {

    const picture = getImage(data.project.frontmatter.featured)

    console.log(data.project)

    const title = data.project.frontmatter.title
    const description = data.project.frontmatter.description
    const github = data.project.frontmatter.github

    return (
        <div className="flex flex-col justify-center items-center p-5 gap-10 bg-white shadow-md rounded-md clip m-5">
            <h3 className=" text-ft-dark border-b-2 border-ft-pink">{title}</h3>
            <GatsbyImage image={picture} alt={title} className="flex-1" />
            <div className="font-light">{description}</div>
         
        </div>
    )
}

export default ProjectCard
