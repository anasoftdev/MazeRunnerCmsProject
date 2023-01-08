import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../../components/layout'

const MoviesPage = ({ data: { allWpMazerunnerserie: { edges } } }) => {

  return (
    <Layout>
      <div style={{ display: "flex" }}>
        {
          edges.map((item) => {
            const movie = item.node.mazeRunnerSerie
            const slug = item.node.slug
            const image = getImage(movie.picture.localFile)
            return <div> <Link to={`/movies/${slug}`}>
              <GatsbyImage
                image={image}
                alt={movie.picture.localFile}
                
              />
              <p key={item.node.id}  style={{fontSize:"23px"}}><b>{movie.title}</b></p>
              <p >{movie.description}</p>
            </Link>
            </div>
          })
        }
      </div>
    </Layout>
  )
}
export const query = graphql`
query {
    allWpMazerunnerserie {
      edges {
        node {
          id
          mazeRunnerSerie {
            title
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
            description
          }
          slug
        }
      }
    }
  }
`
export default MoviesPage;