import React from 'react'
import Layout from '../components/Layout'

import { graphql } from 'gatsby'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import {GatsbyImage, getImage} from 'gatsby-plugin-image'

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'




const ArticleDetails = ({data}) => {

    const article = data.contentfulArticle

    const image = getImage(article.cover)


    const bgImage = convertToBgImage(image)


    return (
        <Layout>
       
            <div className="project flex flex-col items-center container mt-14">
               
                <h2 className=" font-bold text-2xl">{article.title}</h2>

            <div>
                {documentToReactComponents(JSON.parse(article.fulltext.raw))}
        </div>

            </div>

            
        </Layout>
    )
}

export default ArticleDetails


export const query = graphql`
query ArticlePage($slug: String){
  contentfulArticle(slug: {eq: $slug}) {
    id
    slug
    title
    cover {
      gatsbyImageData(
        width: 1600
        placeholder: BLURRED
        cropFocus: CENTER
        aspectRatio: 3
      
      )
    }
    brief
    fulltext {
      raw
    }
  }
}    
      
`

