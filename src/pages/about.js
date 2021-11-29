
import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


import Layout from "../components/Layout"
    import { motion } from "framer-motion"



export default function About ({data}) {

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
            <h2>About</h2>
            <p>This is my personal website - a place to write down some thoughts about topics that I find interesting
               and showcase some projects.</p>
            <p>I am an analyst, former scientist and freelance developer with over 15 years of experience. Being initially self taught,
               I started my way up from visual basic and the ADO/DAo world and Fortran 77 for numeric simulations.
                Upon discovering python (version 2.3) I started using it for all kind of automation tasks:
                 building reporting pipelines, exporting measurement data from the bare-bones instruments 
                 into excel or similar user-friendly reporting tools.
                 </p>
                 <p>I consider my self a data scientist, but that’s a long story. Today, I am fascinated by stuff like XGboost, 
                   deep learning, and the simplicity of the Random Forest algorithm. While I have never worked as a
                    full-time developer (I am an analyst at heart), I love to devour books,articles, 
                    tutorials, full-blown courses, speeches and conferences about analytics, web development,
                     data science, algorithms and similar topics. 
                     </p>
                     <p>I am  gathering material for a book (like there aren't already enough) about the mathematical and CS things
                        that I care about. Yep.</p>
            </div>
        </div>

        
        </Layout>
    )
}



export const query = graphql`
query AboutImage {
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