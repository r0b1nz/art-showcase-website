import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            When it comes to art, it's important not to hide the madness
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>An implemented concept by Chit1 Studios</figcaption>
          </figure>
          <h3 id="dynamic-styles">Dynamic work styles</h3>
          <p>
            We are a team of enthusiastic artists, illustrators & designers
            where we find creative solutions for our clients. As we would
            express your consciousness, your dream- we make it true, we create a
            new world for you, we give life to the walls as Chitwan itself means
            highest consciousness and heart of the jungle so our intense passion
            as a team of artists flows in all artistic endeavors.
          </p>
          <p>
            Visual Art | Digital Art | Paintings | Murals | Graffiti | Graphic
            Designing | Art Workshops | Creative Consultancy{" "}
            <a href="https://chit1.com/">Chit1.com</a> CTA
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(relativePath: { eq: "about-me-max.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
