import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const MoviePage = ({data: {wpMazerunnerserie: {mazeRunnerSerie: movie}}}) => {
  const image = getImage(movie.picture.localFile)
  return (
    <Layout>
      <div>
        <div>
      <GatsbyImage
                image={image}
                alt={movie.picture.localFile}
                
              />
              </div>
              <div>
        <h1>{movie.title}</h1>
        <h3>{movie.description}</h3>
        <p></p>
        
        <p>Director : {movie.director}</p>
        <p>Writer : {movie.writer}</p>
        <p>Movieduration : {movie.movieduration}</p>
        <p>MusicSoundTrack : {movie.musicSoundTrack}</p>
        <p>imbdRating : {movie.imbdRating}</p>
        </div>
        </div>
        <Link to='/' ><p>Go back</p></Link>
    </Layout>
  )
}
export const query = graphql`
query MyQuery($slug: String) {
  wpMazerunnerserie(slug: {eq: $slug}) {
    mazeRunnerSerie {
      title
      description
      director
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      imbdRating
      movieduration
      musicSoundTrack
      writer
    }
  }
}
`

export default MoviePage