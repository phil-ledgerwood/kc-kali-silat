import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Kansas City Kali and Silat</h1>
              <p>Welcome to the site of Kansas City's premiere tribe learning the southeast Asian arts of kali and silat.</p>
              <p>We are currently meeting Tuesday nights from 8pm to 9pm at:</p>
              <address>
                <a href="http://welcomemattrainingcenter.com/" target="_blank" rel="noopener noreferrer">American Top Team Welcome Mat</a><br />
                2115 E Kansas City Rd, Olathe, KS 66061<br />
                Phone: (913) 353-5858<br />
                Email: <a href="mailto:info@welcomemattrainingcenter.com">info@welcomemattrainingcenter.com</a>
              </address>
              <p>The gym is inside of Homefield Olathe.  Go in the front door and go to your right (toward the blue wall) and follow that wall till you get to our front desk.</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.9091375302246!2d-94.71462388431289!3d38.99457004881492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c094b320683a8d%3A0x924e2df1fafca592!2sWelcome%20Mat%20Training%20Center!5e0!3m2!1sen!2sus!4v1582994392481!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{ border: '0' }} allowfullscreen=""></iframe>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Articles</h1>
            </div>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: '1px solid #333', padding: '2em 4em' }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
