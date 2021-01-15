import React from 'react';
import Layout from '../components/Layout';
import { navigate } from "gatsby-link";

function encode(data) {
  const formData = new FormData();
  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }
  return formData;
}

const NewsLetter = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [attachment, setAttachment] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        name,
        email,
        attachment
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

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
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="bot-field" /> {/* required for Netlify forms */}
            <input type="hidden" name="form-name" value="contact" /> {/* required for Netlify forms */}
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="file"
              name="attachment"
              placeholder="Attachment"
              className="form-control"
              onChange={(e) => setAttachment(e.target.files[0])}
            />
            <button type="submit" className="btn form-control submit-btn">subscribe</button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter;
