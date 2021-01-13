import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <section className="error-page">
        <span>404</span>
        <h3>Sorry, the page you requested cannot be found</h3>
        <Link to="/" className="btn">Back Home</Link>
      </section>
    </Layout>
  )
}

export default NotFoundPage
