
import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


import Layout from "../components/Layout"
    import { motion } from "framer-motion"


export default function Thank ({data}) {

    const image = getImage(data.file)


    


    //const image = getImage(data.file)
    return (
        <Layout>
        <div className="min-h-screen flex flex-col justify-center items-center md:flex-row container">
            <motion.div 
            className="md:w-1/2 p-0 md:p-8 hidden sm:block"
            initial={{  opacity: 0 }}
            animate={{  opacity: 1 }}
            transition={{ duration: 1.75 }}
            >
            <GatsbyImage image={image} alt={"logo"} />
            </motion.div>

            <div className="flex-1 md:w-1/2 about" >           
            <h2>Thank you!</h2>
            <p>I will get back to you as soon as possible.</p>
            </div>
        </div>

        
        </Layout>
    )
}



export const query = graphql`
query ThankImage {
  file(relativePath: {eq: "ABout.png"}) {
    childImageSharp {
      gatsbyImageData(        
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
}
`