
import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


import Layout from "../components/Layout"
    import { motion } from "framer-motion"



export default function Contact ({data}) {

    const image = getImage(data.file)


    


    //const image = getImage(data.file)
    return (
        <Layout>
        <div className="min-h-screen flex flex-col justify-center items-center md:flex-row container">
            <motion.div 
            className="lg:w-1/2 p-0 md:p-8"
            initial={{  opacity: 0 }}
            animate={{  opacity: 1 }}
            transition={{ duration: 1.75 }}
            >
            <GatsbyImage image={image} alt={"logo"} />
            </motion.div>

            <div className="flex-1 md:w-1/2 contact">
                <div>           
                    <h2>Contact</h2>
                    <p>If you want to book a call (skype, meet, zoom) you can use the form below. If you prefer direct emails, it's freethrowrs at gmail.</p>
                </div>

                <div>
                <div class="py-12">
          <h2 class="text-2xl font-bold">Contact</h2>
          <div class="mt-8">
            <div class="grid grid-cols-1 gap-6 bg-ft-gray">
              <form 
                name="contact" 
                id="contact" 
                method="post" 
                netlify-honeypot="bot-field" data-netlify="true" value="contact" action="/thank-you">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <label class="block">
                  <span class=" text-ft-dark">Full name</span>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="
                      mt-0
                      block
                      w-full
                      px-0.5
                      border-0 border-b-2 border-gray-200
                      focus:ring-0 focus:border-black
                      bg-ft-gray
                    "
                    placeholder="Cool name"
                  />
                </label>
                <label class="block">
                  <span class="text-gray-700">Email address</span>
                  <input
                    type="email"
                    name="email"
                    id="name"
                    class="
                      mt-0
                      block
                      w-full
                      px-0.5
                      bg-ft-gray
                      border-0 border-b-2 border-gray-200
                      focus:ring-0 focus:border-black
                    "
                    placeholder="john@example.com"
                  />
                </label>
              
            
                
                <label class="block">
                  <span class="text-gray-700">Your message</span>
                  <textarea
                    name="message"
                    id="message"
                    class="
                      mt-0
                      block
                      w-full
                      px-0.5
                      bg-ft-gray
                      border-0 border-b-2 border-gray-200
                      focus:ring-0 focus:border-black
                    "
                    rows="2"
                  ></textarea>
                </label>
                <div className="flex flex-col items-stretch">
                <button class="bg-transparent flex-1 hover:bg-ft-pink hover:text-white text-ft-dark py-2 px-4 border
                border-ft-dark hover:border-transparent rounded my-3" type="submit">send</button>

              <button class="bg-transparent flex-1 hover:bg-ft-pink hover:text-white text-ft-dark py-2 px-4 border
                border-ft-dark hover:border-transparent rounded my-3" type="reset">clear</button>
                </div>
               </form>
            </div>
          </div>
        </div>
                </div>
           
            </div>
        </div>

        
        </Layout>
    )
}



export const query = graphql`
query ContactImage {
  file(relativePath: {eq: "Contact.png"}) {
    childImageSharp {
      gatsbyImageData(        
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
}
`