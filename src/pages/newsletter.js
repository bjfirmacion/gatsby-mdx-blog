import React from 'react';
import Layout from '../components/Layout';

const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get all the latest stories in your inbox</h2>
          <h4>I write to my digital friends every few weeks</h4>
          <form
            className="contact-form"
            name="contact"
            method="post"
            netlify
            netlify-honeypot="bot-field"
            action="/success"
          >
            <input type="hidden" name="bot-field" /> // required for Netlify forms
            <input type="hidden" name="form-name" value="contact" /> // required for Netlify forms
            <input type="text" name="name" placeholder="Your name" className="form-control" />
            <input type="email" name="email" placeholder="Your email" className="form-control" />
            <input type="file" name="file" placeholder="Attachment" className="form-control" />
            <button type="submit" className="btn form-control submit-btn">subscribe</button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter;
