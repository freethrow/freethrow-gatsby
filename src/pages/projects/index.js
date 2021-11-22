import React from 'react'
import Layout from '../../components/Layout'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const Projects = ({data}) => {

    console.log(data)
    
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact

    return (
        <Layout>
            
            <h2>Projects</h2>
            <h3>Projects yes lo</h3>
            <div className="lg:grid lg:grid-cols-3 lg:gap-4">
                {projects.map(project=>(
                    <Link to={"/projects/"+project.frontmatter.slug} key={project.id}>
                        <div className="shadow-xl rounded-md m-5 p-3">
                            <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} className="max-h-52 shadow-xl" />
                            <h3>{project.frontmatter.title}</h3>
                            <p>{project.frontmatter.description}</p>
                            
                        </div>
                    </Link>
                )

                )}
            </div>
            {contact}
        </Layout>
    )
}



export default Projects


export const query = graphql`
query MyQuery {
    projects: allMarkdownRemark {
          nodes {
            id
            frontmatter {
              description
              title
              slug
              thumb {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      
      
    contact: site{
    siteMetadata {
        contact
    }
    }
  }
`