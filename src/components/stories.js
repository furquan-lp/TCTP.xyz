import React from 'react';
import { Link } from 'gatsby';
import { FiCalendar } from '@react-icons/all-files/fi/FiCalendar';
import { IconContext } from '@react-icons/all-files';

import './stories.css';
import './cards.css';
import sampleImg from '../images/esp32.svg';

const BigCard = ({ image, imageAlt, post }) =>
  <div className="big-card">
    <img src={image} alt={imageAlt} className="card-img" />
    <div className="card-article">
      <div className="card-article-content">
        <span className="card-article-title">{post.frontmatter.title}</span>
        <div className="card-article-date">
          <IconContext.Provider value={{ size: '1.8em', className: 'calendar-icon' }}>
            <FiCalendar />
          </IconContext.Provider>
          {post.frontmatter.date}
        </div>
        <span className="card-preview-text">{post.excerpt}...</span>
      </div>
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