const path = require('path')

exports.createPages = async ({graphql, actions}) => {

    const {data} = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      allContentfulArticle {
        nodes {
          slug
        }
      }
    }
    
      
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path:'/projects/'+node.frontmatter.slug,
            component:path.resolve('./src/templates/project-details.js'),
            context:{slug:node.frontmatter.slug}
        })
        
    });

    data.allContentfulArticle.nodes.forEach(node => {
      console.log("processing article:", node.slug)
      actions.createPage({
          path:'/articles/'+node.slug,
          component:path.resolve('./src/templates/article-details.js'),
          context:{slug:node.slug}
      })
      
  });

}