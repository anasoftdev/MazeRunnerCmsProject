import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({ data: { wpPage: { homePage } }, }) => {
  const image = getImage(homePage.picture.localFile)
  return (
    <Layout>
      
      <title>Home Page</title>
      <h1 style={{fontSize:"50px"}}>{homePage.title}</h1>
      <h3 style={{fontSize:"30px"}}>{homePage.description}</h3>
      {homePage.localFile}
      {
          homePage.featuredProducts.map((item) => {
            const movie = item.mazeRunnerSerie
            const slug = item.slug
            const image = getImage(movie.picture.localFile)
            return <div> 
            <Link to={`/movies/${slug}`} >
              <GatsbyImage
                image={image}
                alt={movie.picture.localFile}
                
              />
              <p key={item.id}  style={{fontSize:"23px"}}><b>{movie.title}</b></p>
              <p>{movie.description}</p>
              </Link>
            </div>
          })
      }
    </Layout>
  )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homePage {
      description
      featuredProducts {
        ... on WpMazerunnerserie {
          id
          slug
          mazeRunnerSerie {
            title
            description
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
              
            }
          }
        }
      }
      title
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
}
`

export default IndexPage
