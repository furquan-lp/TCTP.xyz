import React from 'react';
import { Link } from 'gatsby';

import './stories.css';
import './cards.css';
import sampleImg from '../images/esp32.svg';

const BigCard = ({ image, imageAlt, post }) =>
  <div className="big-card">
    <img src={image} alt={imageAlt} className="card-img" />
    <div className="card-article">
      <span className="card-article-title">{post.frontmatter.title}</span>
      <p className="preview-text">{post.excerpt}...</p>
      <Link to={'blog' + post.fields.slug} className="more-button">
        READ ARTICLE
      </Link>
    </div>
  </div>;

const Stories = ({ posts }) =>
  <div className="stories">
    <BigCard image={sampleImg} imageAlt="Sample Image" post={posts[0]} />
    <h2>Latest Posts</h2>
    {posts.slice(1).map(post => (
      <article key={post.id}>
        <Link to={'blog' + post.fields.slug} className="article-link">
          {post.frontmatter.title}
        </Link>
        <p>{post.frontmatter.date}</p>
      </article>
    ))}
  </div>;

export default Stories;