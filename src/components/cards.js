import React from 'react';
import { Link } from 'gatsby';

import './cards.css';

const Card = ({ post }) =>
  <div className="card">
    <article className="card-article">
      <Link to={'.' + post.fields.slug} className="card-article-title">
        <h2>{post.frontmatter.title}</h2>
      </Link>
      <small>
        {post.frontmatter.author}, {post.frontmatter.date}
      </small>
      <p>{post.excerpt}</p>
      <span className="card-article-button">
        <Link to={'blog' + post.fields.slug} className="card-article-link">
          READ ARTICLE
        </Link>
      </span>
    </article>
  </div>;

export default Card;