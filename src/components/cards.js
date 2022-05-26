import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import './cards.css';

const Card = ({ post }) =>
  <div className="card">
    <GatsbyImage
      image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
    />
    <article className="card-article">
      <Link to={'.' + post.fields.slug} className="card-article-title">
        {post.frontmatter.title}
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