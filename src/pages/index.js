import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {motion} from "framer-motion"


export default function Home({data}) {

 

  const image = getImage(data.file)
  
  return <Layout>
  
    <div className="container flex flex-col lg:flex-row justify-center content-center items-center my-12">
      <div className="lg:w-1/2 flex flex-col justify-center content-center ">
        <motion.h1 
          className="font-extrabold text-3xl lg:text-5xl leading-tight text-ft-pink font-playFair"
          initial={{  opacity: 0 }}
        animate={{  opacity: 1 }}
        transition={{ duration: 1.75 }}
        >Web Development & Data Science</motion.h1>
        <p className="font-light text-ft-dark mt-8 mx-2">
          Personal portfolio, ramblings, interesting stuff. Data analytics, processing, visualizations, interpolations and some fullstack web 
          expirences.
        </p>
      </div>

      <motion.div 
        className="lg:w-1/2 h-1/3 flex justify-center items-center"
        initial={{  opacity: 0 }}
        animate={{  opacity: 1 }}
        transition={{ duration: 1.75 }}
      >
      <GatsbyImage image={image} alt={"logo"} />
      </motion.div>
    </div>



   
    </Layout>
}


export const query = graphql`
query HeadImage {
  file(relativePath: {eq: "head.png"}) {
    
    childImageSharp {
      gatsbyImageData(
        width: 500
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
}
`