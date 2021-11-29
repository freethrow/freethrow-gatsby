import React from 'react'
import Layout from '../components/Layout'

import { graphql } from 'gatsby'


const ProjectDetails = ({data}) => {

    const {html} = data.markdownRemark
    const {title, description} = data.markdownRemark.frontmatter

    return (
        <Layout>
            <div className="project flex flex-col items-center container mt-14">
               
                <h2 className=" font-bold text-2xl">{title}</h2>
                <p className="font-thin">{description}</p>

                <div dangerouslySetInnerHTML={{__html:html}} className="project" />



            </div>

            
        </Layout>
    )
}

export default ProjectDetails

export const query = graphql`
    query ProjectPage($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        id
        html
        frontmatter {
            description
            slug
            title

        }
        }
    }
`

