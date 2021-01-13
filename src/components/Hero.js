import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
// ...GatsbyImageSharpFluid

const query = graphql`
    {
      person: file(relativePath: {eq: "person.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

const Hero = ({ showPerson }) => {
  const { person } = useStaticQuery(query);

  return (
    <header className="hero">
      {showPerson && <Image className="hero-person" fluid={person.childImageSharp.fluid} />}
    </header>

  )
}

export default Hero
