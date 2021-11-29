import React from 'react'
import Layout from '../../components/Layout'
import { graphql, Link } from 'gatsby'
import {motion} from "framer-motion"

import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import ArticleCard from '../../components/ArticleCard'


const Articles = ({data}) => {

  console.log(data)
  const snippet = data.snippet

  const articlesImage = getImage(data.snippet.picture)
    
    const articles = data.articles.nodes

    return (
        <Layout>
            
            <div className="container">            
              <div className="flex flex-col lg:flex-row justify-center content-center items-center my-12">
                <motion.div 
                  className="lg:w-1/2 flex items-center justify-center"
                  initial={{  opacity: 0 }}
                  animate={{  opacity: 1 }}
                  transition={{ duration: 1.75 }}
                  ><GatsbyImage image={articlesImage} alt={"articles"} />
                </motion.div>
              
                <div className="lg:w-1/2">
                  <h2>Articles</h2>
                  {documentToReactComponents(JSON.parse(snippet.content.raw))}
                </div>
              </div>
              <div className="container md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-4 bg-ft-gray py-8">
                {articles.map(article=>(
                    <Link to={"/articles/"+article.slug} key={article.id}>
                        <ArticleCard article={article} />                       
                    </Link>
                )

                )}
            </div>
          </div>
           
        </Layout>
    )
}



export default Articles


export const query = graphql`
query Articles {
    articles: allContentfulArticle {
      nodes {
        brief     
        fulltext {
          raw
        }
        slug
        title
        updatedAt
        cover {
          gatsbyImageData(height: 250, aspectRatio:2)
        }
      }
    }

    
    snippet:contentfulSnippet(slug: {eq: "articles"}) {
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