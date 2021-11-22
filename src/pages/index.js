import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"

export default function Home({data}) {
  
  return <Layout>
  
    <div className="flex flex-col lg:flex-row justify-center content-center items-center mt-12">
      <div className="w-1/2 flex flex-col justify-center content-center ">
        <h1 className="font-extrabold  text-white text-3xl lg:text-5xl leading-tight">Web Development & Data Science</h1>
        <p className="font-thin mt-8">Sunt sunt aute occaecat deserunt anim id ex ex veniam aliquip et laboris duis adipisicing.</p>
      </div>

      <div className=" w-1/2 lg:w-1/3 h-1/3">
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
    </div>

   
    </Layout>
}


export const query = graphql`
query HeadImage {
  file(relativePath: {eq: "head.png"}) {
    
    childImageSharp{
			fluid{
				...GatsbyImageSharpFluid
      }
    }
  }
}
`