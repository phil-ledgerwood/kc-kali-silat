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
              <p>We are currently meeting Monday nights from 7pm to 8pm in the gym at:</p>
              <address>
                <a href="https://welcomematgym.com/" target="_blank" rel="noopener noreferrer">Welcome Mat Martial Arts</a><br />
                Salvation Army Olathe Corps Community Center<br />
                420 E Santa Fe St, Olathe, KS 66061<br />
                Phone: (913) 353-5858<br />
                Email: <a href="mailto:info@welcomematgym.com">info@welcomematgym.com</a>
              </address>
              <p>The gym is inside of the Salvation Army Community Center.  Go in the front door. On your right (toward the blue wall) will be our front desk person.  If no one is there, go forward a bit, and a hall to your left will take you to the restrooms (these will be visible) and the gym is just past them.</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.7539435371473!2d-94.81762902365541!3d38.88387104750167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0bdfebab642a5%3A0xd17d520ee246ac9f!2sSalvation%20Army%20Olathe%20Corps%20Community%20Centers!5e0!3m2!1sen!2sus!4v1725121671925!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
