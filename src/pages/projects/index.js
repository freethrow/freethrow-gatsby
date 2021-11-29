import React from 'react'
import Layout from '../../components/Layout'
import { graphql, Link } from 'gatsby'

import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import ProjectCard from '../../components/ProjectCard'


const Projects = ({data}) => {

 
    
    const projects = data.projects.nodes
    const snippet = data.snippet

    const projectsImage = getImage(data.snippet.picture)

    
 

    return (
        <Layout>
            <div className="container">
            
              <div className="flex flex-col lg:flex-row justify-center content-center items-center my-12">
                <div className="lg:w-1/2 flex items-center justify-center"><GatsbyImage image={projectsImage} alt={"projects"} /></div>
                
                <div className="lg:w-1/2">
                  <h2>Projects</h2>
                  {documentToReactComponents(JSON.parse(snippet.content.raw))}
                  </div>
              </div>
            </div>

              <div className="container lg:grid lg:grid-cols-3 lg:gap-4 bg-ft-gray py-8">
                {projects.map(project=>(
                    <Link to={"/projects/"+project.frontmatter.slug} key={project.id}>
                        <ProjectCard project={project} />                        
                    </Link>
                )

                )}
            </div>
            
          
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
        tech
        github
        featured {
          childImageSharp {
            gatsbyImageData(
              height: 350
              blurredOptions: {width: 10}
              placeholder: DOMINANT_COLOR
              aspectRatio: 2.5
            )
          }
        }
      }
    }
  }
  snippet: contentfulSnippet(slug: {eq: "projects"}) {
    content {
      raw
    }
    slug
    title
    picture {
      gatsbyImageData(height: 450)
    }
  }
}

`